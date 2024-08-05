import { ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IArticlePhoto, IProduct } from "@/types/product";
interface ProductImageCarouselProps
  extends React.ComponentProps<typeof Carousel> {
  product: IProduct;
}
import Image from "next/image";
import { cn } from "@/lib/utils";

function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
interface ProductImageProps {
  image: IArticlePhoto;
}

function ProductImage({ image }: ProductImageProps) {
  return (
    <div className="flex grow">
      <div className="flex aspect-square grow rounded-3xl bg-bg-secondary">
        {isValidUrl(image.url) ? (
          <Image
            src={image.url || ""}
            alt="Image"
            placeholder="blur"
            blurDataURL={image.url}
            className="size-full grow-0 object-cover object-center"
            width={480}
            height={480}
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <ImageIcon className="size-28 text-text-disabled" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductImageCarousel({
  product,
  ...props
}: ProductImageCarouselProps) {
  if (!product?.images) return null;

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      {...props}
      className={cn("min-w-[15rem] max-w-[35rem] grow", props.className)}
    >
      <CarouselContent className="m-0 grow">
        {product.images.map((image) => (
          <CarouselItem
            key={image.id}
            className="group/image relative grow overflow-hidden p-0"
          >
            {product.sale && (
              <div className="absolute top-8 hidden -translate-x-24 gap-8 rounded-r-lg bg-red px-4 py-1 text-3xl text-text-light transition-transform group-hover/image:translate-x-0 md:flex">
                <span>
                  {(
                    ((product.sale.newPrise - product.price) * 100) /
                    product.price
                  ).toFixed(0)}
                  %
                </span>
                <span>Sale</span>
              </div>
            )}
            <ProductImage image={image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
