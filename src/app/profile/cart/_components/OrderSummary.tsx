import { cn } from "@/lib/utils";
import { ICart } from "@/types/cart";
import Button from "../../../../components/custom/Button";

interface OrderSummaryProps extends React.ComponentProps<"div"> {
  cart: ICart;
}
export default function CartSummary({ cart, ...props }: OrderSummaryProps) {
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
            {cart.cartItems?.reduce(
              (prev, current) =>
                prev + (current.article?.price || 0) * current.quantity,
              0,
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Sale</p>
          <p className="text-gray">
            $
            {cart.cartItems?.reduce(
              (prev, current) =>
                prev +
                (current.article?.price || 0) -
                (current.article?.sale?.newPrise || 0),
              0,
            )}
          </p>
        </div>
        <div className="my-4 flex justify-between">
          <p>Total</p>
          <p className="text-lg">${cart.totalPrice}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button btnStyle={"outline"} className="grow">
          Cancel
        </Button>
        <Button className="grow">Confirm</Button>
      </div>
    </div>
  );
}
