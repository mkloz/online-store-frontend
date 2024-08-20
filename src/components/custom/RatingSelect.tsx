"use client";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { StarIcon } from "../icons";
import { useCounter } from "@uidotdev/usehooks";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number | null;
  onChoose?: (rating: number) => void;
}

export function RatingSelect({ rating = 0, onChoose, ...props }: RatingProps) {
  const startCount = Math.round(Math.max(Math.min(5, rating || 0), 0));
  const [stars, { set, reset }] = useCounter(startCount, { min: 0, max: 5 });

  return (
    <div
      {...props}
      role="radiogroup"
      className={cn("flex min-w-fit", props.className)}
      onMouseLeave={reset}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <button
          role="radio"
          type="button"
          aria-checked={index + 1 == stars}
          key={index}
          onMouseEnter={() => set(index + 1)}
          onClick={() => onChoose?.(index + 1)}
        >
          <StarIcon
            className={cn(
              "aspect-square min-h-full text-yellow",
              index < stars && "fill-yellow",
            )}
          />
        </button>
      ))}
    </div>
  );
}
