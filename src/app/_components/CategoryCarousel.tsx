import { ProductCarousel } from "../../components/custom/ProductCarousel";
import { IProduct } from "../../types/product";

interface CategoryCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  products: IProduct[];
  category: string;
}

export function CategoryCarousel({
  category,
  products,
  ...props
}: CategoryCarouselProps) {
  return (
    <div {...props}>
      <h1>{category}</h1>
      <ProductCarousel
        opts={{
          align: "start",
          loop: false,
        }}
        products={products}
      />
    </div>
  );
}
