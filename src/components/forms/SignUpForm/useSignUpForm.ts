import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignInFormSchema } from "../SignInForm/useSignInForm";

const SignUpFormSchema = SignInFormSchema.extend({
  name: z
    .string()
    .min(1, "Required field")
    .min(3, "Must be at least 3 characters")
    .max(32, "Must be at most 32 characters"),
});

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export default function useSignUpForm() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    shouldUseNativeValidation: false,
  });

  return form;
}
