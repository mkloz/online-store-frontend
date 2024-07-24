"use client";
import Link from "next/link";
import { Button } from "../components/custom/Button";

export default function NotFound() {
  return (
    <div className="m-auto flex p-10">
      <div className="m-auto flex w-fit flex-wrap gap-4">
        <div className="m-auto min-h-full basis-auto">
          <h1 className="border-4 border-red p-4 text-center text-[3rem]">
            404
          </h1>
        </div>
        <div className="flex flex-col justify-around gap-4">
          <h2>Not Found</h2>
          <Link href="/">
            <span className="border-red hover:border-b-2"> Return Home </span>
          </Link>
          <Button
            btnStyle="outline"
            className="hover:border-red hover:bg-red hover:text-text-light"
            onClick={() => window.history.back()}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
