import axios from "../lib/axios";
import { UserSchema } from "../types/user";

type UserUpdateOptions = {
  name?: string;
  phoneNumber?: string;
} & ({ street: string; city: string; country: string; postCode: string } | {});

export default class UserApiService {
  static async me() {
    const res = await axios.get("/api/users/me");

    return UserSchema.parse(res.data.data);
  }

  static async updateMe(data: UserUpdateOptions) {
    const res = await axios.patch("/api/users/me", data);

    return UserSchema.parse(res.data.data);
  }

  static async addToFavorites(productId: number) {
    const res = await axios.post(`/api/users/me/favorites/${productId}`);

    return UserSchema.parse(res.data.data);
  }

  static async removeFromFavorites(productId: number) {
    const res = await axios.delete(`/api/users/me/favorites/${productId}`);

    return UserSchema.parse(res.data.data);
  }
}
