import { FC, useEffect, useState } from 'react';
import { SubmissionContractTable } from './kontrak-krs';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { DrafContractModule } from './draft-krs';
import { PengajuanModule } from './pengajuan';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDataMajorContract } from '../../../../hooks/study-plan/hook';
type Props = {
  id: string;
};
export const Enrolled: FC<Props> = ({ id }) => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const tab = query.get('tab');
  const [active, setactive] = useState(tab || 'kontrak-krs');
  const [isClose, setClose] = useState(false);
  const [desc, setDesc] = useState(
    'KRS yang ditambahkan dapat dilihat pada tab Draf KRS'
  );

  const { getMajorContractData } = useDataMajorContract();

  const moveKRS = (): void => {
    setactive('draft-krs');
    router.replace(`${pathName}?tab=draft-krs`);
  };
  const moveKonversi = (): void => {
    setactive('konversi');
  };
  const movePengajuan = (): void => {
    setactive('pengajuan');
  };

  return (
    <div
      className="mx-auto
    max-w-[1440px]"
    >
      <div className="flex flex-col  gap-4 ">
        <h1 className="text-[#737373] text-[18px] text:lg">Program Studi</h1>
        <p className="text-[20px] font-semibold">
          {getMajorContractData?.dataMajor?.name}
        </p>
      </div>
      <div
        className={`${
          isClose && 'hidden'
        } flex bg-[#E9F6FD] dark:bg-yellow-300 border border-[#106FA4] dark:border-yellow-100 dark:text-whitetext-yellow-700 py-3 text-[#106Fa4] rounded relative px-6 my-6`}
        role="alert"
      >
        <BsExclamationCircleFill className="text-[#106FA4] w-7 h-7" />
        <span className="block px-4 sm:inline">{desc}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <MdClose
            className="text-gray-500 w-7 h-7"
            onClick={() => setClose(true)}
          />
        </span>
      </div>
      <div>
        <div className="bg-white h-full rounded-[8px] dark:bg-[#1f2937] ">
          <div className="text-[18px] font-semibold text-center text-[#9ca3af] border-b border-[#e5e7eb] px-[26px] mb-10">
            <ul className="flex flex-wrap ">
              <li className="mr-2">
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == 'kontrak-krs'
                        ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                        : ''
                    }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white  `}
                    aria-current="page"
                    onClick={() => {
                      setDesc(
                        'KRS yang ditambahkan dapat dilihat pada tab Draf KRS'
                      );
                      setactive('kontrak-krs');
                      router.replace(`${pathName}?tab=kontrak-krs`);
                    }}
                  >
                    Kontrak KRS
                  </a>
                </button>
              </li>
              <li className="mr-2">
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == 'draft-krs'
                        ? 'text-[#0B568D] border-[#0B568D] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                        : ''
                    }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-white `}
                    aria-current="page"
                    onClick={() => {
                      setDesc(
                        'KRS yang ditambahkan dapat dilihat pada tab Draf KRS'
                      );
                      setactive('draft-krs');
                      router.replace(`${pathName}?tab=draft-krs`);
                    }}
                  >
                    Draft KRS
                  </a>
                </button>
              </li>
              <li className="mr-2">
                <button>
                  <a
                    className={`inline-block p-4 ${
                      active == 'pengajuan'
                        ? 'text-[#0B568D] border-[#ffff] dark:text-[#ffff] dark:border-[#ffff] border-b-2'
                        : ''
                    }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-white `}
                    aria-current="page"
                    onClick={() => {
                      setDesc('Estimasi pengajuan adalah maksimal 7 hari');
                      setactive('pengajuan');
                      router.replace(`${pathName}?tab=pengajuan`);
                    }}
                  >
                    Pengajuan
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {active === 'kontrak-krs' && (
            <SubmissionContractTable
              onClick={() => moveKRS()}
              onMove={() => moveKonversi()}
              id={id}
            />
          )}
          {active === 'draft-krs' && (
            <DrafContractModule
              onClick={() => moveKRS()}
              onMove={() => movePengajuan()}
              id={id}
            />
          )}
          {active === 'pengajuan' && (
            <PengajuanModule
              onClick={() => moveKRS()}
              onMove={() => moveKonversi()}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};
