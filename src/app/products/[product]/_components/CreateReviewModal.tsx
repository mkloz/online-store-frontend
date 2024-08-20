"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import ProductShortCard from "../../../../components/custom/ProductShortCard";
import CreateReviewForm from "../../../../components/forms/CreateReviewForm/CreateReviewForm";
import { IProduct } from "../../../../types/product";
import React from "react";
import { useToggle } from "@uidotdev/usehooks";
import { useRouter, useSearchParams } from "next/navigation";
import { IUser } from "../../../../types/user";
import { toast } from "sonner";

export default function CreateReviewModal({
  product,
  children,
  user,
}: {
  product: IProduct;
  children: React.ReactNode;
  user?: IUser | null;
}) {
  const [isOpen, toggle] = useToggle();
  const router = useRouter();
  const search = new URLSearchParams(useSearchParams());
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogTrigger
        onClick={(e) => {
          if (!user) {
            e.stopPropagation();
            e.preventDefault();
            toast.error("You need to be logged in to leave a review");
            search.set("signIn", "true");
            window.location.search = search.toString();
          }
        }}
      >
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave your feedback</DialogTitle>
          <DialogDescription>
            Share your thoughts about the product
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full flex-wrap justify-around gap-8 p-4 md:p-6">
          <ProductShortCard product={product} />
          <CreateReviewForm
            productId={product.id}
            onSubmit={() => {
              toggle(false), router.refresh();
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
