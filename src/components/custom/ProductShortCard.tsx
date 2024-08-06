import Link from "next/link";
import { IProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ProductShortCardProps
  extends Omit<React.ComponentProps<typeof Link>, "href"> {
  product: IProduct;
}

export default function ProductShortCard({
  product,
  ...props
}: ProductShortCardProps) {
  return (
    <article className="flex p-2">
      <Link
        {...props}
        href={`/products/${product.id}`}
        className={cn(
          "group/card relative m-auto flex h-72 w-56 flex-col gap-8 overflow-hidden rounded-3xl bg-bg-secondary shadow-md hover:shadow-xl",
          props.className,
        )}
      >
        {product?.images?.[0].url ? (
          <Image
            src={product?.images[0].url || ""}
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
          <figcaption className="line-clamp-2">{product.name}</figcaption>
          <div className="flex items-center justify-between font-black">
            <span className="text-2xl">
              ${product.sale?.newPrise ? product.sale?.newPrise : product.price}
            </span>
            <span className="text-md text-text-disabled line-through">
              {product.sale?.newPrise ? `$${product.price}` : ""}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
