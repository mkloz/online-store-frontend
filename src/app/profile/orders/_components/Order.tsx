import dayjs from "dayjs";
import { IOrder, OrderStatus } from "../../../../types/order";
import ProductsCarousel from "./ProductsCarousel";
import { IProduct } from "../../../../types/product";
import StatusBar from "./StatusBar";
import { BadgeAlert } from "lucide-react";

const ORDER_STEPS = [
  OrderStatus.CREATED,
  OrderStatus.PROCESSED,
  OrderStatus.SENDED,
  OrderStatus.DELIVERED,
  OrderStatus.RECEIVED,
];

export default function Order({ order }: { order: IOrder }) {
  const step = ORDER_STEPS.findIndex((v) => v === order.status) + 1;
  return (
    <article className="flex w-full flex-col gap-6" id={String(order.id)}>
      <div>
        <h3>Order {order.id}</h3>
        <small className="text-gray">
          {dayjs(order.createdAt).format("DD.MM.YY")}
        </small>
      </div>
      <ProductsCarousel
        products={
          order.orderItems
            ?.reduce((prev, current) => {
              new Array(current.quantity)
                .fill(null)
                .map(() => prev.push(current.article as IProduct));
              return prev;
            }, new Array<IProduct>())
            .filter((i) => !!i) || []
        }
      />
      <p className="flex items-center gap-4">
        Total <b className="text-xl font-bold">${order.totalPrice}</b>
      </p>
      <p className="sr-only">Status</p>
      {step === 0 ? (
        <p className="flex gap-2 text-red">
          <BadgeAlert />
          Canceled
          {order.cancel?.reason && `(${order.cancel.reason})`}
        </p>
      ) : (
        <StatusBar step={step} />
      )}
    </article>
  );
}
