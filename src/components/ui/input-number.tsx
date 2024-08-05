"use client";
import { Minus, Plus } from "lucide-react";
import { cn } from "../../lib/utils";
import { useCounter, useToggle } from "@uidotdev/usehooks";
import React, { useEffect } from "react";

export function InputNumber({
  defaultValue,
  ...props
}: React.ComponentProps<"input">) {
  const [canDecrement, setCanDecrement] = useToggle(true);
  const [canIncrement, setCanIncrement] = useToggle(true);
  const [value, { decrement, increment, set }] = useCounter(
    Number(defaultValue) || 0,
    {
      min: Number(props.min),
      max: Number(props.max),
    },
  );

  useEffect(() => {
    setCanDecrement(
      !props.min || +value >= +props.min + (Number(props.step) || 1),
    );
    setCanIncrement(
      !props.max || +value <= +props.max - (Number(props.step) || 1),
    );
  }, [
    props.max,
    props.min,
    props.step,
    setCanDecrement,
    setCanIncrement,
    value,
  ]);

  return (
    <span className="flex w-fit min-w-fit items-center justify-center gap-1 rounded-lg border border-purple-700 bg-bg-primary">
      <button
        className={cn(
          "h-full select-none pl-1 text-gray",
          canDecrement && "text-text-primary",
        )}
        onClick={decrement}
        disabled={!canDecrement}
      >
        <Minus width={"1rem"} />
      </button>
      <input
        type="number"
        {...props}
        className={cn(
          "w-fit min-w-fit bg-inherit text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          props.className,
        )}
        value={value}
        onInput={(e) => {
          if (props.max && +e.currentTarget.value > Number(props.max)) {
            e.currentTarget.value = String(props.max);
          }
          if (props.max && +e.currentTarget.value < Number(props.min)) {
            e.currentTarget.value = String(props.min);
          }
          set(+e.currentTarget.value);
          props.onInput?.(e);
        }}
      />
      <button
        className={cn(
          "h-full select-none pr-1 text-gray",
          canIncrement && "text-text-primary",
        )}
        onClick={increment}
        disabled={!canIncrement}
      >
        <Plus width={"1rem"} />
      </button>
    </span>
  );
}
