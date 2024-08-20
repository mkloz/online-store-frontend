"use client";
import { PencilLine, User } from "lucide-react";
import { Form } from "../../ui/form";
import TextInputField from "../inputs/TextInputField";
import useContactForm, {
  PasswordChangeFormValues,
} from "./usePasswordChangeForm";
import Button from "../../custom/Button";
import { SubmitHandler, useFormState } from "react-hook-form";
import UserApiService from "../../../services/UserApiService";
import { toast } from "sonner";
import axios from "axios";
import { ApiExceptionSchema } from "../../../types/api-error";
import usePasswordChangeForm from "./usePasswordChangeForm";
import { AuthApiService } from "../../../services/AuthApiService";
import PasswordInputField from "../inputs/PasswordInputField";

export default function PasswordChangeForm() {
  const form = usePasswordChangeForm();
  const { isSubmitting, isValid } = useFormState(form);
  const submit: SubmitHandler<PasswordChangeFormValues> = async (values) => {
    try {
      await AuthApiService.changePassword(values);
      toast.success("Password updated");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = ApiExceptionSchema.safeParse(error.response?.data).data
          ?.message?.message;

        if (err?.length) {
          return toast.error(err.toString());
        }
      }
      toast.error("Failed to update Password");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-4"
      >
        <div className="flex w-full flex-wrap justify-between gap-4 *:min-w-64 *:grow *:basis-auto">
          <PasswordInputField name="oldPassword" label="Old Password" />
          <PasswordInputField name="newPassword" label="New Password" />
        </div>
        <Button
          type="submit"
          btnState={isSubmitting || !isValid ? "disabled" : undefined}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
