import { LinkButton } from "@/components/custom/Button";
import Image from "next/image";
import ManOnSkate from "/public/images/man-on-skate.png";
import Road from "/public/images/road.png";

export function Banner() {
  return (
    <div className="relative top-[-4rem] flex h-[715px] w-full flex-col items-center justify-evenly p-4 md:flex-row">
      <Image
        src={Road}
        className="absolute left-0 right-0 top-0 -z-10 h-auto min-h-[715px] w-full min-w-full object-cover object-bottom"
        placeholder="blur"
        width={1920}
        height={715}
        alt="road"
      />
      <div className="mt-16 flex flex-col gap-2 md:mt-0">
        <h1>Be faster on wheels</h1>
        <p>Buy new wheels for yourself and move with pleasure</p>
        <LinkButton
          href="/products"
          size="wide"
          className="relative mt-4 rounded-2xl border-none py-4 after:absolute after:inset-0 after:left-[100%] after:bg-purple-700 after:transition-[left_2s,_background-color] after:duration-1000 hover:bg-btn-primary hover:after:left-0 hover:after:bg-red"
        >
          <p className="z-10"> View the catalog </p>
        </LinkButton>
      </div>
      <Image
        src={ManOnSkate}
        width={553}
        height={474}
        className="h-auto w-auto md:self-end"
        priority
        alt="man-on-skate"
        placeholder="blur"
      />
    </div>
  );
}
export default Banner;
