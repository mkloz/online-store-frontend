import { cookies } from "next/headers";
import { TOKENS_COOKIE_KEY } from "../../../../utils/TokensCookieUtils";
import { LINKS } from "../../../../utils/links";
import { redirect } from "next/navigation";

export async function GET() {
  console.log("logout");
  cookies().delete(TOKENS_COOKIE_KEY);
  redirect(LINKS.HOME);
}
