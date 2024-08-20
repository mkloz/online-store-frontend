"use client";
import { PencilLine } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import TextInputField from "../inputs/TextInputField";
import Button from "../../custom/Button";
import { SubmitHandler, useFormState } from "react-hook-form";
import { toast } from "sonner";
import OrderApiService from "../../../services/OrderApiService";
import axios from "axios";
import { ApiExceptionSchema } from "../../../types/api-error";
import { IOrder } from "../../../types/order";
import useCreateReviewForm, { CreateReviewValues } from "./useCreateReviewForm";
import { IReview } from "../../../types/review";
import { Input } from "../../ui/input";
import { RatingSelect } from "../../custom/RatingSelect";
import { Textarea } from "../../ui/textarea";
import ReviewApiService from "../../../services/ReviewApiService";

const RATING_DESCRIPTION = [
  "Terrible",
  "Very bad",
  "Bad",
  "Ok",
  "Good",
  "Excellent",
];
interface CreateReviewFormProps {
  defaultValues?: CreateReviewValues;
  productId: number;
  onSubmit?: (order: IReview) => void;
}
export default function CreateReviewForm({
  defaultValues,
  productId,
  onSubmit,
}: CreateReviewFormProps) {
  const form = useCreateReviewForm(defaultValues);
  const { isSubmitting, isValid } = useFormState(form);
  const submit: SubmitHandler<CreateReviewValues> = async (values) => {
    try {
      console.log(
        JSON.stringify({
          ...values,
          productId,
        }),
      );
      const order = await ReviewApiService.create({
        ...values,
        productId,
      });
      onSubmit?.(order);
      toast.success("Review created. Thank you!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = ApiExceptionSchema.safeParse(error.response?.data).data
          ?.message?.message;

        if (err?.length) {
          return toast.error(err.toString());
        }
      }
      toast.error("Failed to create review");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-4"
      >
        <div className="flex w-full min-w-fit max-w-96 flex-wrap justify-between gap-4 *:min-w-64 *:grow *:basis-auto">
          <FormField
            name="stars"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-4">
                <FormLabel className="text-md font-medium">
                  Rate the product
                </FormLabel>
                <FormControl>
                  <RatingSelect
                    rating={field.value}
                    onChoose={(v) => {
                      v === field.value ? field.onChange(0) : field.onChange(v);
                    }}
                  />
                </FormControl>
                {field.value > 0 && (
                  <FormDescription>
                    {RATING_DESCRIPTION[field.value]}
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="text"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-4">
                <FormLabel className="text-md font-medium">
                  Write a comment
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="max-h-36 min-h-36 basis-full resize-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          btnState={isSubmitting || !isValid ? "disabled" : undefined}
          className="mt-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
