import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoCodeSlash } from 'react-icons/io5';

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <div className="min-h-(calc(100vh-192px)) bg-white px-6 pt-2 md:px-14 lg:px-16">
      <div className=" max-w-[1440px] mx-auto">
        <h1 className="text-2xl font-bold text-neutral-900 text-center">
          Pilih Jenis Administrasi
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 items-center">
          <ChoiceCard
            title="Administrasi Sekolah"
            description="Pilih administrasi untuk pembelajaran"
            icon={<FaGraduationCap size={28} />}
            href="/administrasi/perkuliahan"
            backgroundColor="bg-[#003566]"
            textColor="text-[#e6ebe0]"
          />
          {/* <ChoiceCard
            title="Administrasi Bootcamp / Pelatihan"
            description="Pilih administrasi untuk bootcamp atau pelatihan"
            icon={<IoCodeSlash size={28} />}
            href="/administrasi/bootcamp"
            backgroundColor="bg-[#007f5f]"
            textColor="text-[#faf9f9]"
          /> */}
        </div>
      </div>
    </div>
  );
};

const ChoiceCard = ({
  title,
  description,
  icon,
  href,
  backgroundColor,
  textColor,
}: {
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
  backgroundColor: string;
  textColor: string;
}) => {
  return (
    <Link href={href} className="w-full max-w-[568px]">
      <div
        className={`${backgroundColor} hover:${backgroundColor}/90 ${textColor} flex items-center flex-col p-4 border border-neutral-400 rounded-lg shadow-sm transition cursor-pointer group gap-2 py-12`}
      >
        <div className="flex-shrink-0">
          <div className={`p-3 rounded-full`}>{icon}</div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};
