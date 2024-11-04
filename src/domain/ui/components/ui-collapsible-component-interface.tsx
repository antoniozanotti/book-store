import { ReactNode } from "react";

export interface UiCollapsibleComponentInterface
  extends React.ComponentProps<"div"> {
  theHeader: ReactNode;
  theContent: ReactNode;
}