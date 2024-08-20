import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { InputPassword } from "@/components/ui/input/input-password";

export default function PasswordInputField({
  name,
  label = "Password",
}: {
  name: string;
  label?: string;
}) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ fieldState, field }) => (
        <FormItem className="flex flex-col gap-1">
          <FormLabel className="mb-2 font-medium">{label}</FormLabel>
          <FormControl>
            <InputPassword
              {...form.register(name)}
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
            />
          </FormControl>
          <FormMessage className="text-sm text-red" />
        </FormItem>
      )}
    />
  );
}
