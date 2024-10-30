import { CategoryLinkComponentInterface } from "./category-link-component-interface";
import { getCategoryUrl } from "../helpers/get-category-url";
import Link from "next/link";

export function CategoryLinkComponent({
  category,
  children,
  ...props
}: CategoryLinkComponentInterface) {
  const link = getCategoryUrl(category);
  
  return (
    <Link href={link} title={category.name} className={props.className}>
      {children}
    </Link>
  );
}
