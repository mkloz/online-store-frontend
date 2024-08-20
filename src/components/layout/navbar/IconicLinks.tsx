"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CartIcon, LikeIcon, SearchIcon, UserIcon } from "../../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LINKS as APP_LINKS } from "@/utils/links";
import { LogIn } from "lucide-react";
import { IUser } from "../../../types/user";
import SignInModal from "./SignInModal";

function IconicLinks({ user }: { user: IUser | null }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const uri = path + (searchParams.size ? `?${searchParams}` : "");

  return (
    <ul className="flex flex-row flex-nowrap gap-2 transition-[color] duration-300 sm:gap-4">
      <li>
        <Link
          href={APP_LINKS.FAVORITES}
          className={cn(
            "hover:text-red",
            uri === APP_LINKS.FAVORITES && "text-red",
          )}
        >
          <LikeIcon className="hover:fill-current" />
        </Link>
      </li>
      <li>
        <Link
          href={APP_LINKS.CART}
          className={cn("hover:text-red", uri === APP_LINKS.CART && "text-red")}
        >
          <CartIcon />
        </Link>
      </li>
      <li>
        {user ? (
          <Link
            href={APP_LINKS.PROFILE}
            className={cn(
              "hover:text-red",
              uri === APP_LINKS.PROFILE && "text-red",
            )}
          >
            <UserIcon />
          </Link>
        ) : (
          <SignInModal>
            <LogIn
              className={cn(
                "hover:text-red",
                uri === APP_LINKS.PROFILE && "text-red",
              )}
            />
          </SignInModal>
        )}
      </li>
    </ul>
  );
}

export default IconicLinks;
