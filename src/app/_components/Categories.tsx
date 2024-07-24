import Image from "next/image";

function Category({ photoUrl, name }: { photoUrl: string; name: string }) {
  return (
    <section className="relative flex h-[16rem] min-w-fit max-w-[40rem] grow basis-[28rem] flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-transparent bg-center hover:border-4 hover:border-red">
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
    </section>
  );
}

const CATEGORIES = [
  {
    photoUrl: "/images/bicycle.png",
    name: "Bicycles",
  },
  {
    photoUrl: "/images/skateboard.png",
    name: "Skateboards",
  },
  {
    photoUrl: "/images/scooter.png",
    name: "Scooters",
  },
  {
    photoUrl: "/images/gyroboard.png",
    name: "Gyroboards",
  },
  {
    photoUrl: "/images/monowheel.png",
    name: "Monowheels",
  },
  {
    photoUrl: "/images/accessory.png",
    name: "Accessories",
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
