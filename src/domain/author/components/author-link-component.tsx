import Link from "next/link";
import { AuthorLinkComponentInterface } from "./author-link-component-interface";

export function AuthorLinkComponent({
  author,
  children,
  ...props
}: AuthorLinkComponentInterface) {
  const link = `/author/${author.page.slug}`;
  
  return (
    <Link href={link} title={author.name} rel="author" className={props.className}>
      {children}
    </Link>
  );
}
