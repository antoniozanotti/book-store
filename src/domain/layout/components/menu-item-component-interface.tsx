import { ReactNode } from "react";

export interface MenuItemComponentInterface extends React.ComponentProps<"li"> {
  href?: string;
  title?: string;
  children?: ReactNode;
}