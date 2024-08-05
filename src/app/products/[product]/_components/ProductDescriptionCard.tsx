import Button from "../../../../components/custom/Button";
import { Rating } from "../../../../components/custom/Rating";
import { LikeIcon } from "../../../../components/icons";
import { IProduct } from "../../../../types/product";
import { IReview } from "../../../../types/review";
import ProductDescriptionTabs from "./ProductDescriptionTabs";

interface ProductDescriptionCardProps {
  product: IProduct;
  reviews: IReview[];
}

export default function ProductDescriptionCard({
  product,
  reviews,
}: ProductDescriptionCardProps) {
  return (
    <div className="flex min-w-[15rem] max-w-[45rem] grow basis-[30rem] flex-col gap-4">
      <h1 className="mb-4 basis-full break-words">{product.name}</h1>
      <div className="flex basis-full gap-4">
        <p className="text-text-disabled">Product id: {product.id}</p>
        {product.inStock ? (
          <span className="text-green">In stock</span>
        ) : (
          <span className="text-gray">Out of stock</span>
        )}
        {product.sale && <span className="text-red">On sale</span>}
      </div>
      <div className="flex gap-4">
        <Rating rating={product.rating} />
        <a
          href="#reviews"
          className="flex w-fit gap-1 border-b-2 border-transparent text-purple-700 hover:border-current"
        >
          <span>{reviews.length} </span> reviews
        </a>
      </div>
      {product.sale ? (
        <div className="flex basis-full items-center gap-6">
          <p className="text-3xl font-bold text-red">
            {" "}
            ${product.sale.newPrise}
          </p>
          <p className="text-1xl font-bold text-gray line-through">
            ${product.price}
          </p>
        </div>
      ) : (
        <p className="basis-full text-3xl font-bold text-gray">
          ${product.price}
        </p>
      )}
      <div className="my-4 flex gap-4">
        <Button
          btnState={product.inStock ? "active" : "disabled"}
          className="transition-colors duration-300 enabled:hover:border-btn-secondary enabled:hover:bg-btn-secondary md:px-6"
          disabled={!product.inStock}
        >
          <span className="px-4 py-2">Add to cart</span>
        </Button>
        <Button
          btnStyle={"outline"}
          className="transition-colors duration-300 hover:border-btn-secondary hover:text-btn-secondary"
        >
          <LikeIcon className="size-12 p-2" />
        </Button>
      </div>
      <ProductDescriptionTabs product={product} />
    </div>
  );
}
