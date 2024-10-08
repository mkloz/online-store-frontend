import getUser from "../utils/getUser";
import Banner from "./_components/Banner";
import { Categories } from "./_components/Categories";
import ProductsFeed from "./_components/ProductsFeed";

export default async function HomePage() {
  const user = await getUser();

  return (
    <main className="flex w-full flex-col items-center">
      <Banner />
      <div className="w-full p-2">
        <Categories />
      </div>
      <div className="my-8 flex w-full justify-center">
        <ProductsFeed user={user} />
      </div>
    </main>
  );
}
