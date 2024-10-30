import { ReactNode } from "react";

export interface UiWrapperComponentInterface extends React.ComponentProps<"div"> {
  children?: ReactNode;
}