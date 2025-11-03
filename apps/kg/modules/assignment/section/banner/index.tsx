import { FC, ReactElement } from 'react';

export const BannerSection: FC = (): ReactElement => {
  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full max-w-[1440px] mx-auto">
      {/* <div className="pt-10 bg-[#106FA4] h-[212px] rounded-[8px]"> */}
      <div className="pt-10 bg-sky-base h-[212px] rounded-[8px]">
        <h1 className=" text-white font-bold text-[28px] text-center ">
          PR & Tugas
        </h1>
        <p className="pt-6 text-white font-semibold text-center">
          Selesaikan tugasmu tepat waktu dan dapatkan nilainya!{' '}
        </p>
      </div>
    </section>
  );
};
