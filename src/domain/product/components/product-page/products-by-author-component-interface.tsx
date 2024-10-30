import { AuthorWithPageAndBooks } from "../../types/product-prisma";

export interface ProductsByAuthorComponentInterface
  extends React.ComponentProps<"div"> {
  author: AuthorWithPageAndBooks;
}