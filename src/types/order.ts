import { IProduct } from "./product";
import { IUser } from "./user";

export interface IAddress {
  id: number;
  street: string;
  city: string;
  country: string;
  postCode: string;
  createdAt: Date;
  updatedAt: Date;
  orders?: IOrder[];
  user?: IUser | null;
}

export interface ICancel {
  id: number;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
  order?: IOrder;
}

export interface IDelivery {
  id: number;
  shippingCost: number;
  addition: string | null;
  sendedAt: Date | null;
  deliveredAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  order?: IOrder;
}

export interface IOrderItem {
  id: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  article?: IProduct | null;
  order?: IOrder;
  subtotalPrice: number;
}
type OrderStatus =
  | "CENCELED"
  | "CREATED"
  | "PROCESSED"
  | "SENDED"
  | "DELIVERED"
  | "RECEIVED";

export interface IOrder {
  id: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  address?: IAddress;
  cancel?: ICancel | null;
  user?: IUser | null;
  delivery?: IDelivery | null;
  orderItems?: IOrderItem[];
  totalPrice: number;
}
