import Image from "next/image";
import { ICartItem } from "../../../../types/cart";
import { ImageIcon, Trash2 } from "lucide-react";
import { InputNumber } from "../../../../components/ui/input-number";
import { LikeIcon } from "../../../../components/icons";
import { cn } from "../../../../lib/utils";

interface CartItemProps extends React.ComponentProps<"div"> {
  cartItem: ICartItem;
}

export default function CartItem({ cartItem, ...props }: CartItemProps) {
  const newPrice = cartItem.article?.sale?.newPrise;
  return (
    <article
      {...props}
      className={cn(
        "flex w-fit flex-wrap items-center justify-center gap-6 bg-bg-secondary p-4",
        props.className,
      )}
    >
      {cartItem.article?.images?.[0].url ? (
        <Image
          src={cartItem.article.images[0].url}
          alt="Image"
          placeholder="blur"
          blurDataURL={cartItem.article.images[0].url}
          className="rounded-lg object-cover object-center"
          width={224}
          height={144}
        />
      ) : (
        <div className="w- flex h-36 w-56">
          <ImageIcon className="m-auto h-16 w-16 text-text-disabled" />
        </div>
      )}
      <div className="flex min-h-32 min-w-60 max-w-60 flex-col">
        <p className="font-medium">{cartItem.article?.name}</p>
        <p className="flex gap-4 text-gray">
          Quantity: <InputNumber min={1} max={99} defaultValue={1} />
        </p>
        <div className="mt-auto flex justify-between gap-4">
          <label className="flex gap-2 text-gray">
            <LikeIcon />
            Favorite
          </label>
          <label className="flex gap-2 text-gray">
            <Trash2 className="text-gray" />
            Delete
          </label>
        </div>
      </div>
      <div className="min-w-24 max-w-24">
        <p className="text-2xl font-bold">
          ${newPrice ? newPrice : cartItem.subtotalPrice}
        </p>
        {newPrice && (
          <p className="text-gray line-through">${cartItem.article?.price} </p>
        )}
      </div>
    </article>
  );
}
