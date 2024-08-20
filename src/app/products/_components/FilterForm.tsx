"use client";
import { PaginationLinks } from "@/components/custom/PaginationLinks";
import { Form } from "@/components/ui/form";
import ProductFilterForm from "./forms/ProductFilterForm";
import ProductSortForm from "./forms/ProductSortForm";
import ProductsList from "./ProductsList";
import Breadcrumbs from "./Breadcrumbs";
import { useProductFilterForm } from "../_hooks/useProductFilterForm";
import { IProduct } from "../../../types/product";
import NotFound from "../../../components/async/errors/NotFound";
import Pagination from "./Pagination";
import { CategoriesCount } from "./forms/CategoryRadioGroup";
import { IUser } from "../../../types/user";

interface FilterFormProps {
  products: IProduct[];
  lastPage: number;
  categoriesCount: CategoriesCount;
  currentPage: number;
  user?: IUser | null;
}

export default function FilterForm({
  products,
  currentPage,
  lastPage,
  categoriesCount,
  user,
}: FilterFormProps) {
  const form = useProductFilterForm();

  return (
    <Form {...form}>
      <form className="flex w-full flex-row flex-wrap justify-around gap-10">
        <Breadcrumbs className="w-full" />
        <ProductFilterForm
          className="basis-auto"
          categoriesCount={categoriesCount}
        />
        <div className="flex grow flex-col flex-nowrap gap-8">
          <ProductSortForm />
          {products?.length ? (
            <>
              <ProductsList products={products} user={user} />
              <Pagination currentPage={currentPage} lastPage={lastPage} />
            </>
          ) : (
            <NotFound message="No products match" />
          )}
        </div>
      </form>
    </Form>
  );
}
