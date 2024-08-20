"use client";
import { ImageIcon } from "lucide-react";
import NextImage from "next/image";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProductImageProps
  extends Omit<React.ComponentProps<typeof NextImage>, "src"> {
  src: string | null | StaticImport;
}

export default function Image(props: ProductImageProps) {
  const [imageSrc, setSrc] = useState(props.src || null);

  if (!imageSrc) {
    return (
      <div
        className="flex grow items-center justify-center self-stretch"
        style={{ width: props.width, height: props.height }}
      >
        <ImageIcon className="aspect-square size-[40%] text-text-disabled" />
      </div>
    );
  }
  return (
    <div
      className="flex size-full basis-full items-center justify-center"
      style={{
        maxWidth: props.width,
        maxHeight: props.height,
      }}
    >
      <NextImage
        placeholder="blur"
        blurDataURL={typeof imageSrc === "string" ? imageSrc : undefined}
        {...props}
        src={imageSrc}
        className={cn(
          "max-h-full max-w-full shrink grow object-contain object-center",
          props.className,
        )}
        onError={(e) => {
          setSrc(null);
          props.onError?.(e);
        }}
      />
    </div>
  );
}
