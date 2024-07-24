import { cn } from "../../lib/utils";
import { StarIcon } from "../icons";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number | null;
}

export function Rating({ rating = 0, ...props }: RatingProps) {
  const startCount = Math.round(Math.max(Math.min(5, rating || 0), 0));

  return (
    <div {...props} className={cn("flex", props.className)}>
      {Array.from({ length: startCount }).map((_, index) => (
        <StarIcon key={index} className="fill-yellow text-yellow" />
      ))}

      {Array.from({ length: 5 - startCount }).map((_, index) => (
        <StarIcon key={index} className="text-yellow" />
      ))}
    </div>
  );
}
