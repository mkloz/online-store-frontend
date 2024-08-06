"use client";
import { cart } from "../../../__mock/cart";
import CartItem from "./_components/CartItem";
import { DeliveryInfo } from "./_components/DeliveryInfo";
import CartSummary from "./_components/OrderSummary";

export default function CartPage() {
  return (
    <div className="flex flex-wrap justify-around gap-8">
      <h1 className="w-full">Cart</h1>
      <div className="flex flex-col gap-2 overflow-hidden rounded-3xl">
        {cart.cartItems?.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="flex h-fit grow flex-col items-center gap-4">
        <CartSummary cart={cart} />
        <DeliveryInfo />
      </div>
    </div>
  );
}
