import * as React from "react";

import { cn } from "@/lib/utils";

interface IconProps {
  Icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export interface IconWrappedProps {
  startIcon?: IconProps;
  endIcon?: IconProps;
  className?: string;
  children: React.ReactNode;
}

export function IconWrapped({ className, ...props }: IconWrappedProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-fit cursor-pointer items-center justify-center gap-1 rounded-xl border border-gray bg-bg-secondary p-2 text-sm",
        className,
      )}
      tabIndex={0}
    >
      {props.startIcon && (
        <span
          className={cn(
            "aspect-square h-full max-w-6 select-none",
            props.startIcon?.className,
          )}
          onClick={props.startIcon?.onClick}
        >
          {props.startIcon?.Icon}
        </span>
      )}
      {props.children}
      {props.endIcon && (
        <span
          className={cn(
            "aspect-square h-full max-w-6 select-none",
            props.endIcon?.className,
          )}
          onClick={props.endIcon?.onClick}
        >
          {props.endIcon?.Icon}
        </span>
      )}
    </div>
  );
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-xl border border-gray bg-bg-secondary px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
