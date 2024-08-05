"use client";
import { LINKS } from "../../utils/links";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "./_components/Breadcrumbs";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";
import { CartIcon, LikeIcon, UserIcon } from "../../components/icons";
import { ArrowRight, List, Settings } from "lucide-react";
import Link from "next/link";

const TABS = {
  profile: { name: "Profile", link: LINKS.PROFILE, icon: <UserIcon /> },
  cart: { name: "Cart", link: LINKS.CART, icon: <CartIcon /> },
  orders: { name: "Orders", link: LINKS.ORDERS, icon: <List /> },
  favorites: {
    name: "Favorites",
    link: LINKS.FAVORITES,
    icon: <LikeIcon fill="currentColor" />,
  },
  settings: { name: "Settings", link: LINKS.SETTINGS, icon: <Settings /> },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const current =
    Object.values(TABS).find((tab) => tab.link === pathname) || TABS.profile;

  return (
    <div className="mx-[7%] my-12 flex w-full flex-row flex-wrap items-center justify-center gap-16">
      <Breadcrumbs
        current={current !== TABS.profile ? current.name : undefined}
        className="w-full"
      />
      <div className="flex grow flex-col items-center justify-between gap-16 md:flex-row md:items-start">
        <aside className="w-full min-w-60 grow rounded-3xl bg-bg-secondary md:max-w-72">
          <div className="m-8 flex flex-wrap items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="grow">Name</p>
            <p className="basis-full text-gray">Email</p>
          </div>
          <ul className="m-4 flex flex-col gap-4">
            {Object.entries(TABS).map(([key, value]) => (
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
          </ul>
        </aside>
        <div className="grow self-start">{children}</div>
      </div>
      <div className="flex w-full gap-4 text-gray">
        <Link href={LINKS.ARCHIVE}>Orders archive</Link>
        <Link href={LINKS.CATALOG} className="ml-auto flex gap-2">
          Back to the catalog
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
