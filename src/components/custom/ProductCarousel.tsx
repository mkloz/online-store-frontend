import { IProduct } from "../../types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps,
} from "../ui/carousel";
import ProductCard from "./ProductCard";

export interface ProductCarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CarouselProps {
  products: IProduct[];
}
export function ProductCarousel({ products, ...props }: ProductCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      {...props}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-[1fr]">
            <ProductCard product={product} className="mx-auto" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
