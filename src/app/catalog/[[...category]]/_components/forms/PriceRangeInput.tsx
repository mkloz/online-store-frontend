"use client";

import { useFormContext } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import React from "react";
import { ProductFilterFormValues } from "../../_hooks/useProductFilterForm";

interface PriceRangeInputProps {
  minPrice: number;
  maxPrice: number;
  step?: number;
}
function PriceSlider(props: PriceRangeInputProps) {
  const form = useFormContext<ProductFilterFormValues>();
  const [min, setMin] = [
    form.watch("minPrice"),
    (min: number) => form.setValue("minPrice", min),
  ];
  const [max, setMax] = [
    form.watch("maxPrice"),
    (max: number) => form.setValue("maxPrice", max),
  ];

  return (
    <Slider
      defaultValue={[min, max]}
      value={[min, max]}
      min={props.minPrice}
      max={props.maxPrice}
      step={props.step || (props.maxPrice - props.minPrice) / 200}
      onValueChange={(value) => {
        setMin(value[0]);
        setMax(value[1]);
      }}
    />
  );
}
export default function PriceRangeInput(props: PriceRangeInputProps) {
  const form = useFormContext<ProductFilterFormValues>();

  const NumberInput = ({
    name,
    value,
  }: {
    name: keyof ProductFilterFormValues;
    value: number;
  }) => (
    <input
      type="number"
      min={props.minPrice}
      max={props.maxPrice}
      defaultValue={value}
      className="min-w-10 rounded-md border-2 border-gray px-4 py-2 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      {...form.register(name, {
        min: props.minPrice,
        max: props.maxPrice,
        valueAsNumber: true,
      })}
      onChange={undefined}
      onInput={(e) => {
        if (+e.currentTarget.value > props.maxPrice) {
          form.setValue(name, props.maxPrice);
          return;
        }
        if (+e.currentTarget.value < props.minPrice) {
          form.setValue(name, props.minPrice);
          return;
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          form.setValue(name, +e.currentTarget.value);
        }
      }}
      onBlur={(e) => {
        form.setValue(name, +e.currentTarget.value);
      }}
    />
  );
  return (
    <div className="flex flex-col gap-4 p-4">
      <PriceSlider {...props} />
      <div className="flex items-center gap-4">
        <p className="text-xl">{"$"}</p>
        <NumberInput name={"minPrice"} value={form.watch("minPrice")} />
        {" — "}
        <NumberInput name={"maxPrice"} value={form.watch("maxPrice")} />
      </div>
    </div>
  );
}
