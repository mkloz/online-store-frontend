import { IProduct } from "./product";
import { IUser } from "./user";

export interface IReview {
  id: number;
  text: string;
  stars: number;
  createdAt: Date;
  updatedAt: Date;
  article?: IProduct;
  author?: IUser;
}
