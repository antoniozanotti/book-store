export function ProductListItemComponent({
  children,
  ...props
}: React.ComponentProps<"article">) {
  const divStyles = "p-5 w-full sm:w-[227px] h-[400px] text-sm text-pretty";
  props.className = props.className ? `${divStyles} ${props.className}` : divStyles;
  
  return <article {...props}>{children}</article>;
}
