import { UiWrapperComponentInterface } from "./ui-wrapper-component-interface";

export function UiWrapperComponent({ children, ...props }: UiWrapperComponentInterface) {
  const divStyles = "w-full mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl";
  props.className = props.className
    ? `${divStyles} ${props.className}`
    : divStyles;

  return <div {...props}>{children}</div>;
}
