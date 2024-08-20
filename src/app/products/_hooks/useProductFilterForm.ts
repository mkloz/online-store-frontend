import { useForm, useWatch } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCounter, useDebounce } from "@uidotdev/usehooks";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

export const MIN_PRICE = 0;
export const MAX_PRICE = 10_000;

const ProductFilterSchema = zod.object({
  sale: zod.boolean().optional(),
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
  starsCount: zod.number().int().min(0).max(5).default(0),
  stock: zod
    .union([zod.literal("undefined"), zod.literal("inc"), zod.literal("exc")])
    .or(zod.string())
    .optional(),
  price: zod
    .union([zod.literal("undefined"), zod.literal("asc"), zod.literal("desc")])
    .or(zod.string())
    .optional(),
  limit: zod.number().int().min(0).default(16).optional(),
  search: zod.string().optional(),
});

function isEqualParams(a: URLSearchParams, b: URLSearchParams) {
  a.sort();
  b.sort();

  return a.toString() === b.toString();
}
export type ProductFilterFormValues = zod.infer<typeof ProductFilterSchema>;

export function useProductFilterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const searchParamToFields = useCallback(
    (): ProductFilterFormValues => ({
      sale: search.get("sale") === "inc" || false,
      minPrice: Number(search.get("minPrice")) || MIN_PRICE,
      maxPrice: Number(search.get("maxPrice")) || MAX_PRICE,
      category: search.get("category") || "undefined",
      stock: search.get("stock") || undefined,
      price: search.get("price") || undefined,
      starsCount: Number(search.get("starsCount")) || 0,
      limit: Number(search.get("limit")) || 16,
      search: search.get("search") || "",
    }),
    [search],
  );
  const form = useForm<ProductFilterFormValues>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(ProductFilterSchema),
    defaultValues: searchParamToFields(),
  });
  const formState = useWatch({ control: form.control });
  const debouncedState = useDebounce(formState, 500);

  const saveToQuery = useCallback(
    (values: ProductFilterFormValues) => {
      const query = new URLSearchParams(searchParams);
      Object.entries(values).forEach(([key, value]) => {
        if (key === "sale") {
          return value ? query.set(key, "inc") : query.delete(key);
        }
        if (String(value) === "undefined") return query.delete(key);

        query.set(key, String(value));
      });

      if (isEqualParams(query, new URLSearchParams(searchParams))) return;

      query.delete("page");
      router.replace(`/products?${query.toString()}`, { scroll: false });
    },
    [searchParams, router],
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
