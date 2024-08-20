import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconWrapped, Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextInputFieldProps extends React.ComponentProps<typeof Input> {
  name: string;
  icon: React.ReactNode;
  label?: string;
}

export default function TextInputField({
  icon,
  label,
  ...props
}: TextInputFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ fieldState, field }) => (
        <FormItem className="flex flex-col gap-1">
          <FormLabel className="mb-2 font-medium">{label}</FormLabel>
          <FormControl>
            <IconWrapped
              startIcon={{ Icon: icon }}
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
                type="text"
                className="rounded-none border-none bg-inherit p-0 outline-none"
                {...props}
                {...form.register(props.name)}
              />
            </IconWrapped>
          </FormControl>
          <FormMessage className="text-sm text-red" />
        </FormItem>
      )}
    />
  );
}
