import { z } from "zod";
import { IProduct, ProductSchema } from "./product";
import { IUser, UserSchema } from "./user";

const BaseAddressSchema = z.object({
  id: z.number(),
  street: z.string(),
  city: z.string(),
  country: z.string(),
  postCode: z.string(),
});

export const AddressSchema: z.ZodType<
  z.infer<typeof BaseAddressSchema> & { orders?: IOrder[]; user?: IUser | null }
> = BaseAddressSchema.extend({
  orders: z.lazy(() => z.array(OrderSchema).optional()),
  user: z.lazy(() => UserSchema.optional()),
});

export interface IAddress extends z.infer<typeof AddressSchema> {}

const BaseCancelSchema = z.object({
  id: z.number(),
  reason: z.string(),
});

export const CancelSchema: z.ZodType<
  z.infer<typeof BaseCancelSchema> & { order?: IOrder }
> = BaseCancelSchema.extend({
  order: z.lazy(() => OrderSchema.optional()),
});
export interface ICancel extends z.infer<typeof CancelSchema> {}

const BaseDeliverySchema = z.object({
  id: z.number(),
  shippingCost: z.number(),
  addition: z.string().nullable(),
  sendedAt: z.coerce.date().nullable(),
  deliveredAt: z.coerce.date().nullable(),
});

export const DeliverySchema: z.ZodType<
  z.infer<typeof BaseDeliverySchema> & { order?: IOrder }
> = BaseDeliverySchema.extend({
  order: z.lazy(() => OrderSchema.optional()),
});

export interface IDelivery extends z.infer<typeof DeliverySchema> {}

const BaseOrderItemSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  subtotalPrice: z.number(),
});

export const OrderItemSchema: z.ZodType<
  z.infer<typeof BaseOrderItemSchema> & { article?: IProduct; order?: IOrder }
> = BaseOrderItemSchema.extend({
  article: z.lazy(() => ProductSchema.optional()),
  order: z.lazy(() => OrderSchema.optional()),
});

export interface IOrderItem extends z.infer<typeof OrderItemSchema> {}

export enum OrderStatus {
  CENCELED = "CENCELED",
  CREATED = "CREATED",
  PROCESSED = "PROCESSED",
  SENDED = "SENDED",
  DELIVERED = "DELIVERED",
  RECEIVED = "RECEIVED",
}

const BaseOrderSchema = z.object({
  id: z.number(),
  status: z.nativeEnum(OrderStatus),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  totalPrice: z.number(),
});

export const OrderSchema: z.ZodType<
  z.infer<typeof BaseOrderSchema> & {
    address?: IAddress;
    cancel?: ICancel | null;
    user?: IUser | null;
    delivery?: IDelivery | null;
    orderItems?: IOrderItem[];
  }
> = BaseOrderSchema.extend({
  address: z.lazy(() => AddressSchema.optional()),
  cancel: z.lazy(() => CancelSchema.nullable().optional()),
  user: z.lazy(() => UserSchema.nullable().optional()),
  delivery: z.lazy(() => DeliverySchema.nullable().optional()),
  orderItems: z.lazy(() => z.array(OrderItemSchema).optional()),
});

export interface IOrder extends z.infer<typeof OrderSchema> {}
