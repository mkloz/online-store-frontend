"use client";
import { PencilLine } from "lucide-react";
import { Form } from "../../ui/form";
import TextInputField from "../inputs/TextInputField";
import useAddressForm, { AddressValues } from "./useAddressForm";
import Button from "../../custom/Button";
import { SubmitHandler, useFormState } from "react-hook-form";
import UserApiService from "../../../services/UserApiService";
import { toast } from "sonner";
import axios from "axios";
import { ApiExceptionSchema } from "../../../types/api-error";
interface AddressFormProps {
  defaultValues?: AddressValues;
  onSubmit?: (values: AddressValues) => void;
}
export default function AddressForm({
  defaultValues,
  onSubmit,
}: AddressFormProps) {
  const form = useAddressForm(defaultValues);
  const { isSubmitting, isValid } = useFormState(form);
  const submit: SubmitHandler<AddressValues> = async (values) => {
    try {
      await UserApiService.updateMe(values);
      onSubmit?.(values);
      toast.success("Address updated");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = ApiExceptionSchema.safeParse(error.response?.data).data
          ?.message?.message;

        if (err?.length) {
          return toast.error(err.toString());
        }
      }
      toast.error("Failed to update address");
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
            name="street"
            label="Enter your street"
            icon={<PencilLine />}
            autoComplete="street-address"
            placeholder="49 Featherstone Street"
          />
          <TextInputField
            name="city"
            autoComplete="address-level2"
            label="Enter your city"
            icon={<PencilLine />}
            placeholder="London"
          />
          <TextInputField
            name="country"
            autoComplete="country-name"
            label="Enter your country"
            icon={<PencilLine />}
            placeholder="United Kingdom"
          />
          <TextInputField
            name="postCode"
            autoComplete="postal-code"
            label="Enter your post code"
            icon={<PencilLine />}
            placeholder="EC1Y 8SY"
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
