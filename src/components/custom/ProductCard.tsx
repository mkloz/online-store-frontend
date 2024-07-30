import { IProduct } from "../../types/product";
import { LikeIcon } from "../icons";
import Image from "next/image";
import { Rating } from "./Rating";
import Button from "./Button";
import { cn } from "../../lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct;
}
function ProductCard({ product, ...props }: ProductCardProps) {
  return (
    <div className="flex h-[28rem] w-60 min-w-60">
      <div
        {...props}
        className={cn(
          "group/card relative m-auto flex h-[27rem] w-56 flex-col gap-8 overflow-hidden rounded-3xl bg-bg-secondary shadow-md hover:shadow-xl",
          props.className,
        )}
      >
        <div className="flex justify-between pr-4 pt-4">
          {product.sale && (
            <div className="flex translate-x-[-3.5rem] gap-4 rounded-r-md bg-red px-4 py-1 text-text-light transition-transform group-hover/card:translate-x-0">
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

          <button className="ml-auto">
            <LikeIcon />
          </button>
        </div>
        {product?.images?.[0].url ? (
          <Image
            src={product?.images?.[0].url || ""}
            alt="Image"
            placeholder="blur"
            blurDataURL={product?.images?.[0].url}
            className="h-auto w-auto object-cover"
            width={220}
            height={144}
          />
        ) : (
          <div className="flex h-36 w-full">
            <ImageIcon className="m-auto h-16 w-16 text-text-disabled" />
          </div>
        )}
        <div className="flex flex-col gap-2 p-4">
          <Rating rating={product.rating} className="flex" />
          <figcaption className="line-clamp-2">{product.name}</figcaption>
          <div className="flex items-center justify-between font-black">
            <span className="text-2xl">
              ${product.sale?.newPrise ? product.sale?.newPrise : product.price}
            </span>
            <span className="text-md text-text-disabled line-through">
              {product.sale?.newPrise ? `$${product.price}` : ""}
            </span>
          </div>
          <Button className="transition-colors duration-300 hover:border-btn-secondary hover:bg-btn-secondary">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
