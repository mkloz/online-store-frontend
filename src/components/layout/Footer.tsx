import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, LogoIcon } from "../icons";
import { LINKS } from "../../utils/links";

const FAQ_LINKS = [
  { href: "/faq", label: "Help Center" },
  { href: "/faq", label: "Payment" },
  { href: "/faq", label: "Shipping" },
  { href: "/faq", label: "Returns Policy" },
  { href: "/faq", label: "Privacy Policy" },
];

const SITEMAP_LINKS = [
  { href: LINKS.HOME, label: "Home" },
  { href: LINKS.CATALOG_BICYCLE, label: "Bicycles" },
  { href: LINKS.CATALOG_SKATEBOARD, label: "Skateboards" },
  { href: LINKS.CATALOG_SCOOTER, label: "Scooters" },
  { href: LINKS.CATALOG_GYROBOARD, label: "Gyroboards" },
  { href: LINKS.CATALOG_MONOWHEEL, label: "Monowheels" },
  { href: LINKS.CATALOG_ACCESSORY, label: "Accessories" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/", icon: <FacebookIcon /> },
  { href: "https://www.instagram.com/", icon: <InstagramIcon /> },
  { href: "https://www.linkedin.com/", icon: <LinkedInIcon /> },
];

function Footer() {
  return (
    <footer className="relative mt-auto flex h-[414px] w-full items-center justify-center p-4 before:absolute before:inset-0 before:z-[-1] before:bg-[url(/images/skate.png)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-30">
      <div className="m-auto flex h-[70%] min-h-fit w-[70%] min-w-fit flex-wrap gap-8">
        <div className="flex grow flex-col items-center gap-2 md:items-start">
          <Link href="/">
            <LogoIcon className="h-20 w-auto" />
          </Link>
          <h2 className="mb-2 mt-auto">Socials</h2>
          <ul className="max-w-30 flex flex-row flex-wrap gap-4">
            {SOCIAL_LINKS.map(({ href, icon }) => (
              <li key={`${href}`}>
                <Link href={href} className="hover:text-red">
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-only ml-auto flex h-min flex-col gap-2 sm:not-sr-only">
          <h3 className="mb-2">Sitemap</h3>
          <ul className="flex flex-col gap-2">
            {SITEMAP_LINKS.map(({ href, label }) => (
              <li key={`${href}${label + "footer"}`}>
                <Link href={href} className="ml-1 hover:text-red">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-only flex h-min flex-col gap-2 sm:not-sr-only">
          <h3 className="mb-2">FAQ</h3>
          <ul className="flex flex-col gap-2">
            {FAQ_LINKS.map(({ href, label }) => (
              <Link
                key={`${href}${label + "footer"}`}
                href={href}
                className="ml-1 hover:text-red"
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
        <p className="basis-full text-center sm:text-start">
          2023 © Team Challenge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
