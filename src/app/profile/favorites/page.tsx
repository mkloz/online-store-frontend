import { LinkButton } from "../../../components/custom/Button";
import UserApiService from "../../../services/UserApiService";
import getUser from "../../../utils/getUser";
import ProductsList from "../../products/_components/ProductsList";

const FavoritesFallback = () => (
  <div className="flex h-full w-full items-center justify-center text-center">
    <div>
      <h1 className="m-4">Favorites</h1>
      <p>You don`t have any favorites</p>
      <small>Press like to add one</small>
      <LinkButton href="/products" size="wide" className="mt-4">
        Go to products
      </LinkButton>
    </div>
  </div>
);

export default async function FavoritesPage() {
  const user = await getUser();
  const favorites = await UserApiService.me().then(
    (user) => user.favorites || [],
  );
  if (!favorites.length) return <FavoritesFallback />;

  return <ProductsList products={favorites} user={user} />;
}
