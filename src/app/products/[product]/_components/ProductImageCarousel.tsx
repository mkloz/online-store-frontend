import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IArticlePhoto, IProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import Image from "@/components/custom/Image";
interface ProductImageCarouselProps
  extends React.ComponentProps<typeof Carousel> {
  product: IProduct;
}
interface ProductImageProps {
  image: IArticlePhoto;
}

function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="flex grow">
      <div className="m-2 flex aspect-square grow overflow-hidden rounded-3xl bg-bg-secondary">
        <Image src={image.url} alt="Image" width={544} height={640} />
      </div>
    </div>
  );
}

export default function ProductImageCarousel({
  product,
  ...props
}: ProductImageCarouselProps) {
  if (!product?.images?.length) return null;

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      {...props}
      className={cn(
        "group/image min-w-[15rem] max-w-[35rem] grow",
        props.className,
      )}
    >
      <div className="absolute left-0 top-8 z-50 overflow-hidden">
        {product.sale && (
          <div className="hidden -translate-x-24 gap-8 rounded-r-lg bg-red px-4 py-1 text-3xl text-text-light transition-transform group-hover/image:translate-x-0 md:flex">
            <span className="min-w-20">
              {(
                ((product.sale.newPrise - product.price) * 100) /
                product.price
              ).toFixed(0)}
              %
            </span>
            <span>Sale</span>
          </div>
        )}
      </div>
      <CarouselContent className="m-0 grow">
        {product.images.map((image) => (
          <CarouselItem
            key={image.id}
            className="relative grow overflow-hidden p-0"
          >
            <ProductImage image={image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
