import React from "react";
import { IProduct } from "@/types/product";
import ProductImageCarousel from "./ProductImageCarousel";
import { cn } from "@/lib/utils";
import { IReview } from "../../../../types/review";
import ProductDescriptionCard from "./ProductDescriptionCard";

interface ProductProps extends React.ComponentProps<"section"> {
  product: IProduct;
  reviews: IReview[];
}
export default function Product({ product, reviews, ...props }: ProductProps) {
  return (
    <section
      {...props}
      className={cn(
        "flex h-fit w-full min-w-[15rem] max-w-fit flex-wrap items-center justify-around gap-24",
        props.className,
      )}
    >
      <ProductImageCarousel product={product} />
      <ProductDescriptionCard product={product} reviews={reviews} />
    </section>
  );
}
