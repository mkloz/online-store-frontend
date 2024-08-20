import UserApiService from "../services/UserApiService";
import TokensCookieUtils from "./TokensCookieUtils";

export default async function getUser() {
  return (await TokensCookieUtils.get()) ? await UserApiService.me() : null;
}
