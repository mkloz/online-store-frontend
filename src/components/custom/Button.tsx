import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "../../lib/utils";

export const buttonStyle = cva(
  "rounded-xl  focus-visible:ring-2 focus-visible:ring-red flex justify-center items-center border-2 border-solid  font-bold  text-lg overflow-hidden",
  {
    variants: {
      btnStyle: {
        filled: "",
        outline: "",
        transparent: "border-transparent bg-transparent",
      },
      size: {
        sm: "h-10 w-10",
        md: "h-10 w-24",
        lg: "h-12 w-28",
        wide: "px-10 py-1",
        default: "p-1",
      },
      btnState: {
        active: "border-btn-primary",
        action: "border-btn-secondary",
        inactive: "border-btn-secondary",
        disabled: "cursor-not-allowed border-gray",
      },
    },
    compoundVariants: [
      {
        btnStyle: "filled",
        btnState: "active",
        className:
          "bg-btn-primary text-text-light hover:bg-btn-secondary transition-colors hover:border-btn-secondary",
      },
      {
        btnStyle: "filled",
        btnState: "inactive",
        className: "bg-transparent border-btn-secondary",
      },
      {
        btnStyle: "filled",
        btnState: "action",
        className: "bg-btn-secondary border-btn-secondary text-text-light",
      },
      {
        btnStyle: "filled",
        btnState: "disabled",
        className: "bg-gray  text-text-light",
      },
      {
        btnStyle: "outline",
        btnState: "inactive",
        className: "border-current text-text-disabled",
      },
      {
        btnStyle: "outline",
        btnState: "action",
        className: "border-current text-btn-secondary",
      },
      {
        btnStyle: "outline",
        btnState: "active",
        className:
          "hover:border-btn-secondary transition-colors hover:text-btn-secondary",
      },
      {
        btnStyle: "outline",
        btnState: "disabled",
        className: "border-current text-text-disabled",
      },
    ],
    defaultVariants: {
      btnState: "active",
      btnStyle: "filled",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {}

export function Button({
  children,
  btnState,
  btnStyle,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonStyle({ btnState, btnStyle, size }), className)}
      disabled={btnState === "disabled"}
    >
      {children}
    </button>
  );
}
interface LinkButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof buttonStyle> {}

export function LinkButton({
  children,
  btnState,
  btnStyle,
  size,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(buttonStyle({ btnState, btnStyle, size }), className)}
    >
      {children}
    </Link>
  );
}
export default Button;
