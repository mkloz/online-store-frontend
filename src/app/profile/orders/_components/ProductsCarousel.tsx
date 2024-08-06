import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import ProductShortCard from "../../../../components/custom/ProductShortCard";

interface ProductsCarouselProps extends React.ComponentProps<typeof Carousel> {
  products: IProduct[];
}

export default function ProductsCarousel({
  products,
  ...props
}: ProductsCarouselProps) {
  return (
    <div className="xl m-auto flex w-[15rem] flex-col gap-8 lg:w-[30rem] xl:w-[45rem] 2xl:w-[60rem] 3xl:w-[75rem]">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        {...props}
        className={cn("", props.className)}
      >
        <CarouselContent className="m-0">
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-[1fr] p-0">
              <ProductShortCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
