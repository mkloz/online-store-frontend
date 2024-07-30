"use client";
import { usePathname } from "next/navigation";
import { CartIcon, LikeIcon, LogoIcon, SearchIcon, UserIcon } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PackageSearch } from "lucide-react";
import { House } from "lucide-react";
import { LINKS as APP_LINKS } from "@/utils/links";

const LINKS = [
  { href: APP_LINKS.HOME, label: "Home" },
  { href: APP_LINKS.CATALOG, label: "Catalog" },
  { href: APP_LINKS.CATALOG_BICYCLE, label: "Bicycles" },
  { href: APP_LINKS.CATALOG_SKATEBOARD, label: "Skateboards" },
  { href: APP_LINKS.CATALOG_SCOOTER, label: "Scooters" },
  { href: APP_LINKS.CATALOG_GYROBOARD, label: "Gyroboards" },
  { href: APP_LINKS.CATALOG_MONOWHEEL, label: "Monowheels" },
  { href: APP_LINKS.CATALOG_ACCESSORY, label: "Accessories" },
];

const ICONIC_LINKS = [
  { href: "/search", icon: <SearchIcon /> },
  { href: "/like", icon: <LikeIcon /> },
  { href: "/cart", icon: <CartIcon /> },
  { href: "/user", icon: <UserIcon /> },
];

function Navbar() {
  const path = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full flex-row flex-nowrap items-center justify-around gap-4 overflow-hidden px-4 shadow-md backdrop-blur-sm sm:gap-8">
      <Link href="/">
        <LogoIcon className="h-12 w-auto" />
      </Link>
      <ul className="flex h-[2em] min-w-16 flex-wrap items-center justify-center gap-4 overflow-hidden">
        <li className="sm:hidden">
          <Link
            href={APP_LINKS.HOME}
            className={cn(
              "transition-[color] duration-300 hover:text-red",
              path === APP_LINKS.HOME && "text-red",
            )}
          >
            <House />
          </Link>
        </li>
        <li className="sm:hidden">
          <Link
            href={APP_LINKS.CATALOG}
            className={cn(
              "transition-[color] duration-300 hover:text-red",
              path === APP_LINKS.CATALOG && "text-red",
            )}
          >
            <PackageSearch />
          </Link>
        </li>
        {LINKS.map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            className={cn(
              "hidden border-b-4 border-transparent text-lg font-normal transition-[border-color] duration-300 hover:border-red sm:flex",
              path === href && "border-red",
            )}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-row flex-nowrap gap-2 sm:gap-4">
        {ICONIC_LINKS.map(({ href, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "transition-[color] duration-300 hover:text-red",
                path === href && "text-red",
              )}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
