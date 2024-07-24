import { useForm } from "react-hook-form";

export const MIN_PRICE = 0;
export const MAX_PRICE = 10_000;

interface ProductFilterFormValues {
  sale: boolean;
  minPrice: number;
  maxPrice: number;
  category: string;
  rating: number;
}

export function useProductFilterForm() {
  const form = useForm<ProductFilterFormValues>({
    defaultValues: {
      sale: false,
      minPrice: MIN_PRICE,
      maxPrice: MAX_PRICE,
      category: "all",
      rating: 5,
    },
  });

  return form;
}
