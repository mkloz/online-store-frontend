import Button from "../../../../components/custom/Button";
import LikeButton from "../../../../components/custom/product-card/LikeButton";
import { Rating } from "../../../../components/custom/Rating";
import { IProduct } from "../../../../types/product";
import { IReview } from "../../../../types/review";
import { IUser } from "../../../../types/user";
import AddToCartButton from "./AddToCartButton";
import ProductDescriptionTabs from "./ProductDescriptionTabs";

interface ProductDescriptionCardProps {
  product: IProduct;
  reviews: IReview[];
  user?: IUser | null;
}

export default function ProductDescriptionCard({
  product,
  user,
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
        <AddToCartButton product={product} />
        {user && (
          <LikeButton
            product={product}
            isFavorite={
              user?.favorites?.some((p) => p.id === product.id) || false
            }
            className="size-14 rounded-xl border-2 p-3 hover:border-btn-secondary hover:text-btn-secondary"
          />
        )}
      </div>
      <ProductDescriptionTabs product={product} />
    </div>
  );
}
