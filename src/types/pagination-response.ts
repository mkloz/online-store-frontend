import { z } from "zod";

export const PaginationResponse = z.object({
  items: z.array(z.unknown()),
  meta: z.object({
    itemCount: z.number(),
    totalItems: z.number(),
    itemsPerPage: z.number(),
    currentPage: z.number(),
  }),
  links: z.object({
    first: z.string(),
    previous: z.string().nullable(),
    next: z.string().nullable(),
    last: z.string(),
  }),
});
export interface IPaginationResponse<T extends unknown = unknown>
  extends z.infer<typeof PaginationResponse> {
  items: T[];
}
interface PaginationMeta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

interface PaginationLinks {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
}

export interface Paginated<TData extends object> {
  items: TData[];
  meta: PaginationMeta;
  links: PaginationLinks;
}
