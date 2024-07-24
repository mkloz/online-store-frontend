"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../../components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export default function CategoryRadioGroup() {
  const form = useFormContext();

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
              className="flex flex-col gap-4"
            >
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="all" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">All vehicles </span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="bicycles" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">Bicycles</span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="skateboards" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">Skateboards</span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="gyroboards" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">Gyroboards</span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="monowheels" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">Monowheels</span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center">
                <FormControl>
                  <RadioGroupItem value="accessories" />
                </FormControl>
                <FormLabel className="ml-2 flex grow items-center font-normal">
                  <span className="text-lg">Accessories</span>
                  <span className="ml-auto rounded-md border border-slate-200 bg-purple-200 p-2 text-text-disabled">
                    1
                  </span>
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
