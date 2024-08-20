import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Required field")
    .min(3, "Must be at least 3 characters")
    .optional(),
  phoneNumber: z
    .string()
    .min(1, "Required field")
    .min(3, "Must be at least 3 characters")
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Invalid phone number",
    )
    .optional(),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

export default function useAddressForm(defaultValues?: ContactFormValues) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    shouldUseNativeValidation: false,
  });

  return form;
}
