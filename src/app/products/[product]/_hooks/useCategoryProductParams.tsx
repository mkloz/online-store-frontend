import zod from "zod";

import { useParams } from "next/navigation";

const ProductParamSchema = zod.object({
  product: zod.coerce.number().int(),
});

export default function useProductParam() {
  return ProductParamSchema.parse(useParams());
}
