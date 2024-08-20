import { ProductApiService } from "../../../services/ProductApiService";
import ReviewApiService from "../../../services/ReviewApiService";
import getUser from "../../../utils/getUser";
import { CategoryCarousel } from "../../_components/CategoryCarousel";
import Breadcrumbs from "./_components/Breadcrums";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";
import { ProductParamSchema } from "./_hooks/useProductParams";

export default async function ProductPage(props: {
  params: { product: string };
}) {
  const param = ProductParamSchema.parse(props.params);
  const currentProduct = await ProductApiService.getOne(param.product);
  const productsList = await ProductApiService.getMany({
    limit: 20,
    category: currentProduct.categories?.at(0)?.name,
  }).then((res) => res.items);
  const reviews = await ReviewApiService.getMany(param.product);
  const user = await getUser();

  return (
    <main className="flex w-full flex-col items-center">
      <div className="m-8 flex w-[15rem] flex-col gap-16 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]">
        <Breadcrumbs className="basis-full" productName={currentProduct.name} />
        <Product
          product={currentProduct}
          reviews={reviews.items}
          user={user}
          className="m-auto"
        />
        <Reviews reviews={reviews.items} product={currentProduct} user={user} />
        <CategoryCarousel
          products={productsList}
          category={"Other similar products"}
          viewAllHref={`/products`}
          className="flex w-[15rem] flex-col gap-8 md:w-[31rem] lg:w-[47rem] xl:w-[63rem] 2xl:w-[79rem] 3xl:w-[95rem]"
        />
      </div>
    </main>
  );
}
