import { CategoryWithPageAndProductsPrisma } from "@/domain/category/types/category-prisma";

export interface ProductsFromCategoryComponentInterface
  extends React.ComponentProps<"div"> {
  category: CategoryWithPageAndProductsPrisma;
}
