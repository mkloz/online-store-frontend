"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export function SaleCheckbox() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="sale"
      render={({ field }) => (
        <FormItem className="flex items-center gap-2">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => {
                return field.onChange({ target: { value: checked } });
              }}
            />
          </FormControl>
          <FormLabel className="text-lg">SALE</FormLabel>
        </FormItem>
      )}
    />
  );
}
