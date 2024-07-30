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

export default function CategoryRadioGroup() {
  const form = useFormContext<ProductFilterFormValues>();

  const Item = (props: { value: string; label: string; count: number }) => (
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
              <Item value="undefined" label="All vehicles" count={1} />
              <Item value="bicycle" label="Bicycles" count={1} />
              <Item value="skateboard" label="Skateboards" count={1} />
              <Item value="gyroboard" label="Gyroboards" count={1} />
              <Item value="scooter" label="Scooters" count={1} />
              <Item value="monowheel" label="Monowheels" count={1} />
              <Item value="accessory" label="Accessories" count={1} />
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
