import { FooterItemComponentInterface } from "./footer-item-component-interface";
import { getSlug } from "@/helpers/get-slug";
import Link from "next/link";

export function FooterItemComponent({ title, ...props }: FooterItemComponentInterface) {
  return (
    <li {...props}>
      <Link
        href={`/${getSlug(title)}`}
        title={title}
        className="px-10 py-4 lg:py-0 block"
      >
        {title}
      </Link>
    </li>
  );
}
