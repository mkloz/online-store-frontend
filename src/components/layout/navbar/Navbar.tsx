import { LogoIcon } from "../../icons";
import Link from "next/link";
import MainLinks from "./MainLinks";
import IconicLinks from "./IconicLinks";
import { LINKS } from "../../../utils/links";
import getUser from "../../../utils/getUser";

async function Navbar() {
  const user = await getUser();

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full flex-row flex-nowrap items-center justify-around gap-4 overflow-hidden px-4 shadow-md backdrop-blur-sm sm:gap-8">
      <Link href={LINKS.HOME}>
        <LogoIcon className="h-12 w-auto" />
      </Link>
      <MainLinks />
      <IconicLinks user={user} />
    </nav>
  );
}

export default Navbar;
