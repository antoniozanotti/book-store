import { ProductLinkComponentInterface } from "./product-link-component-interface";
import { getAuthorsByProduct } from "../helpers/get-authors-by-product";
import Link from "next/link";

export function ProductLinkComponent({
  product,
  children,
  ...props
}: ProductLinkComponentInterface) {
  const link = `/product/${product.page.slug}`;
  const title = `${product.name} by ${getAuthorsByProduct(product)}`;
  
  return (
    <Link href={link} title={title} className={props.className}>
      {children}
    </Link>
  );
}
