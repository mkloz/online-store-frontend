import { SubmitHandler, useFormState } from "react-hook-form";
import { Form } from "@/components/ui/form";
import React from "react";
import { Mail, User } from "lucide-react";
import Button, { LinkButton } from "@/components/custom/Button";
import { GoogleIcon } from "@/components/icons";
import useSignUpForm, { SignUpFormValues } from "./useSignUpForm";
import EmailInputField from "../inputs/EmailInputField";
import TextInputField from "../inputs/TextInputField";
import PasswordInputField from "../inputs/PasswordInputField";
import { SeparatorOr } from "../SignInForm/SignInForm";
import { AuthApiService } from "../../../services/AuthApiService";
import { toast } from "sonner";
import axios from "axios";
import { ApiExceptionSchema, HttpErrorSchema } from "../../../types/api-error";
import GoogleSignInButton from "../buttons/GoogleSignInButton";

const EmailVerification = () => (
  <div className="flex size-full items-center">
    <div className="m-auto flex flex-col gap-4 text-center">
      <Mail className="mx-auto size-16 text-purple-700" />
      <p className="text-3xl font-bold">Verification</p>
      <p>We have sent you a letter</p>
      <LinkButton
        onClick={() => window.location.assign("/")}
        className="btn-secondary font-medium"
        href="mailto:"
      >
        Check your mailbox
      </LinkButton>
    </div>
  </div>
);

export default function SignUpForm() {
  const form = useSignUpForm();
  const { isValid, isLoading, isSubmitting, isSubmitSuccessful } =
    useFormState<SignUpFormValues>({
      control: form.control,
    });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      await AuthApiService.register(data);
      toast.success("Registered successfully.\nPlease verify your email");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const exception = ApiExceptionSchema.safeParse(error.response?.data);
        const message = exception.data?.message?.message;

        if (message?.length) {
          toast.error(message.toString());
          throw error;
        }
      }
      toast.error("Register failed. Please try again");
      throw error;
    }
  };

  return (
    <Form {...form}>
      {!isSubmitSuccessful ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col gap-2"
          noValidate
        >
          <TextInputField
            icon={<User />}
            name="name"
            autoComplete="name"
            placeholder="Joe Doe"
            label="Username"
          />
          <EmailInputField name="email" />
          <PasswordInputField name="password" />
          <div className="mt-auto flex flex-col gap-4">
            <SeparatorOr />
            <GoogleSignInButton label="Sign Up with google" />
            <Button
              type="submit"
              className="btn-secondary font-medium transition-transform enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              btnState={
                isValid && !isLoading && !isSubmitting ? "active" : "disabled"
              }
            >
              Register
            </Button>
          </div>
        </form>
      ) : (
        <EmailVerification />
      )}
    </Form>
  );
}
