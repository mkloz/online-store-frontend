import CreateNewCard from "../../../../components/custom/CreateNewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { IReview } from "../../../../types/review";
import ReviewCard from "./ReviewCard";

interface ReviewsProps {
  reviews: IReview[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2>Reviews</h2>
      <div className="flex flex-wrap justify-around gap-4 md:justify-between">
        <CreateNewCard className="m-2 h-72">
          Leave your feedback about the product
        </CreateNewCard>
        {reviews.length <= 2 ? (
          reviews.map((review) => (
            <ReviewCard key={review.id} className="h-72" review={review} />
          ))
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="min-w-[15rem] max-w-[28rem] 3xl:max-w-[56rem]"
          >
            <CarouselContent className="m-0 flex w-full">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="grow p-0 3xl:basis-1/2"
                >
                  <ReviewCard
                    key={review.id}
                    className="h-72"
                    review={review}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}
