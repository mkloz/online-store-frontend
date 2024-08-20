import ProductCard from "@/components/custom/product-card/ProductCard";
import { IProduct } from "../../../types/product";
import { IUser } from "../../../types/user";
interface ProductsListProps {
  products: IProduct[];
  user?: IUser | null;
}
export default function ProductsList({ products, user }: ProductsListProps) {
  return (
    <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fill,_15rem)] grid-rows-[auto] justify-evenly gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} user={user} />
      ))}
    </div>
  );
}
