import { SubmitHandler, useFormState } from "react-hook-form";
import { Form } from "@/components/ui/form";
import useSignInForm, { SignInFormValues } from "./useSignInForm";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/custom/Button";
import { GoogleIcon } from "@/components/icons";
import { AuthApiService } from "@/services/AuthApiService";
import { ApiExceptionSchema, HttpErrorSchema } from "@/types/api-error";
import axios from "axios";
import EmailInputField from "../inputs/EmailInputField";
import PasswordInputField from "../inputs/PasswordInputField";
import { toast } from "sonner";
import TokensCookieUtils from "../../../utils/TokensCookieUtils";
import GoogleSignInButton from "../buttons/GoogleSignInButton";
import { useRouter } from "next/navigation";

export function SeparatorOr() {
  return (
    <div className="flex items-center justify-between gap-2 text-gray">
      <Separator className="h-[2px] w-min grow" />
      <p className="">or</p>
      <Separator className="h-[2px] w-min grow" />
    </div>
  );
}

export default function SignInForm() {
  const form = useSignInForm();
  const router = useRouter();
  const { isValid, isLoading, isSubmitting } = useFormState<SignInFormValues>({
    control: form.control,
  });
  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      const res = await AuthApiService.login(data.email, data.password);

      TokensCookieUtils.set(res);
      toast.success("Login successful");
      router.refresh();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const exception = ApiExceptionSchema.safeParse(error.response?.data);
        const message = exception.data?.message?.message;

        if (message?.length) {
          return toast.error(message.toString());
        }
      }
      toast.error("Login failed. Please try again");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col gap-2"
        noValidate
      >
        <EmailInputField name="email" />
        <PasswordInputField name="password" />
        <div className="mt-auto flex flex-col gap-4">
          <SeparatorOr />
          <GoogleSignInButton label="Sign In with google" />
          <Button
            type="submit"
            className="btn-secondary font-medium transition-transform enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            btnState={
              isValid && !isLoading && !isSubmitting ? "active" : "disabled"
            }
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
