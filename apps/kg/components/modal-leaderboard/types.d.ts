export type TModalProps = {
  title?: string;
  children: ReactNode;
  button?: ReactNode;
  hasButton?: boolean;
  hasImage?: boolean;
  lookup: boolean;
  withClose?: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement | SVGElement>;
};
