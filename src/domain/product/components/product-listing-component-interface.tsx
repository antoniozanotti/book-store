import { ReactNode } from "react";
import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export interface ProductListingComponentInterface extends React.ComponentProps<"div"> {
  products: ProductWithPageAndBookPrisma[];
  endCard?: ReactNode;
}
