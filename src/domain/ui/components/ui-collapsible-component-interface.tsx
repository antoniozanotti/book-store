import { ReactNode } from "react";

export interface UiCollapsibleComponentInterface
  extends React.ComponentProps<"div"> {
  shouldCloseWhenOutside: boolean;
  theHeader: ReactNode;
  theContent: ReactNode;
}