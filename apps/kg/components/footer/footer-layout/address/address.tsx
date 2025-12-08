import { FC, ReactElement } from 'react';

export const FooterAddress: FC = (): ReactElement => {
  return (
    <div className=" text-neutral-900">
      <h1 className="mb-3 lg:mb-2 text-base font-bold">Alamat</h1>

      <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
        <li className="flex gap-2 ">
          <section className="min-w-[70px] flex justify-between">
            <span>Utama</span>
            <span>:</span>
          </section>
          <span>Jl. Raya Cirendeu No.61, Tangerang Selatan 15419</span>
        </li>
        {/* <li className="flex gap-2 ">
          <section className="min-w-[70px] flex justify-between">
            <span>Produksi</span>
            <span>:</span>
          </section>
          <span>Jl. Raya Cirendeu No.61, Tangerang Selatan 15419</span>
        </li>
        <li className="flex gap-2 ">
          <section className="min-w-[70px] flex justify-between">
            <span>Cabang</span>
            <span>:</span>
          </section>
          <span>Jl. Raya Darmo Permai III Surabaya. 60119</span>
        </li> */}
      </ul>
    </div>
  );
};
