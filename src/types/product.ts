import { z } from "zod";

export const ImageSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
});

export const SaleSchema = z.object({
  id: z.number(),
  newPrise: z.number(),
  activeTill: z.coerce.date(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const ProductSchema = z.object({
  id: z.number(),
  characteristic: z.string(),
  rating: z.number().nullable(),
  inStock: z.boolean(),
  price: z.number(),
  discription: z.string(),
  name: z.string(),
  views: z.number(),
  isPreviouslyUsed: z.boolean(),
  images: z.array(ImageSchema).optional(),
  sale: SaleSchema.nullable().optional(),
  categories: z.array(CategorySchema).optional(),
});

export interface IProduct extends z.infer<typeof ProductSchema> {}
export interface IArticlePhoto extends z.infer<typeof ImageSchema> {}

export interface ICategory extends z.infer<typeof CategorySchema> {}
export interface ISale extends z.infer<typeof SaleSchema> {}

export interface IProductFilterOptions
  extends z.infer<typeof ProductFilterOptionsSchema> {}
const FormOptionalInt = z
  .string()
  .transform((val) => (val === "undefined" ? undefined : parseInt(val)))
  .optional();
const FormOptionalString = z
  .string()
  .transform((val) => (val === "undefined" ? undefined : val))
  .optional();
export const ProductFilterOptionsSchema = z.object({
  search: FormOptionalString,
  category: FormOptionalString,
  minPrice: FormOptionalInt,
  maxPrice: FormOptionalInt,
  sale: FormOptionalString,
  stock: FormOptionalString,
  starsCount: FormOptionalInt,
  price: FormOptionalString,
  rating: FormOptionalString,
  page: FormOptionalInt,
  limit: FormOptionalInt,
});
