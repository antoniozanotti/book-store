export interface UiFigureComponentInterface
  extends React.ComponentProps<"figure"> {
  src: string;
  width: number;
  originalWidth?: number;
  height: number;
  alt: string;
  innerImgStyle?: string;
}