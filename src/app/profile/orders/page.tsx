import { LinkButton } from "../../../components/custom/Button";
import OrderApiService from "../../../services/OrderApiService";
import { IPageProps } from "../../../types/nextjs";
import Order from "./_components/Order";
import Pagination from "./_components/Pagination";

const OrdersFallback = () => (
  <div className="flex h-full w-full items-center justify-center text-center">
    <div>
      <h1 className="m-4">Orders</h1>
      <p>You don`t have any orders</p>
      <LinkButton href="/products" size="wide" className="mt-4">
        Go to products
      </LinkButton>
    </div>
  </div>
);

export default async function OrdersPage({ searchParams }: IPageProps) {
  const orders = await OrderApiService.get(+searchParams.page || 1, 5);

  if (!orders?.items?.length) return <OrdersFallback />;

  return (
    <div className="flex w-full flex-wrap justify-around gap-16">
      <h2 className="w-full">Orders</h2>
      {orders.items.map((order) => (
        <Order order={order} key={order.id} />
      ))}
      <Pagination
        currentPage={orders.meta.currentPage || 1}
        lastPage={Math.ceil(orders.meta.itemCount / orders.meta.itemsPerPage)}
      />
    </div>
  );
}
