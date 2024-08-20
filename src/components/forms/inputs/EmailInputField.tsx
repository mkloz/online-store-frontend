import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconWrapped, Input } from "@/components/ui/input";
import { AtSign, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function EmailInputField({ name }: { name: string }) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ fieldState, field }) => (
        <FormItem className="flex flex-col gap-1">
          <FormLabel className="mb-2 font-medium">Email</FormLabel>
          <FormControl>
            <IconWrapped
              startIcon={{ Icon: <AtSign /> }}
              endIcon={
                !fieldState.error && (fieldState.isTouched || field.value)
                  ? { Icon: <Check className="text-green" /> }
                  : undefined
              }
              className={cn(
                "border-current",
                !fieldState.error &&
                  (fieldState.isTouched || field.value) &&
                  "text-purple-700",
                fieldState.error && "text-red",
              )}
            >
              <Input
                type="email"
                autoComplete="email"
                placeholder={"example@example.com"}
                className="rounded-none border-none bg-inherit p-0 outline-none"
                {...form.register(name)}
              />
            </IconWrapped>
          </FormControl>
          <FormMessage className="text-sm text-red" />
        </FormItem>
      )}
    />
  );
}
