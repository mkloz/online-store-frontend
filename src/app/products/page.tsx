"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { PaginationLinks } from "@/components/custom/PaginationLinks";
import { Form } from "@/components/ui/form";
import ProductFilterForm from "./_components/forms/ProductFilterForm";
import ProductSortForm from "./_components/forms/ProductSortForm";
import ProductsList from "./_components/ProductsList";
import { useProductFilterForm } from "./_hooks/useProductFilterForm";
import Breadcrumbs from "./_components/Breadcrumbs";

export default function ProductPage() {
  const form = useProductFilterForm();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <main className="flex w-full flex-row items-center p-[5%]">
      <Form {...form}>
        <form className="flex w-full flex-row flex-wrap justify-around gap-10">
          <Breadcrumbs className="w-full" />
          <ProductFilterForm className="basis-auto" />
          <div className="flex grow flex-col flex-nowrap gap-8">
            <ProductSortForm />
            <ProductsList />
            <PaginationLinks
              items={[
                {
                  href: `${pathname}?${new URLSearchParams(searchParams)
                    .toString()
                    .replace(/category=\w+/, "category=undefined")}`,
                  page: 1,
                },
                { href: "#", page: 2 },
                { href: "#", page: 3 },
                { href: "#", page: 4 },
              ]}
              currentPage={4}
            />
          </div>
        </form>
      </Form>
    </main>
  );
}
