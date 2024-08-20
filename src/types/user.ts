import { z } from "zod";
import { AddressSchema, IAddress } from "./order";
import { IProduct, ProductSchema } from "./product";
import { IReview, ReviewSchema } from "./review";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
export enum Provider {
  EMAIL = "EMAIL",
  GOOGLE = "GOOGLE",
}
const BaseUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string().nullable(),
  role: z.nativeEnum(Role),
  isEmailConfirmed: z.boolean(),
  provider: z.nativeEnum(Provider),
});

export const UserSchema: z.ZodType<
  z.infer<typeof BaseUserSchema> & {
    reviews?: IReview[];
    favorites?: IProduct[];
    cart?: { id: number } | null;
    address?: IAddress | null;
  }
> = BaseUserSchema.extend({
  reviews: z.lazy(() => z.array(ReviewSchema).optional()),
  favorites: z.lazy(() => z.array(ProductSchema).optional()),
  cart: z.object({ id: z.number().positive() }).nullable().optional(),
  address: z.lazy(() => AddressSchema.nullable().optional()),
});

export interface IUser extends z.infer<typeof UserSchema> {}
