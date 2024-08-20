import { LinkButton } from "../../../components/custom/Button";
import CartApiService from "../../../services/CartApiService";
import UserApiService from "../../../services/UserApiService";
import CartItem from "./_components/CartItem";
import { DeliveryInfo } from "./_components/DeliveryInfo";
import CartSummary from "./_components/OrderSummary";

const CartEmptyFallback = () => (
  <div className="flex h-full w-full items-center justify-center text-center">
    <div>
      <h1 className="m-4">Cart</h1>
      <p>Cart is empty. For now... 😉</p>
      <LinkButton href="/products" size="wide" className="mt-4">
        Go to products
      </LinkButton>
    </div>
  </div>
);

export default async function CartPage() {
  const user = await UserApiService.me();
  const cart = await CartApiService.get();

  if (!cart || !cart?.cartItems?.length) return <CartEmptyFallback />;

  return (
    <div className="flex flex-wrap justify-around gap-8">
      <h1 className="w-full">Cart</h1>
      <div className="flex flex-col gap-2 self-start overflow-hidden rounded-3xl">
        {cart.cartItems?.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} user={user} />
        ))}
      </div>
      <div className="flex h-fit grow flex-col items-center gap-4">
        <CartSummary cart={cart} user={user} />
        <DeliveryInfo />
      </div>
    </div>
  );
}
