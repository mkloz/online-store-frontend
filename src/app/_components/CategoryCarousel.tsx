import { ArrowRight } from "lucide-react";
import { ProductCarousel } from "../../components/custom/ProductCarousel";
import { IProduct } from "../../types/product";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { IUser } from "../../types/user";

interface CategoryCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[];
  category: string;
  viewAllHref: string;
  user?: IUser | null;
}

export function CategoryCarousel({
  category,
  viewAllHref,
  products,
  user,
  ...props
}: CategoryCarouselProps) {
  return (
    <section {...props} className={cn("flex flex-col gap-2", props.className)}>
      <h1>{category}</h1>
      <ProductCarousel
        opts={{
          align: "start",
          loop: false,
        }}
        products={products}
        user={user}
      />
      <Link href={viewAllHref} className="ml-auto flex hover:underline">
        View all <ArrowRight />
      </Link>
    </section>
  );
}
