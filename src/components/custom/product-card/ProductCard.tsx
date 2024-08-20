import { IProduct } from "../../../types/product";
import Image from "../Image";
import { Rating } from "../Rating";
import Button from "../Button";
import { cn } from "../../../lib/utils";
import { IUser } from "../../../types/user";
import LikeButton from "./LikeButton";
import Link from "next/link";

interface ProductCardProps extends React.ComponentProps<"div"> {
  product: IProduct;
  user?: IUser | null;
}

function ProductCard({ product, user, ...props }: ProductCardProps) {
  return (
    <article className="flex h-[28rem] w-60 min-w-60">
      <div
        {...props}
        className={cn(
          "group/card relative m-auto flex h-[27rem] w-56 flex-col gap-6 overflow-hidden rounded-3xl bg-bg-secondary shadow-sm transition-[transform,_box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[6px_12px_6px_rgb(0_0_0_/_0.2)]",
          props.className,
        )}
      >
        <div className="flex min-h-12 justify-between pr-4 pt-4">
          {product.sale && product.inStock && (
            <div className="flex translate-x-[-3.5rem] gap-4 rounded-r-md bg-red px-4 py-1 text-text-light transition-transform group-hover/card:translate-x-0">
              <span className="min-w-10">
                {(
                  ((product.sale.newPrise - product.price) * 100) /
                  product.price
                ).toFixed(0)}
                %
              </span>
              <span>Sale</span>
            </div>
          )}
          {!product.inStock && (
            <div className="flex rounded-r-md bg-gray px-4 py-1 text-text-light">
              <span>Out of stock</span>
            </div>
          )}
          {user && (
            <LikeButton
              className="ml-auto"
              product={product}
              isFavorite={
                user?.favorites?.some((fav) => fav.id === product.id) || false
              }
            />
          )}
        </div>
        <Link href={`/products/${product.id}`} className="flex flex-col gap-6">
          <div className="min-h-36">
            <Image
              src={product.images?.at(0)?.url || null}
              alt="Image"
              width={220}
              height={144}
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Rating rating={product.rating} className="flex" />

            <figcaption className="line-clamp-2 min-h-12">
              {product.name}
            </figcaption>
            <div className="flex items-center justify-between font-black">
              <span className="text-2xl">
                $
                {product.sale?.newPrise
                  ? product.sale?.newPrise
                  : product.price}
              </span>
              <span className="text-md text-text-disabled line-through">
                {product.sale?.newPrise
                  ? `$${product.price.toFixed(2).replace(".00", "")}`
                  : ""}
              </span>
            </div>
            <Button
              btnState={product.inStock ? "active" : "disabled"}
              className="transition-colors duration-300 enabled:hover:border-btn-secondary enabled:hover:bg-btn-secondary"
            >
              Buy
            </Button>
          </div>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
