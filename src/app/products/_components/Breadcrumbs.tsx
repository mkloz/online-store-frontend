import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useFormContext } from "react-hook-form";
import { ProductFilterFormValues } from "../_hooks/useProductFilterForm";
import { LINKS } from "../../../utils/links";

export default function Breadcrumbs(
  props: React.ComponentProps<typeof Breadcrumb>,
) {
  const form = useFormContext<ProductFilterFormValues>();
  const category = form.watch("category");

  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={LINKS.HOME}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {category !== "undefined" ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={LINKS.CATALOG}>Catalog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">{category}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>Catalog</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
