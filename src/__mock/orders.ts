import { IOrder } from "../types/order";
import { products } from "./products";

export const orders: IOrder[] = [
  {
    id: 1,
    totalPrice: 1653,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "DELIVERED",
    orderItems: [
      {
        id: 1,
        subtotalPrice: 100,
        article: products[0],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        subtotalPrice: 120,
        article: products[1],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        subtotalPrice: 1230,
        article: products[2],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        subtotalPrice: 103,
        article: products[3],
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: 2,
    totalPrice: 1653,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "DELIVERED",
    orderItems: [
      {
        id: 1,
        subtotalPrice: 100,
        article: products[0],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        subtotalPrice: 120,
        article: products[1],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        subtotalPrice: 1230,
        article: products[2],
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        subtotalPrice: 103,
        article: products[3],
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];
