import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import SignIn from "../../../app/auth/signin/_components/SignIn";

export default function SignInModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const signInIsOpen = searchParams.has("signIn");

  return (
    <Dialog
      open={signInIsOpen}
      onOpenChange={(v) => {
        const search = new URLSearchParams(searchParams);

        v ? search.set("signIn", "true") : search.delete("signIn");

        router.replace(`${path}?${search}`);
      }}
    >
      <DialogTitle className="sr-only">Sign In</DialogTitle>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogDescription />
      <DialogContent>
        <DialogTitle className="sr-only">Sign In </DialogTitle>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
}
