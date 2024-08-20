import { cn } from "@/lib/utils";
import { ICart } from "@/types/cart";
import Button from "../../../../components/custom/Button";
import CancelOrderButton from "./CancelOrderButton";
import ConfirmOrderButton from "./ConfirmOrderButton";
import { IUser } from "../../../../types/user";

interface OrderSummaryProps extends React.ComponentProps<"div"> {
  cart: ICart;
  user: IUser;
}
export default function CartSummary({
  cart,
  user,
  ...props
}: OrderSummaryProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex h-fit w-full min-w-fit max-w-lg grow flex-col gap-6 rounded-2xl bg-purple-200 p-6 font-semibold",
        props.className,
      )}
    >
      <h2 className="text-center">Order summary</h2>
      <div>
        <div className="flex justify-between">
          <p>Price</p>
          <p className="text-gray">
            $
            {cart.cartItems
              ?.reduce(
                (prev, current) =>
                  prev + (current.article?.price || 0) * current.quantity,
                0,
              )
              .toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Sale</p>
          <p className="text-gray">
            $
            {cart.cartItems
              ?.reduce(
                (prev, current) =>
                  prev +
                  ((current.article?.price || 0) -
                    (current.article?.sale?.newPrise || 0)) *
                    current.quantity,
                0,
              )
              .toFixed(2)}
          </p>
        </div>
        <div className="my-4 flex justify-between">
          <p>Total</p>
          <p className="text-lg">${cart.totalPrice?.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <CancelOrderButton />
        <ConfirmOrderButton address={user.address} />
      </div>
    </div>
  );
}
