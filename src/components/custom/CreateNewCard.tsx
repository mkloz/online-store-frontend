import { cn } from "../../lib/utils";
import { CreateNewIcon } from "../icons";

interface CreateNewCardProps extends React.ComponentProps<"div"> {}

export default function CreateNewCard({
  children,
  ...props
}: CreateNewCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex min-w-fit max-w-full basis-[26rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl bg-bg-secondary p-8 text-gray hover:text-purple-700",
        props.className,
      )}
    >
      <p className="text-lg font-semibold">{children}</p>
      <CreateNewIcon />
    </div>
  );
}
