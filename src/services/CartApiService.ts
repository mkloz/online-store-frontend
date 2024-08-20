import axios from "../lib/axios";
import { CartItemSchema, CartSchema } from "../types/cart";

export default class CartApiService {
  static async get() {
    const cart = await axios.get("/api/carts/my");
    return CartSchema.parse(cart.data?.data);
  }

  static async setItem(quantity: number, productId: number) {
    const item = await axios.put("/api/carts/my/items", {
      quantity,
      article: productId,
    });
    return CartItemSchema.parse(item.data?.data);
  }

  static async empty() {
    const cart = await this.get();
    console.log(cart.cartItems);
    await Promise.all(
      cart.cartItems?.map(async (item) =>
        item.article?.id ? this.deleteItem(item.article.id) : undefined,
      ) || [],
    );

    return this.get();
  }

  static async deleteItem(productId: number) {
    const item = await axios.delete(`/api/carts/my/items/${productId}`);

    return CartItemSchema.parse(item.data?.data);
  }

  static async incrementItem(quantity: number, productId: number) {
    const item = await axios.post("/api/carts/my/items/increment", {
      quantity,
      article: productId,
    });

    return CartItemSchema.parse(item.data?.data);
  }
  static async decrementItem(quantity: number, productId: number) {
    const item = await axios.delete("/api/carts/my/items/decrement", {
      data: {
        quantity,
        article: productId,
      },
    });
    return CartItemSchema.parse(item.data?.data);
  }
}
