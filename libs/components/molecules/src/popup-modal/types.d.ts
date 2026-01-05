export type TPopupModalProps = {
  id?: string;
  popupTitle?: string;
  description?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  icon?: StaticImageData;
  image?: StaticImageData;
  lookup?: boolean;
  children?: ReactNode;
  className?: string;
  hasImg?: boolean;
  stylePopup?: string;
  widthModal?: string;
  hasButton?: boolean;
};
