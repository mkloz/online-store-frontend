import Button from "@/components/custom/Button";
import Image from "next/image";

export function Banner() {
  return (
    <div className="relative top-[-4rem] flex h-[715px] w-full flex-col items-center justify-evenly bg-[url(/images/road.png)] bg-cover bg-bottom bg-no-repeat p-4 md:flex-row">
      <div className="mt-16 flex flex-col gap-2 md:mt-0">
        <h1>Be faster on wheels</h1>
        <p>Buy new wheels for yourself and move with pleasure</p>
        <Button
          size="wide"
          className="relative mt-4 rounded-2xl py-4 after:absolute after:inset-0 after:left-[100%] after:bg-purple-700 after:transition-[left_2s,_background-color] after:duration-1000 hover:after:left-0 hover:after:bg-red"
        >
          <p className="z-10"> View the catalog </p>
        </Button>
      </div>
      <Image
        src="/images/man-on-skate.png"
        width={553}
        height={474}
        className="h-auto w-auto md:self-end"
        priority
        alt="man-on-skate"
      />
    </div>
  );
}
export default Banner;
