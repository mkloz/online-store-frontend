"use client";
import { PencilLine, User } from "lucide-react";
import { Form } from "../../ui/form";
import TextInputField from "../inputs/TextInputField";
import useContactForm, { ContactFormValues } from "./useContactForm";
import Button from "../../custom/Button";
import { SubmitHandler, useFormState } from "react-hook-form";
import UserApiService from "../../../services/UserApiService";
import { toast } from "sonner";
import axios from "axios";
import { ApiExceptionSchema } from "../../../types/api-error";
interface ContactFormProps {
  defaultValues?: ContactFormValues;
}
export default function ContactForm({ defaultValues }: ContactFormProps) {
  const form = useContactForm(defaultValues);
  const { isSubmitting, isValid } = useFormState(form);
  const submit: SubmitHandler<ContactFormValues> = async (values) => {
    try {
      await UserApiService.updateMe(values);
      toast.success("Contacts updated");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = ApiExceptionSchema.safeParse(error.response?.data).data
          ?.message?.message;

        if (err?.length) {
          return toast.error(err.toString());
        }
      }
      toast.error("Failed to update contacts");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-4"
      >
        <div className="flex w-full flex-wrap justify-between gap-4 *:min-w-64 *:grow *:basis-auto">
          <TextInputField
            name="name"
            label="Enter your full name"
            autoComplete="name"
            icon={<User />}
            placeholder="Full Name"
          />
          <TextInputField
            name="phoneNumber"
            autoComplete="tel"
            label="Enter your phone number"
            icon={<PencilLine />}
            placeholder="(___)___ __ __"
          />
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
