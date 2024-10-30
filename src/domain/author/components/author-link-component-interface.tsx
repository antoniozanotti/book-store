import { ReactNode } from "react";
import { AuthorWithPagePrisma } from "../types/author-prisma";

export interface AuthorLinkComponentInterface
  extends React.ComponentProps<"a"> {
  author: AuthorWithPagePrisma;
  children: ReactNode;
}