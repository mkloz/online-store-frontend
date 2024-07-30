"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rating } from "@/components/custom/Rating";
import { ProductFilterFormValues } from "../../_hooks/useProductFilterForm";

export default function RatingRadioGroup() {
  const form = useFormContext<ProductFilterFormValues>();

  return (
    <FormField
      control={form.control}
      name="starsCount"
      render={({ field }) => (
        <FormItem className="m-4">
          <FormControl>
            <RadioGroup
              onValueChange={(value) => field.onChange(+value)}
              value={String(field.value)}
              className="flex flex-col gap-0"
            >
              {[5, 4, 3, 2].map((value, i) => (
                <FormItem key={i} className="flex items-center">
                  <FormControl>
                    <RadioGroupItem value={value.toString()} />
                  </FormControl>
                  <FormLabel className="ml-4 flex grow items-center py-3 font-normal">
                    <Rating
                      rating={value}
                      className="ml-auto h-6 w-auto gap-2"
                    />
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
