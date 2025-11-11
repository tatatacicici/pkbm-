import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { TChoiceFacultyCardProps } from './types';

export const ChoiceFacultyCard: FC<TChoiceFacultyCardProps> = (
  props
): ReactElement => {
  const router = useRouter();

  const majorsOpen = [
    // 'Pembiayaan dan Optimalisasi Bisnis',
    // 'Desain Digital',
    // 'Teknologi BlockChain, AI & Data Science',
    'Biologi',
    'Fisika',
    'Kimia',
    'Sosiologi',
    'Geografi',
    'Ekonomi',
  ];

  return (
    <section
      className="flex flex-col shadow-md w-full rounded-lg h-auto bg-white overflow-hidden hover:bg-neutral-100 transition"
      // onClick={() => router.push('/rencana-studi')}
    >
      <Image
        src={props.src}
        alt={'card-landing'}
        width={0}
        height={0}
        sizes="50vw"
        priority
        className="w-auto object-cover"
        style={{
          width: '100%',
          height: '350px',
        }}
      />
      <div className="flex flex-col justify-between h-full pb-0 gap-4">
        <div className="flex flex-col pt-4 px-4">
          <div className="">
            <h1 className="text-sky-base font-extrabold text-xl flex gap-2 items-center">
              <props.icon className="w-6 h-6" />
              {/* Fakultas  */} {props.title}
            </h1>
          </div>
          <ol className="list-decimal ml-6 mt-2 font-semibold">
            {props.major ? (
              props.major?.map((item, key) => (
                <li key={key} className="mb-4">
                  <div className="flex justify-between items-center gap-4">
                    <p className="text-sm">{item}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0 ${
                        majorsOpen.includes(item)
                          ? 'bg-green-100 text-dark border text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {/* {majorsOpen.includes(item) ? 'Dibuka' : 'September 2025'} */}
                      {majorsOpen.includes(item)
                        ? 'Terbuka'
                        : 'Terbuka Pada September 2025'}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-neutral-500 font-medium">-</p>
            )}
          </ol>
        </div>
        {/* <div className="bg-blue-100 text-blue-base w-full font-bold text-sm p-4"> */}
        <div className="bg-sky-base text-white w-full font-bold text-md p-4">
          Jurusan ini cukup menggunakan HP
        </div>
        {/* {props.title !== 'Bisnis' ? (
          <div className="bg-blue-100 text-blue-base w-full font-bold text-sm p-4">
            Fakultas ini membutuhkan Komputer
          </div>
        ) : (
          <div className="bg-green-100 text-green-700 w-full font-bold text-sm p-4">
            Fakultas ini cukup menggunakan HP
          </div>
        )} */}
      </div>
    </section>
  );
};
