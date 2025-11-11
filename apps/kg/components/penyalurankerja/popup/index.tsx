import { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ModalJob } from './modal';

export type TPopupAjukanLamaran = {
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

export const PopupAjukanLamaran: FC<TPopupAjukanLamaran> = ({
  popupTitle,
  description,
  icon,
  image,
  lookup,
  onClose,
  children,
  className,
  stylePopup,
  widthModal,
  hasImg,
  hasButton = true,
}): ReactElement => {
  return (
    <ModalJob
      lookup={lookup as boolean}
      onClose={onClose}
      withClose={true}
      widthModal={widthModal}
      hasButton={hasButton}
    >
      <div
        className={` gap-6 flex flex-col items-center justify-center w-full text-center dark:bg-[#222529] ${className}`}
      >
        {icon ? (
          <>
            <Image
              src={icon as StaticImageData}
              height={55.7}
              width={55.7}
              alt="Popup-Image"
            />
            {hasImg && (
              <Image
                src={image as StaticImageData}
                height={280.75}
                width={280.75}
                alt="Popup-Image"
              />
            )}
          </>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {hasImg && (
              <Image
                src={image as StaticImageData}
                className={'w-full'}
                height={280.75}
                width={280.75}
                alt="Popup-Image"
              />
            )}
          </>
        )}

        <div>
          <h1 className={`font-bold text-[23.4px] ${stylePopup}`}>
            {popupTitle}
          </h1>
          <h5 className="font-medium text-[16px] text-[#A3A3A3] px-10 mb-4">
            {description}
          </h5>
        </div>

        {/*  */}
        <div className="flex w-full flex-col justify-center">{children}</div>
      </div>
    </ModalJob>
  );
};
