import { Rating } from "../../../../components/custom/Rating";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { cn } from "../../../../lib/utils";
import { IReview } from "../../../../types/review";
import dayjs from "dayjs";
interface ReviewCardProps extends React.ComponentProps<"div"> {
  review: IReview;
}

export default function ReviewCard({ review, ...props }: ReviewCardProps) {
  return (
    <div className="p-2">
      <div
        className={cn(
          "flex w-full flex-col gap-4 rounded-3xl bg-bg-secondary p-4 py-6",
          props.className,
        )}
      >
        <p className="font-bold">{review.author?.name || "Unknown user"}</p>
        <small className="text-gray">
          {dayjs(review.createdAt).format("DD.MM.YYYY")}
        </small>
        <Rating rating={review.stars} />
        <ScrollArea>{review.text}</ScrollArea>
      </div>
    </div>
  );
}
