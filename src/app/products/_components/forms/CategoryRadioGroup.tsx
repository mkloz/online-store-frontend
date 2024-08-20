"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ProductFilterFormValues } from "../../_hooks/useProductFilterForm";

const Item = (props: { value: string; label: string; count?: number }) => (
  <FormItem className="flex items-center">
    <FormControl>
      <RadioGroupItem value={props.value} />
    </FormControl>
    <FormLabel className="ml-2 flex grow items-center py-2 font-normal hover:underline">
      <span className="text-lg">{props.label}</span>
      <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
        {props.count}
      </span>
    </FormLabel>
  </FormItem>
);

export interface CategoriesCount {
  all: number;
  bicycles: number;
  accessories: number;
  gyroboards: number;
  monowheels: number;
  scooters: number;
  skateboards: number;
}
export default function CategoryRadioGroup({
  count,
}: {
  count: CategoriesCount;
}) {
  const form = useFormContext<ProductFilterFormValues>();

  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="m-4">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-col gap-0"
            >
              <Item value="undefined" label="All vehicles" count={count.all} />
              <Item value="bicycle" label="Bicycles" count={count.bicycles} />
              <Item
                value="skateboard"
                label="Skateboards"
                count={count.skateboards}
              />
              <Item
                value="gyroboard"
                label="Gyroboards"
                count={count.gyroboards}
              />
              <Item value="scooter" label="Scooters" count={count.scooters} />
              <Item
                value="monowheel"
                label="Monowheels"
                count={count.monowheels}
              />
              <Item
                value="accessory"
                label="Accessories"
                count={count.accessories}
              />
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
