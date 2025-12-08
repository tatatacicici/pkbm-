import { Button } from '@kampus-gratis/components/atoms';
import { FC, ReactElement } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { isModalOpen } from '../../store';

export const ReportSuccessModal: FC = (): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="relative grid w-10 h-10 rounded-full place-items-center">
        <BsCheckCircleFill className="z-20 text-4xl text-success-500" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="text-lg font-bold text-neutral-800">
          Terima kasih telah memberi tahu kami
        </h1>
        <p className="w-full mb-4 text-sm text-center ">
          Masukan dari Anda sangat penting untuk membantu kami menjaga komunitas
          Paket-C Gratis agar tetap aman.
        </p>
        <section className="flex w-full gap-6">
          <Button
            type="button"
            className="py-2.5 w-full text-white text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-[#106FA4] text-version2-500 hover:border-version2-300 hover:bg-[#30779d] hover:text-version2-400 "
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <h1>Tutup</h1>
          </Button>
        </section>
      </div>
    </section>
  );
};
