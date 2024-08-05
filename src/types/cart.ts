import { IProduct } from "./product";
import { IUser } from "./user";

export interface ICart {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user?: IUser;
  cartItems?: ICartItem[];
  totalPrice?: number;
}

export interface ICartItem {
  id: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  article?: IProduct;
  cart?: ICart;
  subtotalPrice?: number;
}
