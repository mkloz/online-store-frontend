"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { cn } from "../../../lib/utils";
import { PROFILE_TABS } from "../layout";
import TokensCookieUtils from "../../../utils/TokensCookieUtils";
import { LogOut } from "lucide-react";
import { IUser } from "../../../types/user";
import { usePathname } from "next/navigation";

export default function ProfileSidebar({ user }: { user: IUser }) {
  const pathname = usePathname();
  const itemStyle =
    "flex w-full gap-2 rounded-full border-2 border-transparent p-2 text-gray decoration-red hover:text-text-primary hover:underline";
  return (
    <aside className="w-full min-w-60 grow rounded-3xl bg-bg-secondary md:max-w-72">
      <div className="m-8 flex flex-wrap items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="grow">{user?.name || "Username"}</p>
        <p className="basis-full text-gray">{user?.email || "email"}</p>
      </div>
      <ul className="m-4 flex flex-col gap-4">
        {Object.entries(PROFILE_TABS).map(([key, value]) => (
          <li key={key}>
            <a
              href={value.link}
              className={cn(
                "flex w-full gap-2 rounded-full border-2 border-transparent p-2 text-gray decoration-red hover:text-text-primary hover:underline",
                value.link === pathname && "border-red text-text-primary",
              )}
            >
              {value.icon}
              {value.name}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              TokensCookieUtils.delete();
            }}
            className={cn(itemStyle, "text-purple-700 hover:text-red")}
          >
            <LogOut />
            Log Out
          </button>
        </li>
      </ul>
    </aside>
  );
}
