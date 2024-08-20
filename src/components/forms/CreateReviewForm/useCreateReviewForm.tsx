import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const CreateReviewFormSchema = z.object({
  text: z
    .string()
    .min(1, "Required field")
    .min(3, "Must be at least 3 characters"),
  stars: z.number().int().min(0).max(5).default(0),
});

export type CreateReviewValues = z.infer<typeof CreateReviewFormSchema>;
export default function useCreateReviewForm(
  defaultValues?: CreateReviewValues,
) {
  const form = useForm<CreateReviewValues>({
    resolver: zodResolver(CreateReviewFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    shouldUseNativeValidation: false,
  });

  return form;
}
