import { products } from "@/__mock/products";
import ProductCard from "@/components/custom/ProductCard";

export default function ProductsList() {
  return (
    <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fill,_15rem)] grid-rows-[auto] justify-evenly gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className="" />
      ))}
    </div>
  );
}
