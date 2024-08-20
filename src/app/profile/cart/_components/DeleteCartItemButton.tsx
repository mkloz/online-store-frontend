"use client";
import { useRouter } from "next/navigation";
import CartApiService from "../../../../services/CartApiService";
import { Trash2 } from "lucide-react";
interface DeleteCartItemButtonProps {
  productId: number;
}
export default function DeleteCartItemButton({
  productId,
}: DeleteCartItemButtonProps) {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-2 text-gray transition-colors hover:text-red"
      onClick={async () => {
        await CartApiService.deleteItem(productId);

        router.refresh();
      }}
    >
      <Trash2 className="size-6" />
      Delete
    </button>
  );
}
