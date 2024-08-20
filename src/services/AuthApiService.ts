import { z } from "zod";
import axios from "../lib/axios";
import { UserSchema } from "../types/user";

export const TokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export interface ITokens extends z.infer<typeof TokensSchema> {}

export class AuthApiService {
  static async login(email: string, password: string) {
    const res = await axios.post("/api/auth/email/login", { email, password });

    return TokensSchema.parse(res.data?.data);
  }
  static async refresh(refreshToken: string) {
    const res = await axios.post("/api/auth/refresh", {
      refreshToken,
    });

    return TokensSchema.parse(res.data?.data);
  }

  static async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const res = await axios.post("/api/auth/email/register", {
      email,
      name,
      password,
    });

    return UserSchema.parse(res.data?.data);
  }

  static async me() {
    const res = await axios.get("/api/auth/me");

    return res.data;
  }
  static async changePassword(data: {
    oldPassword: string;
    newPassword: string;
  }) {
    await axios.post("/api/auth/email/change/password", data);
  }
  static async googleLogin(code: string) {
    const res = await axios.post("/api/auth/google/login", { code: code });

    return TokensSchema.parse(res.data?.data);
  }
}
