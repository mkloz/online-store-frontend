import { useForm, useWatch } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "react";

export const MIN_PRICE = 0;
export const MAX_PRICE = 10_000;

const ProductFilterSchema = zod.object({
  sale: zod.boolean().default(false),
  minPrice: zod.number().min(MIN_PRICE).default(MIN_PRICE),
  maxPrice: zod.number().max(MAX_PRICE).default(MAX_PRICE),
  category: zod
    .literal("undefined")
    .or(zod.literal("gyroboard"))
    .or(zod.literal("bicycle"))
    .or(zod.literal("skateboard"))
    .or(zod.literal("accessory"))
    .or(zod.literal("scooter"))
    .or(zod.literal("monowheel"))
    .or(zod.string())
    .default("undefined"),
  starsCount: zod
    .number()
    .int()
    .min(0)
    .max(5)
    .or(zod.literal("undefined"))
    .default("undefined"),
  stock: zod
    .union([zod.literal("undefined"), zod.literal("inc"), zod.literal("exc")])
    .or(zod.string())
    .default("undefined"),
  price: zod
    .union([zod.literal("undefined"), zod.literal("asc"), zod.literal("desc")])
    .or(zod.string())
    .default("undefined"),
  limit: zod.number().int().min(0).default(16),
});

function isEqualParams(a: URLSearchParams, b: URLSearchParams) {
  a.sort();
  b.sort();

  return a.toString() === b.toString();
}
export type ProductFilterFormValues = zod.infer<typeof ProductFilterSchema>;

const CategoryParamSchema = zod.object({
  category: zod
    .array(zod.string())
    .default([])
    .transform((value) => value[0]),
});

export function useProductFilterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const { category } = CategoryParamSchema.parse(params);
  const search = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const searchParamToFields = useCallback(
    (): ProductFilterFormValues => ({
      sale: search.get("sale") === "true" || false,
      minPrice: Number(search.get("minPrice")) || MIN_PRICE,
      maxPrice: Number(search.get("maxPrice")) || MAX_PRICE,
      category: category || "undefined",
      stock: search.get("stock") || "undefined",
      price: search.get("price") || "undefined",
      starsCount: Number(search.get("starsCount")) || "undefined",
      limit: Number(search.get("limit")) || 16,
    }),
    [search, category],
  );
  const form = useForm<ProductFilterFormValues>({
    resolver: zodResolver(ProductFilterSchema),
    defaultValues: searchParamToFields(),
  });
  const formState = useWatch({ control: form.control });
  const debouncedState = useDebounce(formState, 1000);

  const saveToQuery = useCallback(
    (values: ProductFilterFormValues) => {
      const query = new URLSearchParams(searchParams);

      Object.entries(values)
        .filter(([key]) => key !== "category")
        .forEach(([key, value]) => {
          query.set(key, String(value));
        });

      if (
        isEqualParams(query, new URLSearchParams(searchParams)) &&
        category === values.category
      )
        return;

      router.replace(
        `/catalog${values.category === "undefined" ? "" : `/${values.category}`}?${query.toString()}`,
        { scroll: false },
      );
    },
    [searchParams, router, category],
  );

  const saveToState = useCallback(() => {
    form.reset(searchParamToFields());
  }, [form, searchParamToFields]);

  const submit = useCallback(() => {
    form.handleSubmit(saveToQuery)();
  }, [form, saveToQuery]);

  useEffect(() => {
    submit();
  }, [debouncedState, submit]);

  useLayoutEffect(() => {
    saveToState();
  }, [searchParams, saveToState]);

  return {
    ...form,
    submit,
  };
}
