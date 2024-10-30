import { MenuItemComponentInterface } from "./menu-item-component-interface";
import Link from "next/link";

export function MenuItemComponent({
  href,
  title,
  children,
  ...props
}: MenuItemComponentInterface) {
  const liStyles = "bg-primary-300 hover:bg-primary-400";
  props.className = props.className
    ? `${liStyles} ${props.className}`
    : liStyles;
    
  return (
    <li {...props}>
      {href ? (
        <Link href={href} title={title} className="p-4 lg:px-10 lg:py-2 block">
          {children ?? title}
        </Link>
      ) : (
        children ?? title
      )}
    </li>
  );
}
