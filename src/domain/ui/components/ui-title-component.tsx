import { TitleSizeEnum } from "../enums/title-size-enum";
import { UiTitleComponentInterface } from "./ui-title-component-interface";
import React from "react";

export function UiTitleComponent({
  level = "h1",
  size = "x_large",
  children,
  ...props
}: UiTitleComponentInterface) {
  const baseStyles = "font-primary text-pretty";
  const sizeStyles = useSizeStyles(size);
  const headingClasses = `${baseStyles} ${sizeStyles}`;
  props.className = props.className
    ? `${headingClasses} ${props.className}`
    : headingClasses;

  return React.createElement(level, { ...props }, children);
}

function useSizeStyles(size: keyof typeof TitleSizeEnum) {
  switch (size) {
    case "small":
      return "text-2xl";
    case "medium":
      return "text-3xl";
    case "large":
      return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";
    default:
      return "text-5xl sm:text-6xl md:text-7xl lg:text-8xl";
  }
}
