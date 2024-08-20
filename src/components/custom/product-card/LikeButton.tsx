"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "../../../lib/utils";
import UserApiService from "../../../services/UserApiService";
import { IProduct } from "../../../types/product";
import { LikeIcon } from "../../icons";

interface LikeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean;
  product: IProduct;
}
export default function LikeButton({
  isFavorite,
  product,
  ...props
}: LikeButtonProps) {
  const router = useRouter();

  return (
    <button
      {...props}
      type="button"
      className={cn("group flex gap-2", props.className)}
      onClick={async () => {
        isFavorite
          ? await UserApiService.removeFromFavorites(product.id)
          : await UserApiService.addToFavorites(product.id);
        router.refresh();
      }}
    >
      <LikeIcon
        className={cn(
          "size-full transition-transform group-hover:scale-125",
          isFavorite && "fill-red text-red",
        )}
      />
      {props.children}
    </button>
  );
}
