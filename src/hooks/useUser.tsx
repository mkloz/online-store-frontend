"use client";
import { createContext, useContext } from "react";
import { IUser } from "../types/user";
import TokensCookieUtils from "../utils/TokensCookieUtils";

const UserContext = createContext<IUser | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: IUser | null;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
