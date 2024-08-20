import { z } from "zod";
import { IProductFilterOptions, ProductSchema } from "../types/product";
import axios from "../lib/axios";
import { PaginationResponse } from "../types/pagination-response";

export class ProductApiService {
  static async getMany(params: IProductFilterOptions) {
    const res = await axios.get(`/api/articles`, { params });

    return PaginationResponse.extend({ items: z.array(ProductSchema) }).parse(
      res.data?.data,
    );
  }

  static async getOne(id: number) {
    const res = await axios.get(`/api/articles/${id}`);

    return ProductSchema.parse(res.data?.data);
  }
}
