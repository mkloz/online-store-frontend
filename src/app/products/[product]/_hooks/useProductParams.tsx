import zod from "zod";

export const ProductParamSchema = zod.object({
  product: zod.coerce.number().int(),
});
