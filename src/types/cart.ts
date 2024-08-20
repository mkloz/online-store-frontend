import { z } from "zod";
import { IUser, UserSchema } from "./user";
import { IProduct, ProductSchema } from "./product";

const BaseCartItemSchema = z.object({
  id: z.number(),
  quantity: z.number(),
  subtotalPrice: z.number(),
});

export const CartItemSchema: z.ZodType<
  z.infer<typeof BaseCartItemSchema> & { article?: IProduct }
> = BaseCartItemSchema.extend({
  article: z.lazy(() => ProductSchema.optional()),
});

const BaseCartSchema = z.object({
  id: z.number(),
  totalPrice: z.number().optional(),
});

export const CartSchema: z.ZodType<
  z.infer<typeof BaseCartSchema> & { user?: IUser; cartItems?: ICartItem[] }
> = BaseCartSchema.extend({
  user: z.lazy(() => UserSchema.optional()),
  cartItems: z.lazy(() => z.array(CartItemSchema).optional()),
});

export interface ICart extends z.infer<typeof CartSchema> {}
export interface ICartItem extends z.infer<typeof CartItemSchema> {}
