import FormTabs from "./FormTabs";
import Image from "next/image";
import WomanOnScate from "/public/images/woman-on-skate.png";

export default function SignIn() {
  return (
    <div className="flex min-h-[40rem] w-[60rem] max-w-full grow justify-center overflow-hidden rounded-4xl border-none bg-bg-secondary">
      <div className="flex w-full min-w-72 max-w-[30rem] basis-full items-center justify-center border-none p-5 sm:p-10 md:basis-1/2">
        <FormTabs />
      </div>
      <div className="hidden md:block md:basis-1/2">
        <Image
          src={WomanOnScate}
          alt="WomenOnSkate"
          className="h-full object-cover object-center"
          placeholder="blur"
          width={495}
          height={640}
        />
      </div>
    </div>
  );
}
