import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { ITokens, TokensSchema } from "../services/AuthApiService";
import isClientSide from "./isClientSide";

export const TOKENS_COOKIE_KEY = "tokens";

export default class TokensCookieUtils {
  static MAX_AGE = 60 * 60 * 24 * 7;

  static set(tokens: ITokens) {
    if (isClientSide()) {
      return setCookie(TOKENS_COOKIE_KEY, tokens, {
        maxAge: TokensCookieUtils.MAX_AGE,
      });
    }
    require("next/headers")
      .cookies()
      .set(TOKENS_COOKIE_KEY, JSON.stringify(tokens), {
        maxAge: TokensCookieUtils.MAX_AGE,
      });
  }

  static get() {
    if (isClientSide()) {
      return TokensSchema.safeParse(
        JSON.parse(getCookie(TOKENS_COOKIE_KEY) || "{}"),
      ).data;
    }

    return TokensSchema.safeParse(
      JSON.parse(
        getCookie(TOKENS_COOKIE_KEY, {
          cookies: require("next/headers").cookies,
        }) || "{}",
      ),
    ).data;
  }

  static async delete() {
    if (isClientSide()) {
      deleteCookie(TOKENS_COOKIE_KEY);
      window.location.reload();
    }
    require("next/navigation").redirect("/api/auth/logout");
  }
}
