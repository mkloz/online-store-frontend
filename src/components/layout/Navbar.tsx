"use client";
import { usePathname } from "next/navigation";
import { CartIcon, LikeIcon, LogoIcon, SearchIcon, UserIcon } from "../icons";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { PackageSearch } from "lucide-react";
import { House } from "lucide-react";

const LINKS = {
  home: { href: "/", label: "Home" },
  catalog: { href: "/catalog", label: "Catalog" },
  bicycles: { href: "/bicycles", label: "Bicycles" },
  skateboards: { href: "/skateboards", label: "Skateboards" },
  scooters: { href: "/scooters", label: "Scooters" },
  gyroboards: { href: "/gyroboards", label: "Gyroboards" },
  monowheels: { href: "/monowheels", label: "Monowheels" },
  accessories: { href: "/accessories", label: "Accessories" },
};

const ICONIC_LINKS = [
  { href: "/search", icon: <SearchIcon /> },
  { href: "/like", icon: <LikeIcon /> },
  { href: "/cart", icon: <CartIcon /> },
  { href: "/user", icon: <UserIcon /> },
];

function Navbar() {
  const selected = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full flex-row flex-nowrap items-center justify-around gap-4 overflow-hidden px-4 shadow-md backdrop-blur-sm sm:gap-8">
      <Link href="/">
        <LogoIcon className="h-12 w-auto" />
      </Link>
      <ul className="flex h-[2em] min-w-16 flex-wrap items-center justify-center gap-4 overflow-hidden">
        <li className="sm:hidden">
          <Link
            href={LINKS.home.href}
            className={cn(
              "transition-[color] duration-300 hover:text-red",
              selected === LINKS.home.href && "text-red",
            )}
          >
            <House />
          </Link>
        </li>
        <li className="sm:hidden">
          <Link
            href={LINKS.catalog.href}
            className={cn(
              "transition-[color] duration-300 hover:text-red",
              selected === LINKS.catalog.href && "text-red",
            )}
          >
            <PackageSearch />
          </Link>
        </li>
        {Object.values(LINKS).map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            className={cn(
              "hidden border-b-4 border-transparent text-lg font-normal transition-[border-color] duration-300 hover:border-red sm:flex",
              selected === href && "border-red",
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
                selected === href && "text-red",
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
