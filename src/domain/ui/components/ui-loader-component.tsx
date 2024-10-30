import { UiLoaderComponentInterface } from "./ui-loader-component-interface";
import { Loader2Icon } from "lucide-react";

export function UiLoaderComponent({ ...props }: UiLoaderComponentInterface) {
  const iconStyles = "animate-spin";
  props.className = props.className
    ? `${iconStyles} ${props.className}`
    : iconStyles;

  return <Loader2Icon {...props} />;
}
