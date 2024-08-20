import { z } from "zod";
import { IProduct, ProductSchema } from "./product";
import { IUser, UserSchema } from "./user";

const BaseReviewSchema = z.object({
  id: z.number(),
  text: z.string(),
  stars: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const ReviewSchema: z.ZodType<
  z.infer<typeof BaseReviewSchema> & {
    article?: IProduct;
    author?: IUser;
  }
> = BaseReviewSchema.extend({
  article: z.lazy(() => ProductSchema.optional()),
  author: z.lazy(() => UserSchema.optional()),
});

export interface IReview extends z.infer<typeof ReviewSchema> {}
