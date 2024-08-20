import { List, Settings } from "lucide-react";
import { CartIcon, LikeIcon } from "../../components/icons";
import { LINKS } from "../../utils/links";
import UserCard from "./_components/UserCard";
import UserApiService from "../../services/UserApiService";

const INFO_LINKS = [
  { name: "Cart", link: LINKS.CART, icon: <CartIcon className="size-full" /> },
  { name: "Orders", link: LINKS.ORDERS, icon: <List className="size-full" /> },
  {
    name: "Favorites",
    link: LINKS.FAVORITES,
    icon: <LikeIcon fill="currentColor" className="size-full" />,
  },
  {
    name: "Settings",
    link: LINKS.SETTINGS,
    icon: <Settings className="size-full" />,
  },
];

export default async function ProfilePage() {
  const user = await UserApiService.me();

  return (
    <div className="flex shrink flex-wrap items-center justify-center gap-12">
      <UserCard user={user} />
      <div className="flex shrink flex-wrap items-center justify-center gap-4">
        {INFO_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="flex aspect-square h-auto w-40 flex-col items-center justify-center gap-2 rounded-2xl bg-bg-secondary p-4 hover:text-red"
          >
            <div className="size-16">{link.icon}</div>
            <figcaption>{link.name}</figcaption>
          </a>
        ))}
      </div>
    </div>
  );
}
