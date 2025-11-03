import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import { useRouter } from 'next/navigation';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function PopupStudyPlan({
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
      className="!p-0"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <BsCheckCircleFill size={50} color="#3EB449" className="" />
        <h2 className="text-center text-2xl font-semibold mt-4">
          Administrasi kamu disetujui
        </h2>
        {/* <p className="text-center text-base -mt-3">
          kamu bisa mengambil judul{' '}
          <span className="text-blue-base font-semibold">bootcamp</span>
        </p> */}
        <div className="flex flex-col gap-2 w-full mt-4">
          <Button
            type="button"
            className="bg-primary-500 py-4 w-3/4 md:w-1/2 mx-auto rounded-lg text-white font-medium"
            onClick={() => {
              onClose();
              router.push('/dashboard');
            }}
          >
            Kembali ke beranda
          </Button>
        </div>
      </div>
    </PopupModal>
  );
}
