import { UiButtonComponentInterface } from "./ui-button-component-interface";

export function UiButtonComponent({
  children,
  ...props
}: UiButtonComponentInterface) {
  const buttonStyles = "bg-primary-900 font-bold p-4 text-primary-100";
  props.className = props.className
    ? `${buttonStyles} ${props.className}`
    : buttonStyles;
    
  return <button {...props}>{children}</button>;
}
