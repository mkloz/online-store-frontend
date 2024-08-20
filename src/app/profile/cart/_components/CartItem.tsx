import { ICartItem } from "../../../../types/cart";
import { ImageIcon } from "lucide-react";
import { cn } from "../../../../lib/utils";
import CartItemQuantity from "./CartItemQuantity";
import LikeButton from "../../../../components/custom/product-card/LikeButton";
import { IUser } from "../../../../types/user";
import DeleteCartItemButton from "./DeleteCartItemButton";
import Link from "next/link";
import Image from "../../../../components/custom/Image";

interface CartItemProps extends React.ComponentProps<"div"> {
  cartItem: ICartItem;
  user?: IUser | null;
}

export default function CartItem({ cartItem, user, ...props }: CartItemProps) {
  if (!cartItem.article) return null;

  const newPrice = cartItem.article?.sale?.newPrise;
  const firstImage = cartItem.article?.images?.at(0)?.url;

  return (
    <article
      {...props}
      className={cn(
        "flex h-fit w-fit flex-wrap items-center justify-center gap-6 bg-bg-secondary p-4",
        props.className,
      )}
    >
      <Image
        src={firstImage || ""}
        alt="Image"
        placeholder="blur"
        width={224}
        height={144}
      />
      <div className="flex min-h-32 min-w-60 max-w-60 flex-col">
        <Link
          href={`/products/${cartItem.article.id}`}
          className="line-clamp-2 min-h-12 font-medium"
        >
          {cartItem.article.name}
        </Link>
        <p className="flex gap-4 text-gray">
          Quantity:{" "}
          <CartItemQuantity
            quantity={cartItem.quantity}
            productId={cartItem.article.id || 1}
          />
        </p>
        <div className="mt-auto flex justify-between gap-4">
          <LikeButton
            isFavorite={
              user?.favorites?.some((v) => v.id === cartItem.article?.id) ||
              false
            }
            className="max-h-8 items-center text-gray"
            product={cartItem.article}
          >
            Favorite
          </LikeButton>
          <DeleteCartItemButton productId={cartItem.article.id} />
        </div>
      </div>
      <div className="min-w-24 max-w-24">
        <p className="text-2xl font-bold">
          $
          {(newPrice ? newPrice : cartItem.subtotalPrice)
            .toFixed(2)
            .replace(".00", "")}
        </p>
        {newPrice && (
          <p className="text-gray line-through">
            ${(cartItem.article?.price).toFixed(2).replace(".00", "")}
          </p>
        )}
      </div>
    </article>
  );
}
