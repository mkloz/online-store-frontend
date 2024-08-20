import { IProduct } from "../../types/product";
import { IUser } from "../../types/user";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps,
} from "../ui/carousel";
import ProductCard from "./product-card/ProductCard";

export interface ProductCarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CarouselProps {
  products: IProduct[];
  user?: IUser | null;
}
export function ProductCarousel({
  products,
  user,
  ...props
}: ProductCarouselProps) {
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
            <ProductCard product={product} className="mx-auto" user={user} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
