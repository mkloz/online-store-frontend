import dayjs from "dayjs";
import { IOrder } from "../../../../types/order";
import ProductsCarousel from "./ProductsCarousel";
import { IProduct } from "../../../../types/product";
import StatusBar from "./StatusBar";

export default function Order({ order }: { order: IOrder }) {
  return (
    <article className="flex w-full flex-col gap-6">
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
      <StatusBar step={2} />
    </article>
  );
}
