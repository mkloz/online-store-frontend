import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { FormField } from "@/components/ui/form";
import { ProductFilterFormValues } from "../../_hooks/useProductFilterForm";

const SELECT_STOCK_OPTION: Record<string, string | undefined> = {
  inc: "Stock: In stock",
  exc: "Stock: Out of stock",
  undefined: "Stock: All",
};

const SELECT_PRICE_OPTION: Record<string, string | undefined> = {
  asc: "Price: Low to High",
  desc: "Price: High to Low",
  undefined: "Price: default",
};

export default function ProductSortForm() {
  const form = useFormContext<ProductFilterFormValues>();

  return (
    <div className="flex flex-wrap gap-6 *:grow sm:*:grow-0">
      <div className="w-40">
        <FormField
          control={form.control}
          name={"stock"}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>{SELECT_STOCK_OPTION[field.value]}</SelectTrigger>
              <SelectContent>
                {Object.entries(SELECT_STOCK_OPTION)
                  .filter(([key]) => key !== field.value)
                  .map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="w-40">
        <FormField
          control={form.control}
          name={"price"}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>{SELECT_PRICE_OPTION[field.value]}</SelectTrigger>
              <SelectContent>
                {Object.entries(SELECT_PRICE_OPTION)
                  .filter(([key]) => key !== field.value)
                  .map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="w-16 sm:ml-auto">
        <FormField
          control={form.control}
          name={"limit"}
          render={({ field }) => (
            <Select
              onValueChange={(val) => field.onChange(+val)}
              defaultValue={String(field.value)}
            >
              <SelectTrigger>{String(field.value)}</SelectTrigger>
              <SelectContent>
                {[8, 16, 24]
                  .filter((val) => val !== field.value)
                  .map((val) => (
                    <SelectItem key={val} value={String(val)}>
                      {val}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
}
