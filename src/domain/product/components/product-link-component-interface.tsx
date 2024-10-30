import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export interface ProductLinkComponentInterface
  extends React.ComponentProps<"a"> {
  product: ProductWithPageAndBookPrisma;
  children: ReactNode;
}
