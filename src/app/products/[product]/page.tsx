"use client";
import { products } from "../../../__mock/products";
import { reviews } from "../../../__mock/reviews";
import { CategoryCarousel } from "../../_components/CategoryCarousel";
import Breadcrumbs from "./_components/Breadcrums";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";

export default function ProductPage() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="m-8 flex w-[15rem] flex-col gap-16 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]">
        <Breadcrumbs className="basis-full" productName={products[1].name} />
        <Product product={products[0]} reviews={reviews} className="m-auto" />
        <Reviews reviews={reviews} />
        <CategoryCarousel
          products={products}
          category={"Other similar products"}
          viewAllHref={`/products`}
          className="flex w-[15rem] flex-col gap-8 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]"
        />
        <section id="reviews"></section>
      </div>
    </main>
  );
}
