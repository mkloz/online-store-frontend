import Image from "next/image";
import Link from "next/link";
import { LINKS } from "../../utils/links";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Bicycle from "/public/images/bicycle.png";
import Skateboard from "/public/images/skateboard.png";
import Scooter from "/public/images/scooter.png";
import Gyroboard from "/public/images/gyroboard.png";
import Monowheel from "/public/images/monowheel.png";
import Accessory from "/public/images/accessory.png";

interface CategoryProps {
  photo: StaticImport;
  name: string;
  href: string;
}
function Category({ photo, name, href }: CategoryProps) {
  return (
    <Link
      href={href}
      className="text-shadow-md relative flex h-[16rem] min-w-fit max-w-[40rem] grow basis-[28rem] flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-transparent bg-center [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] hover:border-4 hover:border-red"
    >
      <Image
        src={photo}
        alt={name}
        width={460}
        height={266}
        placeholder="blur"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <h1 className="px-4 text-text-light">{name}</h1>
    </Link>
  );
}

const CATEGORIES: CategoryProps[] = [
  {
    photo: Bicycle,
    name: "Bicycles",
    href: LINKS.CATALOG_BICYCLE,
  },
  {
    photo: Skateboard,
    name: "Skateboards",
    href: LINKS.CATALOG_SKATEBOARD,
  },
  {
    photo: Scooter,
    name: "Scooters",
    href: LINKS.CATALOG_SCOOTER,
  },
  {
    photo: Gyroboard,
    name: "Gyroboards",
    href: LINKS.CATALOG_GYROBOARD,
  },
  {
    photo: Monowheel,
    name: "Monowheels",
    href: LINKS.CATALOG_MONOWHEEL,
  },
  {
    photo: Accessory,
    name: "Accessories",
    href: LINKS.CATALOG_ACCESSORY,
  },
];
export function Categories() {
  return (
    <div className="flex min-w-fit flex-wrap items-center justify-center gap-8">
      {CATEGORIES.map((category) => (
        <Category key={category.name} {...category} />
      ))}
    </div>
  );
}
