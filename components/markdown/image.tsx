import { ComponentProps } from "react";
import NextImage from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null;

  // Ensure src is a string or StaticImport
  let imageSrc: string | StaticImport;
  if (typeof src === "string") {
    imageSrc = src;
  } else if (src instanceof Blob) {
    imageSrc = URL.createObjectURL(src);
  } else {
    return null;
  }

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={40}
      {...props}
    />
  );
}
