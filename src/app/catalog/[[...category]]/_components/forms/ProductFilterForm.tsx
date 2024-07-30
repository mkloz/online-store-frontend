"use client";
import { useFormContext } from "react-hook-form";
import PriceRangeInput from "./PriceRangeInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MAX_PRICE,
  MIN_PRICE,
  ProductFilterFormValues,
} from "../../_hooks/useProductFilterForm";
import { cn } from "@/lib/utils";
import CategoryRadioGroup from "./CategoryRadioGroup";
import { SaleCheckbox } from "./SaleCheckbox";
import RatingRadioGroup from "./RatingRadioGroup";
import { X } from "lucide-react";
import { ComponentProps } from "react";

interface ProductFilterFormProps extends ComponentProps<"div"> {}

export default function ProductFilterForm(props: ProductFilterFormProps) {
  const form = useFormContext<ProductFilterFormValues>();

  return (
    <div
      {...props}
      className={cn(
        "flex h-min min-w-fit max-w-[30rem] shrink grow basis-80 flex-col overflow-hidden rounded-xl bg-bg-secondary",
        props.className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h2 className="w-full basis-full bg-black p-4 text-text-light">
          Product filter
        </h2>
        <SaleCheckbox />
        <PriceRangeInput minPrice={MIN_PRICE} maxPrice={MAX_PRICE} />
        <Accordion type="multiple" defaultValue={["category", "rating"]}>
          <AccordionItem
            title="Category"
            value="category"
            className="border-b-purple-700"
          >
            <AccordionTrigger className="bg-purple-200 p-4">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <CategoryRadioGroup />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem title="Rating" value="rating" className="border-b-0">
            <AccordionTrigger className="bg-purple-200 p-4">
              Rating
            </AccordionTrigger>
            <AccordionContent>
              <RatingRadioGroup />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {Object.values(form.formState.errors).map((error, index) => (
          <span key={index} className="text-red-500">
            {error?.message?.toString()}
          </span>
        ))}

        <button
          type="reset"
          onClick={() => {
            form.reset({
              sale: false,
              minPrice: MIN_PRICE,
              maxPrice: MAX_PRICE,
              category: "undefined",
              stock: "undefined",
              price: "undefined",
              starsCount: "undefined",
              limit: 16,
            });
          }}
          className="ml-auto flex w-fit items-center hover:underline"
        >
          <p className="p-2">Reset All</p>
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}