'use client';
import React, { useState } from 'react';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import PrivateInformation from './private-information';
import JobInformation from './job-information';
import FileInformation from './file-information';
import Button from '../../../../components/button/Button';
import Image from 'next/image';
import { Modal } from '@kampus-gratis/components/molecules';
import { RxCross1 } from 'react-icons/rx';
import {
  useAccPengajuanAdm,
  useGetPengjuanAdmDataDiri,
  useRejectPengajuanAdm,
} from '../../../../hooks/pengajuan/administrasi/hook';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

type CheckboxState = {
  reason: string;
};

type TId = {
  id: string;
};

function LihatInformasiModule({ id }: TId) {
  const { data, refetch, isLoading } = useGetPengjuanAdmDataDiri(id);

  const dataPribadi = data?.data?.biodata;
  const dataPekerjaan = data?.data?.familial;
  const dataFile = data?.data?.file;
  const dataAdm = data?.data?.user_administration;

  const [idUser, setIdUser] = useState('');
  const [role, setRole] = useState('');
  const [accModal, setAccModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [doneAccModal, setDoneAccModal] = useState(false);
  const [doneRejectModal, setDoneRejectModal] = useState(false);
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    reason: '',
  });

  const { mutate: mutateAcc } = useAccPengajuanAdm();
  const { mutate: mutateReject } = useRejectPengajuanAdm(idUser, role);

  const handleCheckboxChange = (
    checkboxName: keyof CheckboxState,
    value: string
  ) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [checkboxName]: value,
    }));
  };

  const handleClickDone = () => {
    mutateAcc(idUser, {
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

  const LihatInformasiAdmBreadCrumb = [
    {
      name: 'Pengajuan Administrasi',
      link: '/pengajuan/administrasi',
    },
    { name: 'Informasi Data Diri Mahasiswa', link: 'not-routing' },
  ];

  return (
    <div>
      <Breadcrumb
        items={LihatInformasiAdmBreadCrumb}
        bgColor="bg-neutral-100"
        textColor='text-blue-base'
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="mt-10 mb-5">
            <PrivateInformation dataPribadi={dataPribadi} dataAdm={dataAdm} />
            <JobInformation dataPekerjaan={dataPekerjaan} />
            <FileInformation dataFile={dataFile} />
          </div>
          <div
            className={`
  ${
    data?.data?.status === 'ACCEPTED' || data?.data?.status === 'REJECTED'
      ? 'hidden'
      : 'flex justify-end w-full items-center'
  }
`}
          >
            <div className="flex gap-3 h-10">
              <Button
                onClick={() => {
                  setAccModal(true);
                  setIdUser(dataAdm?.id as string);
                }}
                plus={false}
                buttonStyle="flex items-center justify-center bg-success-500 w-full px-5 rounded-[8px] text-white"
              >
                Setujui
              </Button>
              <Button
                onClick={() => {
                  setRejectModal(true);
                  setIdUser(dataAdm?.id as string);
                  setRole(data?.data?.type as string);
                }}
                plus={false}
                buttonStyle="flex items-center justify-center bg-warning-500 w-full px-3 rounded-[8px] text-white"
              >
                Tolak
              </Button>
            </div>
          </div>
        </>
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
              onClick={() => {
                setAccModal(false);
              }}
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
                checked={checkboxState['reason'] === 'Pemberkasan Tidak Sesuai'}
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
              refetch();
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
              refetch();
            }}
          >
            Back
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default LihatInformasiModule;
