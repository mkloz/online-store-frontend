"use client";
import { toast } from "sonner";
import Button from "../../../../components/custom/Button";
import CartApiService from "../../../../services/CartApiService";
import { IProduct } from "../../../../types/product";

interface AddToCartButtonProps {
  product: IProduct;
}
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  return (
    <Button
      btnState={product.inStock ? "active" : "disabled"}
      className="transition-colors duration-300 enabled:hover:border-btn-secondary enabled:hover:bg-btn-secondary md:px-6"
      disabled={!product.inStock}
      onClick={async () => {
        await CartApiService.incrementItem(1, product.id);
        toast.success("Added to cart");
      }}
    >
      <span className="px-4 py-2">Add to cart</span>
    </Button>
  );
}
