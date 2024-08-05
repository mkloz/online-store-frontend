import { ICart } from "./cart";
import { IAddress } from "./order";
import { IProduct } from "./product";
import { IReview } from "./review";

type Role = "USER" | "ADMIN";
type Provider = "EMAIL" | "GOOGLE";

export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string | null;
  role: Role;
  isEmailConfirmed: boolean;
  provider: Provider;
  reviews?: IReview[];
  favorites?: IProduct[];
  cart?: ICart | null;
  address?: IAddress | null;
}
