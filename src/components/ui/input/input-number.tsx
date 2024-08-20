"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "../../../lib/utils";
import React, { useEffect, useState } from "react";
import { useIsFirstRender } from "@uidotdev/usehooks";

interface InputNumberProps extends React.ComponentProps<"input"> {
  defaultValue: number;
  onValueChange: (value: number) => void;
}

export function InputNumber({
  defaultValue,
  onValueChange,
  ...props
}: InputNumberProps) {
  const min = Number(props.min) || -Infinity;
  const max = Number(props.max) || Infinity;
  const step = Number(props.step) || 1;
  const [value, setValue] = useState(defaultValue || min);

  const canDecrement = value > min;
  const canIncrement = value < max;

  const handleIncrement = () => {
    if (canIncrement) {
      setValue((prev) => {
        const newValue = Math.min(max, prev + step);

        onValueChange(newValue);
        return newValue;
      });
    }
  };

  const handleDecrement = () => {
    if (canDecrement) {
      setValue((prev) => {
        const newValue = Math.max(min, prev - step);

        onValueChange(newValue);
        return newValue;
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <span className="flex w-fit min-w-fit items-center justify-center gap-1 rounded-lg border border-purple-700 bg-bg-primary">
      <button
        className={cn(
          "h-full select-none pl-1 text-gray",
          canDecrement && "text-text-primary",
        )}
        onClick={handleDecrement}
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
        onChange={handleInputChange}
      />
      <button
        className={cn(
          "h-full select-none pr-1 text-gray",
          canIncrement && "text-text-primary",
        )}
        onClick={handleIncrement}
        disabled={!canIncrement}
      >
        <Plus width={"1rem"} />
      </button>
    </span>
  );
}
