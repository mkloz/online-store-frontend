import { LINKS } from "../../utils/links";
import { Breadcrumbs } from "./_components/Breadcrumbs";
import { CartIcon, LikeIcon, UserIcon } from "../../components/icons";
import { ArrowRight, List, Settings } from "lucide-react";
import Link from "next/link";
import ProfileSidebar from "./_components/ProfileSidebar";

export const PROFILE_TABS = {
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
  return (
    <div className="mx-[7%] my-12 flex w-full flex-row flex-wrap items-center justify-center gap-16">
      <Breadcrumbs className="w-full" />
      <div className="flex grow flex-col items-center justify-between gap-16 md:flex-row md:items-start">
        <ProfileSidebar />
        <div className="grow self-stretch">{children}</div>
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
