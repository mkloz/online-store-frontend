"use client";
import { env } from "../../../config/env";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import { GoogleIcon } from "../../icons";
import Button from "../../custom/Button";
import { toast } from "sonner";
import { AuthApiService } from "../../../services/AuthApiService";
import TokensCookieUtils from "../../../utils/TokensCookieUtils";
import { useRouter } from "next/navigation";
import { ApiExceptionSchema } from "../../../types/api-error";
import axios from "axios";

const GoogleSignIn = ({ label }: { label?: string }) => {
  const router = useRouter();
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      try {
        const res = await AuthApiService.googleLogin(tokenResponse.code);

        TokensCookieUtils.set(res);
        router.refresh();
        toast.success("Login successful");
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          const exception = ApiExceptionSchema.safeParse(error.response?.data);
          const message = exception.data?.message?.message;

          if (message?.length) {
            return toast.error(message.toString());
          }
        }
        toast.error("Login failed. Please try again");
      }
    },
    onError: (error) => toast.error(error.error || "Google login failed"),
  });

  return (
    <Button
      btnStyle={"outline"}
      type="button"
      onClick={() => login()}
      className="btn-secondary font-medium transition-transform enabled:hover:scale-105"
    >
      <GoogleIcon className="mr-4" />
      {label || "Sign in with Google"}
    </Button>
  );
};

export default function GoogleSignInButton({ label }: { label?: string }) {
  return (
    <GoogleOAuthProvider clientId={env.google.clientId}>
      <GoogleSignIn label={label} />
    </GoogleOAuthProvider>
  );
}
