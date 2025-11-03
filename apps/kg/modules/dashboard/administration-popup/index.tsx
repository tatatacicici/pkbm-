import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PopupAdministration({
  lookup,
  onClose,
}: {
  lookup: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  return (
    <PopupModal
      lookup={lookup}
      onClose={onClose}
      widthModal="w-full md:w-[50vw]"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          src={'/images/administration.svg'}
          width={200}
          height={200}
          alt={'administration'}
        />
        <h2 className="text-center text-2xl font-semibold mt-4">
          Administrasi
        </h2>
        <p className="text-center text-base">
          Kamu Harus Melengkapi Administrasi untuk dapat mengakses fitur lainnya
        </p>
        <div className="flex flex-col gap-2 w-full mt-4">
          <Button
            type="button"
            className="bg-primary-500 py-4 w-3/4 md:w-1/2 mx-auto rounded-lg text-white font-medium"
            onClick={() => {
              onClose();
              router.push('/administrasi');
            }}
          >
            Lengkapi Administrasi
          </Button>
        </div>
      </div>
    </PopupModal>
  );
}
