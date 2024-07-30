import Image from "next/image";
import Link from "next/link";
import { LINKS } from "../../utils/links";
interface CategoryProps {
  photoUrl: string;
  name: string;
  href: string;
}
function Category({ photoUrl, name, href }: CategoryProps) {
  return (
    <Link
      href={href}
      className="relative flex h-[16rem] min-w-fit max-w-[40rem] grow basis-[28rem] flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-transparent bg-center hover:border-4 hover:border-red"
    >
      <Image
        src={photoUrl}
        alt={name}
        width={460}
        height={266}
        placeholder="blur"
        blurDataURL={photoUrl}
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <h1 className="px-4 text-text-light">{name}</h1>
    </Link>
  );
}

const CATEGORIES: CategoryProps[] = [
  {
    photoUrl: "/images/bicycle.png",
    name: "Bicycles",
    href: LINKS.CATALOG_BICYCLE,
  },
  {
    photoUrl: "/images/skateboard.png",
    name: "Skateboards",
    href: LINKS.CATALOG_SKATEBOARD,
  },
  {
    photoUrl: "/images/scooter.png",
    name: "Scooters",
    href: LINKS.CATALOG_SCOOTER,
  },
  {
    photoUrl: "/images/gyroboard.png",
    name: "Gyroboards",
    href: LINKS.CATALOG_GYROBOARD,
  },
  {
    photoUrl: "/images/monowheel.png",
    name: "Monowheels",
    href: LINKS.CATALOG_MONOWHEEL,
  },
  {
    photoUrl: "/images/accessory.png",
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
