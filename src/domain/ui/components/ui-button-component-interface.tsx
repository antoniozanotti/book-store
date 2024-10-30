import { ReactNode } from "react";

export interface UiButtonComponentInterface
  extends React.ComponentProps<"button"> {
  children?: ReactNode;
}