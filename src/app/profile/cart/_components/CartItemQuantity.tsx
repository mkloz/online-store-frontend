"use client";

import { useRouter } from "next/navigation";
import { InputNumber } from "../../../../components/ui/input/input-number";
import CartApiService from "../../../../services/CartApiService";
import { toast } from "sonner";
import { useDebounce, useIsFirstRender } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export default function CartItemQuantity({
  quantity,
  productId,
}: {
  quantity: number;
  productId: number;
}) {
  const router = useRouter();
  const MIN = 1;
  const MAX = 99;

  async function updateQuantity(value: number) {
    if (value < MIN || value > MAX) {
      toast.error("Quantity must be between 1 and 99");
      return;
    }
    try {
      await CartApiService.setItem(value, productId);

      router.refresh();
    } catch (error) {
      toast.error("Failed to update cart item quantity");
    }
  }

  return (
    <InputNumber
      min={MIN}
      max={MAX}
      defaultValue={quantity}
      onValueChange={async (value) => {
        updateQuantity(value);
      }}
    />
  );
}
