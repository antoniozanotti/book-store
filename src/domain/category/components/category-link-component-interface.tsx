import { CategoryWithPagePrisma } from "../types/category-prisma";
import { ReactNode } from "react";

export interface CategoryLinkComponentInterface
  extends React.ComponentProps<"a"> {
  category: CategoryWithPagePrisma;
  children: ReactNode;
}