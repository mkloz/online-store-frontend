import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
export const PasswordSchema = z
  .string()
  .min(8, "Must be at least 8 characters")
  .max(32, "Must be at most 32 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");
export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, "Required field")
    .includes("@")
    .email({ message: "Invalid email address" }),
  password: PasswordSchema,
});
export type SignInFormValues = z.infer<typeof SignInFormSchema>;
export default function useSignInForm() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    shouldUseNativeValidation: false,
  });

  return form;
}
