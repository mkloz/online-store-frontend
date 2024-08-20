"use client";
import { useToggle } from "@uidotdev/usehooks";
import { buttonStyle } from "../../../../components/custom/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { cn } from "../../../../lib/utils";
import { IAddress } from "../../../../types/order";
import CreateOrderForm from "../../../../components/forms/CreateOrderForm/CreateOrderForm";
import { useRouter } from "next/navigation";
import { LINKS } from "../../../../utils/links";

export default function ConfirmOrderButton({
  address,
}: {
  address?: IAddress | null;
}) {
  const [isOpen, toggle] = useToggle(false);
  const router = useRouter();
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogTrigger className={cn(buttonStyle(), "grow")}>
        Confirm
      </DialogTrigger>
      <DialogContent className="min-w-fit max-w-[45rem]">
        <DialogHeader>
          <DialogTitle>Provide delivery address</DialogTitle>
          <DialogDescription>
            We will deliver your order to the address you provide.
          </DialogDescription>
        </DialogHeader>
        <div className="m-4 flex-col sm:m-6">
          <CreateOrderForm
            defaultValues={address || undefined}
            onSubmit={() => {
              toggle(false);
              router.push(LINKS.ORDERS);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
