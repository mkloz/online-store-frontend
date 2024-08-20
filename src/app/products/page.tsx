import { ProductApiService } from "../../services/ProductApiService";
import { IPageProps } from "../../types/nextjs";
import { ProductFilterOptionsSchema } from "../../types/product";
import getUser from "../../utils/getUser";
import FilterForm from "./_components/FilterForm";

export default async function ProductPage({ searchParams }: IPageProps) {
  const search = ProductFilterOptionsSchema.parse(searchParams);
  const products = await ProductApiService.getMany(search);
  const user = await getUser();
  const categoriesCount = {
    all: await ProductApiService.getMany({
      ...search,
      category: undefined,
      limit: 0,
    }).then((res) => res.meta.itemCount),
    bicycles: await ProductApiService.getMany({
      ...search,
      category: "bicycle",
      limit: 0,
    }).then((res) => res.meta.itemCount),
    accessories: await ProductApiService.getMany({
      ...search,
      category: "accessory",
      limit: 0,
    }).then((res) => res.meta.itemCount),
    gyroboards: await ProductApiService.getMany({
      ...search,
      category: "gyroboard",
      limit: 0,
    }).then((res) => res.meta.itemCount),
    monowheels: await ProductApiService.getMany({
      ...search,
      category: "monowheel",
      limit: 0,
    }).then((res) => res.meta.itemCount),
    scooters: await ProductApiService.getMany({
      ...search,
      category: "scooter",
      limit: 0,
    }).then((res) => res.meta.itemCount),
    skateboards: await ProductApiService.getMany({
      ...search,
      category: "skateboard",
      limit: 0,
    }).then((res) => res.meta.itemCount),
  };
  return (
    <main className="flex w-full flex-row items-center px-[5%] py-12">
      <FilterForm
        products={products.items}
        currentPage={search.page || 1}
        categoriesCount={categoriesCount}
        user={user}
        lastPage={Math.ceil(
          products.meta.itemCount / products.meta.itemsPerPage,
        )}
      />
    </main>
  );
}
