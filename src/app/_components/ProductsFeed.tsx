import { products } from "../../__mock/products";
import { LINKS } from "../../utils/links";
import { CategoryCarousel } from "./CategoryCarousel";

export default function ProductsFeed() {
  return (
    <section className="flex w-[15rem] flex-col gap-8 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]">
      <CategoryCarousel
        category="Sale"
        products={products}
        viewAllHref={`/products?sale=true`}
      />
      <CategoryCarousel
        category="Bicycles"
        products={products}
        viewAllHref={LINKS.CATALOG_BICYCLE}
      />
      <CategoryCarousel
        category="Skateboards"
        products={products}
        viewAllHref={LINKS.CATALOG_SKATEBOARD}
      />
      <CategoryCarousel
        category="Scooters"
        products={products}
        viewAllHref={LINKS.CATALOG_SCOOTER}
      />
      <CategoryCarousel
        category="Gyroboards"
        products={products}
        viewAllHref={LINKS.CATALOG_GYROBOARD}
      />
      <CategoryCarousel
        category="Monowheels"
        products={products}
        viewAllHref={LINKS.CATALOG_MONOWHEEL}
      />
      <CategoryCarousel
        category="Accessories"
        products={products}
        viewAllHref={LINKS.CATALOG_ACCESSORY}
      />
    </section>
  );
}
