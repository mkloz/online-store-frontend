import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const CreateOrderFormSchema = z.object({
  addition: z.string().optional(),
  street: z
    .string()
    .min(1, "Required field")
    .min(3, "Must be at least 3 characters"),
  city: z
    .string()
    .min(1, "Required field")
    .min(2, "Must be at least 2 characters"),
  country: z.string().min(1, "Required field"),
  postCode: z.string().min(1, "Required field"),
});

export type CreateOrderValues = z.infer<typeof CreateOrderFormSchema>;
export default function useCreateOrderForm(defaultValues?: CreateOrderValues) {
  const form = useForm<CreateOrderValues>({
    resolver: zodResolver(CreateOrderFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    shouldUseNativeValidation: false,
  });

  return form;
}
