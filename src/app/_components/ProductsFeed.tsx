import { ProductApiService } from "../../services/ProductApiService";
import { IUser } from "../../types/user";
import { LINKS } from "../../utils/links";
import { CategoryCarousel } from "./CategoryCarousel";

export default async function ProductsFeed({ user }: { user?: IUser | null }) {
  const sales = await ProductApiService.getMany({
    page: 2,
    sale: "inc",
  }).then((res) => res.items);
  const bicycles = await ProductApiService.getMany({
    category: "bicycle",
  }).then((res) => res.items);
  const skateboards = await ProductApiService.getMany({
    category: "skateboard",
  }).then((res) => res.items);
  const scooters = await ProductApiService.getMany({
    category: "scooter",
  }).then((res) => res.items);
  const gyroboards = await ProductApiService.getMany({
    category: "gyroboard",
  }).then((res) => res.items);
  const monowheels = await ProductApiService.getMany({
    category: "monowheel",
  }).then((res) => res.items);
  const accessories = await ProductApiService.getMany({
    category: "accessory",
  }).then((res) => res.items);

  return (
    <section className="flex w-[15rem] flex-col gap-8 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]">
      {!!sales.length && (
        <CategoryCarousel
          category="Sale"
          products={sales}
          viewAllHref={`/products?sale=true`}
          user={user}
        />
      )}
      {!!bicycles.length && (
        <CategoryCarousel
          category="Bicycles"
          products={bicycles}
          user={user}
          viewAllHref={LINKS.CATALOG_BICYCLE}
        />
      )}
      {!!skateboards.length && (
        <CategoryCarousel
          category="Skateboards"
          products={skateboards}
          user={user}
          viewAllHref={LINKS.CATALOG_SKATEBOARD}
        />
      )}
      {!!scooters.length && (
        <CategoryCarousel
          category="Scooters"
          products={scooters}
          user={user}
          viewAllHref={LINKS.CATALOG_SCOOTER}
        />
      )}
      {!!gyroboards.length && (
        <CategoryCarousel
          category="Gyroboards"
          products={gyroboards}
          user={user}
          viewAllHref={LINKS.CATALOG_GYROBOARD}
        />
      )}
      {!!monowheels.length && (
        <CategoryCarousel
          category="Monowheels"
          products={monowheels}
          user={user}
          viewAllHref={LINKS.CATALOG_MONOWHEEL}
        />
      )}
      {!!accessories.length && (
        <CategoryCarousel
          category="Accessories"
          products={accessories}
          user={user}
          viewAllHref={LINKS.CATALOG_ACCESSORY}
        />
      )}
    </section>
  );
}
