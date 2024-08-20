import { PaginationResponse } from "../types/pagination-response";
import { ReviewSchema } from "../types/review";
import axios from "../lib/axios";

export default class ReviewApiService {
  static async getMany(productId: string | number) {
    const response = await axios.get(`/api/reviews/article/${productId}`);

    return PaginationResponse.extend({ items: ReviewSchema.array() }).parse(
      response.data?.data,
    );
  }

  static async create(review: {
    productId: number;
    stars: number;
    text: string;
  }) {
    const response = await axios.post("/api/reviews", {
      text: review.text,
      stars: review.stars,
      article: review.productId,
    });

    return ReviewSchema.parse(response.data?.data);
  }
}
