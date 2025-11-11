'use client';

import React, { DependencyList, useCallback, useEffect, useState } from 'react';
import Button from '../../../components/button/Button';
import Searchbar from '../../../components/searchbar/Searchbar';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import Link from 'next/link';
import { IconAccept } from '../../../components/icons/ic-accept';
import { IconReject } from '../../../components/icons/ic-reject';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import { Modal } from '@kampus-gratis/components/molecules';
import { RxCross1 } from 'react-icons/rx';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  useAccPengajuanAdm,
  useGetPengjuanAdm,
  useRejectPengajuanAdm,
} from '../../../hooks/pengajuan/administrasi/hook';
import { TPengajuanAdm } from '../../../types/pengajuan/administrasi/type';
import Pagination from '../../../components/pagination';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

type CheckboxState = {
  reason: string;
};

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

function PengajuanAdmModule() {
  const params = useSearchParams();

  const page = Number(params.get('page')) || 1;
  const searchQuery = params.get('search') || '';

  const [open, setOpen] = useState(false);

  const [filter, setFilter] = useState('');

  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [accModal, setAccModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [doneAccModal, setDoneAccModal] = useState(false);
  const [doneRejectModal, setDoneRejectModal] = useState(false);
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    reason: '',
  });

  const [option, setOption] = useState({
    search: '',
    limit: 10,
  });
  const [deb, setDeb] = useState(searchQuery);
  const router = useRouter();

  const {
    data: pengajuan,
    refetch: refetchPengajuan,
    isLoading,
  } = useGetPengjuanAdm(page, option.search, option.limit, filter);

  const dataPengajuan = pengajuan?.data;
  const dataMeta = pengajuan?.meta;

  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/pengajuan/administrasi?page=1&search=${deb}`);
    },
    [deb],
    700
  );

  const { mutate: mutateAcc } = useAccPengajuanAdm();
  const { mutate: mutateReject } = useRejectPengajuanAdm(id, role);

  const handleCheckboxChange = (
    checkboxName: keyof CheckboxState,
    value: string
  ) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [checkboxName]: value,
    }));
  };

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b' },
    {
      header: 'Nama Mahasiswa',
      className: 'text-center border-b',
    },
    {
      header: 'Tanggal Pengajuan',
      className: ' border-b',
    },
    { header: 'Email', className: 'w-[10px] border-b' },
    { header: 'Berkas', className: 'border-b' },
    { header: 'Status', className: 'border-b' },
    { header: 'Action', className: 'border-b' },
  ];

  const handleClickDone = () => {
    mutateAcc(id, {
      onSuccess: () => {
        setAccModal(false);
        setDoneAccModal(true);
      },
      onError: (error: any) => {
        console.error('Error:', error);
      },
    });
  };

  const handleClickReject = () => {
    mutateReject(checkboxState, {
      onSuccess: () => {
        setRejectModal(false);
        setDoneRejectModal(true);
      },
      onError: (error: any) => {
        console.error('Error:', error);
      },
    });
  };

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    refetchPengajuan();
    router.push(`/pengajuan/administrasi?page=${page}`);
  };

  return (
    <>
      <div className="flex justify-between w-full pt-3">
        <p className="flex justify-center place-items-center font-semibold">
          Pengajuan Administrasi Mahasiswa
        </p>
        <div className="flex gap-4">
          <button
            className="w-full h-[40px] rounded-[8px] text-center border-[3px] border-blue-base relative px-3"
            onClick={() => setOpen(open == true ? false : true)}
          >
            <div className="my-auto flex justify-center items-center gap-2">
              <p className="text-blue-base text-[14px]">Sort By</p>
              <BsChevronDown className="text-blue-base" />
            </div>
            {open && (
              <div className="flex justify-end container z-[9000] absolute w-[150px] left-0 ease-in-out ">
                <div className="w-[160px] h-full mt-6 rounded-[8px] text-center overflow-hidden shadow-2xl">
                  <button
                    onClick={() => {
                      setFilter('');
                      refetchPengajuan();
                      router.push(`/pengajuan/administrasi?page=1`);
                    }}
                    className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  >
                    <div
                      className={`h-full w-[5px] ${
                        filter == '' ? 'bg-blue-base' : 'bg-white'
                      } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                    ></div>
                    <p className="text-[#262626] text-[14px] my-auto ml-3">
                      Semua
                    </p>
                  </button>
                  <button
                    className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                    onClick={() => {
                      setFilter('ACCEPTED');
                      refetchPengajuan();
                      router.push(`/pengajuan/administrasi?page=1`);
                    }}
                  >
                    <div
                      className={`h-full w-[5px] ${
                        filter == 'ACCEPTED' ? 'bg-blue-base' : 'bg-white'
                      } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                    ></div>
                    <p className="text-[#262626] text-[14px] my-auto ml-3">
                      Disetujui
                    </p>
                  </button>
                  <button
                    className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
                    onClick={() => {
                      setFilter('REJECTED');
                      refetchPengajuan();
                      router.push(`/pengajuan/administrasi?page=1`);
                    }}
                  >
                    <div
                      className={`h-full w-[5px] ${
                        filter == 'REJECTED' ? 'bg-blue-base' : 'bg-white'
                      } absolute left-0 overflow-hidden`}
                    ></div>
                    <p className="text-[#262626] text-[14px] my-auto ml-3">
                      Ditolak
                    </p>
                  </button>
                  <button
                    className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
                    onClick={() => {
                      setFilter('created_at:asc');
                      refetchPengajuan();
                      router.push(`/pengajuan/administrasi?page=1`);
                    }}
                  >
                    <div
                      className={`h-full w-[5px] ${
                        filter == 'created_at:asc' ? 'bg-blue-base' : 'bg-white'
                      } absolute left-0 overflow-hidden`}
                    ></div>
                    <p className="text-[#262626] text-[14px] my-auto ml-3">
                      Pengajuan Lama
                    </p>
                  </button>
                  <button
                    className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
                    onClick={() => {
                      setFilter('created_at:desc');
                      refetchPengajuan();
                      router.push(`/pengajuan/administrasi?page=1`);
                    }}
                  >
                    <div
                      className={`h-full w-[5px] ${
                        filter == 'created_at:desc'
                          ? 'bg-blue-base'
                          : 'bg-white'
                      } absolute left-0 overflow-hidden`}
                    ></div>
                    <p className="text-[#262626] text-[14px] my-auto ml-3">
                      Pengajuan Baru
                    </p>
                  </button>
                </div>
              </div>
            )}
          </button>

          <Searchbar
            placeholder="Cari: Status/Nama"
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-white p-5 shadow-lg rounded-lg mt-7">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ReusableTable
            classBody="bg-[#fff] text-neutral-500 font-semibold text-light"
            classHead="bg-[#fff] text-neutral-600 border-b border-solid"
            columns={columns}
            className="rounded-md"
          >
            {dataPengajuan ? (
              dataPengajuan?.map((data: TPengajuanAdm, index: number) => {
                return (
                  <>
                    <tr key={index} className="border-b ">
                      <td className="text-center">
                        <div className="flex justify-center items-center py-2">
                          {index + 1}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2">
                          {data?.user_administration?.full_name}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2">
                          {data?.created_at.slice(0, 10)}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2">
                          {data?.user_administration?.email}
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center items-center py-2 text-secondary-600 hover:underline">
                          <Link
                            href={`/pengajuan/administrasi/informasi-diri/${data?.id}`}
                          >
                            <h3 className="text-blue-base">Lihat Berkas</h3>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`rounded-lg p-1 text-center w-full ${
                            data.status === 'ACCEPTED'
                              ? 'bg-green-100 text-green-600'
                              : data.status === 'REJECTED'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {data.status}
                        </div>
                      </td>
                      <td>
                        <div
                          className={`${
                            data?.status === 'ACCEPTED' ||
                            data?.status === 'REJECTED'
                              ? 'hidden'
                              : 'flex justify-center items-center gap-2'
                          }`}
                        >
                          <span
                            onClick={() => {
                              setAccModal(true);
                              setId(data?.user_administration.id);
                            }}
                            className="cursor-pointer"
                          >
                            <IconAccept />
                          </span>
                          <span
                            onClick={() => {
                              setRejectModal(true);
                              setId(data?.user_administration.id);
                              setRole(data?.type);
                            }}
                            className="cursor-pointer"
                          >
                            <IconReject />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  Tidak ada data.
                </td>
              </tr>
            )}
          </ReusableTable>
        )}

        {/* Modal Accept */}
        <Modal lookup={accModal}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <Image
              src={'/assets/accept.svg'}
              alt="accept"
              width={50}
              height={50}
            />
            <h1 className="font-bold text-xl">Konfirmasi</h1>
            <p className="text-base font-normal">
              Apakah anda ingin menyetujui Pengajuan Administrasi ini?
            </p>
            <div className="flex gap-3 w-full h-[40px]">
              <Button
                plus={false}
                buttonStyle="flex items-center justify-center bg-transparent border-[3px] border-blue-base w-full px-3 rounded-[8px] text-blue-base"
                onClick={() => setAccModal(false)}
              >
                Batal
              </Button>
              <Button
                plus={false}
                buttonStyle="flex items-center justify-center bg-blue-base w-full px-3 rounded-[8px] text-white"
                onClick={handleClickDone}
              >
                Setujui
              </Button>
            </div>
          </div>
        </Modal>
        {/* Modal Reject */}
        <Modal lookup={rejectModal}>
          <div className="flex flex-col gap-y-4 items-center justify-center mt-3">
            <div className="flex items-center justify-between gap-5">
              <h1 className="font-bold text-base">
                Konfirmasi Penolakan Administrasi
              </h1>
              <Button
                plus={false}
                buttonStyle=""
                onClick={() => setRejectModal(false)}
              >
                <RxCross1 />
              </Button>
            </div>
            <div className="border border-b w-full px-2 border-neutral-200" />
            <div className="flex flex-col gap-y-4 items-center justify-center w-full p-3">
              <div className="flex justify-between items-center w-full">
                <label>Pemalsuan Informasi</label>
                <input
                  type="checkbox"
                  checked={checkboxState['reason'] === 'Pemalsuan Informasi'}
                  onChange={() =>
                    handleCheckboxChange('reason', 'Pemalsuan Informasi')
                  }
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <label>Kesalahan Penulisan</label>
                <input
                  type="checkbox"
                  checked={checkboxState['reason'] === 'Kesalahan Penulisan'}
                  onChange={() =>
                    handleCheckboxChange('reason', 'Kesalahan Penulisan')
                  }
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <label>Pemberkasan Tidak Sesuai</label>
                <input
                  type="checkbox"
                  checked={
                    checkboxState['reason'] === 'Pemberkasan Tidak Sesuai'
                  }
                  onChange={() =>
                    handleCheckboxChange('reason', 'Pemberkasan Tidak Sesuai')
                  }
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <label>Pemberkasan Palsu</label>
                <input
                  type="checkbox"
                  checked={checkboxState['reason'] === 'Pemberkasan Palsu'}
                  onChange={() =>
                    handleCheckboxChange('reason', 'Pemberkasan Palsu')
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button
                plus={false}
                buttonStyle="flex items-center justify-center bg-blue-base w-max h-8 px-3 rounded-[8px] text-white"
                onClick={handleClickReject}
              >
                Kirim
              </Button>
            </div>
          </div>
        </Modal>
        {/* Modal Done Accept */}
        <Modal lookup={doneAccModal}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <Image
              src={'/assets/accept.svg'}
              alt="accept"
              width={50}
              height={50}
            />
            <Image
              src={'/assets/popup-confirm.svg'}
              alt="popup"
              width={150}
              height={150}
            />
            <h1 className="font-bold text-xl">
              Berhasil Menyutujui Administrasi
            </h1>
            <Button
              plus={false}
              buttonStyle="flex items-center justify-center bg-blue-base w-1/2 py-2 px-3 rounded-[8px] text-white"
              onClick={() => {
                setDoneAccModal(false);
                refetchPengajuan();
              }}
            >
              Back
            </Button>
          </div>
        </Modal>
        {/* Modal Done Reject */}
        <Modal lookup={doneRejectModal}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <Image
              src={'/assets/reject.svg'}
              alt="reject"
              width={50}
              height={50}
            />
            <Image
              src={'/assets/popup-confirm.svg'}
              alt="popup"
              width={150}
              height={150}
            />
            <h1 className="font-bold text-xl">Berhasil Menolak Administrasi</h1>
            <Button
              plus={false}
              buttonStyle="flex items-center justify-center bg-blue-base w-1/2 py-2 px-3 rounded-[8px] text-white"
              onClick={() => {
                setDoneRejectModal(false);
                refetchPengajuan();
              }}
            >
              Back
            </Button>
          </div>
        </Modal>
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(dataMeta?.max_page)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default PengajuanAdmModule;
