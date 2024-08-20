import { AuthApiService } from "./../services/AuthApiService";
import axios from "axios";
import { env } from "../config/env";
import { redirect } from "next/navigation";
import { LINKS } from "../utils/links";
import TokensCookieUtils from "../utils/TokensCookieUtils";
import isClientSide from "../utils/isClientSide";
import { toast } from "sonner";

const instance = axios.create({
  baseURL: env.backendUrl,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const tokens = TokensCookieUtils.get();

  if (tokens?.accessToken) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
});

function redirectTo(location: string) {
  isClientSide() ? window.location.assign(location) : redirect(location);
}

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      axios.isAxiosError(error) &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      const tokens = await TokensCookieUtils.get();

      if (!tokens?.refreshToken) {
        if (isClientSide()) {
          toast.error("Please sign in to continue");

          setTimeout(() => {
            window.location.search = "signIn";
          }, 500);
        } else {
          redirect(LINKS.LOGIN);
        }
        return Promise.reject(error);
      }

      try {
        const res = await AuthApiService.refresh(tokens.refreshToken);

        TokensCookieUtils.set(res);
      } catch (error) {
        redirectTo(LINKS.API_LOGOUT);

        return Promise.reject(error);
      }
      return instance.request(error.config || {});
    }
    return Promise.reject(error);
  },
);

export default instance;
