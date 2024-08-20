import { z } from "zod";

export interface ApiException extends z.infer<typeof ApiExceptionSchema> {}

export const HttpErrorSchema = z.object({
  statusCode: z.number(),
  message: z.string().or(z.string().array()).optional(),
  error: z.string(),
});

export const ApiExceptionSchema = z.object({
  status: z.number(),
  message: HttpErrorSchema.optional(),
  timestamp: z.string(),
  method: z.string(),
  path: z.string().optional(),
});
export interface HttpError extends z.infer<typeof HttpErrorSchema> {}
