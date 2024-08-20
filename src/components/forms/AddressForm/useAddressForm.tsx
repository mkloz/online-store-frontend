import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const AddressFormSchema = z.object({
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

export type AddressValues = z.infer<typeof AddressFormSchema>;
export default function useAddressForm(defaultValues?: AddressValues) {
  const form = useForm<AddressValues>({
    resolver: zodResolver(AddressFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    shouldUseNativeValidation: false,
  });

  return form;
}
