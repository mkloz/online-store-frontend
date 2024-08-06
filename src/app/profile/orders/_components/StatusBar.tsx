import { Fragment } from "react";
import { Separator } from "../../../../components/ui/separator";
import { cn } from "../../../../lib/utils";

export const ORDER_STEPS = [
  "Created",
  "Processed",
  "Sent",
  "Delivered",
  "Received",
];

export default function StatusBar({ step }: { step: number }) {
  step = Math.max(Math.min(step, ORDER_STEPS.length - 1), 0);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center gap-1 px-4">
        {ORDER_STEPS.map((status, i) => (
          <Fragment key={status}>
            {i != 0 && (
              <Separator
                className={cn("h-[2px] shrink grow", i < step && "bg-red")}
              />
            )}
            <div
              className={cn(
                "flex aspect-square min-w-8 shrink-0 items-center justify-center rounded-full border-2 border-current leading-4 text-gray",
                i < step && "border-red bg-red text-bg-primary",
              )}
            >
              {i + 1}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        {ORDER_STEPS.map((status, i) => (
          <p
            key={status}
            className={cn(
              "text-center text-gray md:min-w-16",
              i < step && "text-red",
            )}
          >
            {status}
          </p>
        ))}
      </div>
    </div>
  );
}
