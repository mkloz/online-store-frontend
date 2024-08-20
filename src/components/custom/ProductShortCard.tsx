import Link from "next/link";
import { IProduct } from "@/types/product";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "./Image";

interface ProductShortCardProps
  extends Omit<React.ComponentProps<typeof Link>, "href"> {
  product: IProduct;
}

export default function ProductShortCard({
  product,
  ...props
}: ProductShortCardProps) {
  const imageUrl = product?.images?.at(0)?.url;
  return (
    <article className="flex p-2">
      <Link
        {...props}
        href={`/products/${product.id}`}
        className={cn(
          "group/card relative m-auto flex h-72 w-56 flex-col gap-4 overflow-hidden rounded-3xl bg-bg-secondary shadow-sm transition-[transform,_box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[6px_12px_6px_rgb(0_0_0_/_0.2)]",
          props.className,
        )}
      >
        <Image src={imageUrl || ""} alt="Image" width={220} height={144} />
        <div className="mt-auto flex flex-col gap-2 p-4">
          <figcaption className="line-clamp-2 min-h-12">
            {product.name}
          </figcaption>
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
