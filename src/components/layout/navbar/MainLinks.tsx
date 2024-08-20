"use client";
import { usePathname, useSearchParams } from "next/navigation";
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

function MainLinks() {
  const path = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const uri = path + (searchParams.size ? `?${searchParams}` : "");

  const HomeIconicLink = () => (
    <Link
      href={APP_LINKS.HOME}
      className={cn(
        "transition-[color] duration-300 hover:text-red",
        uri === APP_LINKS.HOME && "text-red",
      )}
    >
      <House />
    </Link>
  );

  const CatalogIconicLink = () => (
    <Link
      href={APP_LINKS.CATALOG}
      className={cn(
        "transition-[color] duration-300 hover:text-red",
        uri.includes(APP_LINKS.CATALOG) &&
          !searchParams.get("category") &&
          "text-red",
      )}
    >
      <PackageSearch />
    </Link>
  );

  return (
    <ul className="flex h-[2em] min-w-16 flex-wrap items-center justify-center gap-4 overflow-hidden">
      <li className="sm:hidden">
        <HomeIconicLink />
      </li>
      <li className="sm:hidden">
        <CatalogIconicLink />
      </li>
      {LINKS.map(({ href, label }) => {
        const isHomePage = uri === href && href === APP_LINKS.HOME;
        const isActiveLink =
          uri.includes(href) &&
          href !== APP_LINKS.HOME &&
          href !== APP_LINKS.CATALOG;
        const isCatalogPage =
          href === APP_LINKS.CATALOG && uri.includes(APP_LINKS.CATALOG);
        const noCategoryInCatalog =
          isCatalogPage && !searchParams.get("category");

        return (
          <li
            key={`${href}${label}`}
            className={cn(
              "hidden border-b-4 border-transparent text-lg font-normal transition-[border-color] duration-300 hover:border-red sm:flex",
              (isHomePage || isActiveLink || noCategoryInCatalog) &&
                "border-red",
            )}
          >
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MainLinks;
