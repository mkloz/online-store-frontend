import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordSchema } from "../SignInForm/useSignInForm";

export const PasswordChangeFormSchema = z.object({
  oldPassword: PasswordSchema,
  newPassword: PasswordSchema,
});

export type PasswordChangeFormValues = z.infer<typeof PasswordChangeFormSchema>;

export default function usePasswordChangeForm() {
  const form = useForm<PasswordChangeFormValues>({
    resolver: zodResolver(PasswordChangeFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    shouldUseNativeValidation: false,
  });

  return form;
}
