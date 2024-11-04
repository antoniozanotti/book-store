import { UiFigureComponentInterface } from "./ui-figure-component-interface";
import CldImage from "@/lib/cld-image";

export function UiFigureComponent({
  src,
  width,
  originalWidth,
  height,
  alt,
  innerImgStyle,
  ...props
}: UiFigureComponentInterface) {
  const figureStyles = `bg-green-300`;
  props.className = props.className
    ? `${figureStyles} ${props.className}`
    : figureStyles;
    
  return (
    <figure {...props}>
      <CldImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`transition-all ${innerImgStyle}`}
        sizes={`${originalWidth ?? width}px`}
        crop="auto"
      />
    </figure>
  );
}
