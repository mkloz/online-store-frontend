"use client";
import { PencilLine } from "lucide-react";
import { Form } from "../../ui/form";
import TextInputField from "../inputs/TextInputField";
import useCreateOrderForm, { CreateOrderValues } from "./useCreateOrderForm";
import Button from "../../custom/Button";
import { SubmitHandler, useFormState } from "react-hook-form";
import UserApiService from "../../../services/UserApiService";
import { toast } from "sonner";
import OrderApiService from "../../../services/OrderApiService";
import axios from "axios";
import { ApiExceptionSchema } from "../../../types/api-error";
import { IOrder } from "../../../types/order";
interface CreateOrderFormProps {
  defaultValues?: CreateOrderValues;
  onSubmit?: (order: IOrder) => void;
}
export default function CreateOrderForm({
  defaultValues,
  onSubmit,
}: CreateOrderFormProps) {
  const form = useCreateOrderForm(defaultValues);
  const { isSubmitting, isValid } = useFormState(form);
  const submit: SubmitHandler<CreateOrderValues> = async (values) => {
    try {
      const order = await OrderApiService.create(values);
      onSubmit?.(order);
      toast.success("Order created");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = ApiExceptionSchema.safeParse(error.response?.data).data
          ?.message?.message;

        if (err?.length) {
          return toast.error(err.toString());
        }
      }
      toast.error("Failed to create order");
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
            name="addition"
            label="Enter note for delivery(optional)"
            icon={<PencilLine />}
            placeholder="Be careful with the package"
          />
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
