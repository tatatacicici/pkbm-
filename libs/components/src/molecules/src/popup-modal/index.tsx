import { FC, ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Modal } from '../modal';
import { TPopupModalProps } from './types';

export const PopupModal: FC<TPopupModalProps> = ({
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
    <Modal
      lookup={lookup as boolean}
      onClose={onClose}
      withClose={true}
      widthModal={widthModal}
      hasButton={hasButton}
    >
      <div
        className={`flex flex-col items-center justify-center w-full py-10 text-center dark:bg-[#222529] ${className}`}
      >
        {icon ? (
          <>
            <Image
              src={icon as any}
              height={55.7}
              width={55.7}
              alt="Popup-Image"
            />
            {hasImg && (
              <Image
                src={image as any}
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
                src={image as any}
                className={'w-full'}
                height={280.75}
                width={280.75}
                alt="Popup-Image"
              />
            )}
          </>
        )}
        <h1 className={`font-bold text-[23.4px] ${stylePopup}`}>
          {popupTitle}
        </h1>
        <h5 className="font-medium text-[16px] text-[#A3A3A3] px-10 mb-4">
          {description}
        </h5>
        <div className="flex w-full flex-col justify-center">{children}</div>
      </div>
    </Modal>
  );
};
