import { products } from "../../__mock/products";
import { CategoryCarousel } from "./CategoryCarousel";

export default function ProductsFeed() {
  return (
    <section className="flex w-[15rem] flex-col gap-8 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]">
      <CategoryCarousel category="Sale" products={products} />
      <CategoryCarousel category="Bicycles" products={products} />
      <CategoryCarousel category="Skateboards" products={products} />
      <CategoryCarousel category="Scooters" products={products} />
      <CategoryCarousel category="Gyroboards" products={products} />
      <CategoryCarousel category="Monowheels" products={products} />
      <CategoryCarousel category="Accessories" products={products} />
    </section>
  );
}
