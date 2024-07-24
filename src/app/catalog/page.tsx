"use client";
import { Form } from "../../components/ui/form";
import ProductFilterForm from "./_components/forms/ProductFilterForm";
import { useProductFilterForm } from "./_hooks/useProductFilterForm";

export default function CatalogPage() {
  const form = useProductFilterForm();

  return (
    <main className="flex w-full flex-col items-center p-[5%]">
      <Form {...form}>
        <form className="flex w-full flex-wrap justify-between gap-10">
          <div className="w-full">BreadCrums</div>
          <ProductFilterForm className="grow basis-auto" />
          <div className="grow"> #Items</div>
        </form>
      </Form>
    </main>
  );
}
