import { orders } from "../../../__mock/orders";
import Order from "./_components/Order";

export default function OrdersPage() {
  return (
    <div className="flex w-full flex-wrap justify-around gap-16">
      <h2 className="w-full">Orders</h2>
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </div>
  );
}
