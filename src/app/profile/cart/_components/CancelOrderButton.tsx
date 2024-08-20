"use client";
import { useRouter } from "next/navigation";
import CartApiService from "../../../../services/CartApiService";
import Button from "../../../../components/custom/Button";

export default function CancelOrderButton() {
  const router = useRouter();
  return (
    <Button
      btnStyle={"outline"}
      className="grow"
      onClick={async () => {
        await CartApiService.empty();

        router.refresh();
      }}
    >
      Cancel
    </Button>
  );
}
