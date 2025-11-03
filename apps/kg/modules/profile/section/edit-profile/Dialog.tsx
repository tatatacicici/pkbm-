import { Modal } from '@kampus-gratis/components/molecules';
import Image from 'next/image';
import { useProfile, useUpdateAvatar } from '../../../../hooks/profile/hook';
import { toast } from 'react-toastify';

export const Dialog = ({
  ...props
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  sourceImg: any;
  avatar: any;
}) => {
  const { mutate } = useUpdateAvatar();
  const { refetch } = useProfile();
  const handleUpload = () => {
    mutate(
      { avatar: props.avatar },
      {
        onSuccess: () => {
          props.setOpen(false);
          toast.success('Berhasil Mengubah Avatar', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          refetch();
        },
      }
    );
  };

  return (
    <Modal
      lookup={props.open}
      onClose={() => props.setOpen(false)}
      hasButton={true}
      // hasImage={true}
      withClose={true}
      widthModal={'max-w-2xl'}
    >
      <div className="flex flex-col">
        <div className="p-8">
          <Image
            src={props.sourceImg}
            width={200}
            height={200}
            alt="image upload"
            className="w-[200px] h-[200px] rounded-full object-cover bg-center"
          />
        </div>
        <button type="button" onClick={handleUpload}>
          Upload avatar
        </button>
      </div>
    </Modal>
  );
};
