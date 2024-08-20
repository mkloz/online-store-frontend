import axios from "../lib/axios";
import { OrderSchema } from "../types/order";
import { PaginationResponse } from "../types/pagination-response";
interface CreateOrderValues {
  addition?: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
}
export default class OrderApiService {
  static async get(page?: number, limit?: number) {
    const order = await axios.get("/api/orders/my", {
      params: { page, limit },
    });

    return PaginationResponse.extend({ items: OrderSchema.array() }).parse(
      order.data?.data,
    );
  }
  static async create(values: CreateOrderValues) {
    const order = await axios.post("/api/orders", values);

    return OrderSchema.parse(order.data?.data);
  }
}
