import { FC, Fragment, ReactElement } from 'react';
import {
  useGetJobById,
  usePopUpJob,
  usePopUpJobLetter,
} from '../../../../hooks/penyalurankerja/detail/hooks';
import { useParams } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import { LocationIcon } from '../../assets/icon/location';
import { DollarIcon } from '../../assets/icon/dollar';
import { CalenderIcon } from '../../assets/icon/calender';
import { ClockIcon } from '../../assets/icon/clock';
import { BagIcon } from '../../assets/icon/bag';
import { AnotherJob } from '../anotherjob';
import {
  Button,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { PopupAjukanLamaran } from '../../../../components/penyalurankerja/popup';
import CheckList from '../../../../assets/icons/ic-checklist.svg';
import { InformationIcon } from '../../assets/icon/i-logo';
import { z } from 'zod';
import { validationSubmitApplication } from '../../../../config/validation/penyalurankerja';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const JobDetailModule: FC = (): ReactElement => {
  const params = useParams();

  const { id } = params;
  const { data } = useGetJobById(id as string);

  const jobDataDetail = data?.data;
  console.log(jobDataDetail);

  const { getPopupStatus, setPopupStatus } = usePopUpJob();
  const { getPopupLetter, setPopupLetter } = usePopUpJobLetter();

  const recruitmentDummy = '(Recruitment Industry)';

  type ValidationApplyJob = z.infer<typeof validationSubmitApplication>;

  const {
    control,
    formState: { errors },
  } = useForm<ValidationApplyJob>({
    mode: 'all',
    resolver: zodResolver(validationSubmitApplication),
    defaultValues: {
      full_name: '',
      noWhatsapp: undefined,
      cv: undefined,
      portofolio: undefined,
    },
  });

  const handleSetPopUp = () => {
    setPopupStatus(true);
  };

  const handleNextSetPopup = () => {
    setPopupStatus(false);
    setPopupLetter(true);
  };
  return (
    <Fragment>
      <div className="px-10 py-10 lg:px-20 bg-[#E9F6FD]">
        <section className="block mb-10 lg:flex gap-20 flex-row">
          <Image
            src={jobDataDetail?.company_logo as StaticImageData}
            alt="job-card"
            width={200}
            height={200}
            className="rounded"
          />
          <div className="py-4 w-full">
            <h1 className="text-2xl font-bold mb-7 text-neutral-900">
              {jobDataDetail?.position}
            </h1>
            <div className=" flex flex-row  justify-between place-items-center text-lg mb-7 w-full">
              <div className="flex">
                <LocationIcon />
                {jobDataDetail?.location}
              </div>
              <div className="flex">
                <h1 className="text-gray-400">
                  Terbuka Hingga{' '}
                  <span className="text-black font-semibold">
                    : {jobDataDetail?.closing_date?.slice(0, 10)}
                  </span>
                </h1>
              </div>
            </div>
            <h1 className=" flex place-items-center text-lg mb-7">
              <DollarIcon />
              Rp.{jobDataDetail?.min_salary} - {jobDataDetail?.max_salary}
            </h1>
          </div>
        </section>
        <section>
          <div className="flex flex-row">
            <div className="flex flex-row w-full">
              <div className="flex flex-row gap-6 w-full">
                <CalenderIcon />
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold">
                    {jobDataDetail?.workday?.[0]} -{' '}
                    {jobDataDetail?.workday?.slice(-1)}
                  </h1>
                  <h1>Hari Kerja</h1>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full">
                <ClockIcon />
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold">
                    {jobDataDetail?.workhour_start}-
                    {jobDataDetail?.workhour_end}
                  </h1>
                  <h1>Jam Kerja</h1>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full">
                <BagIcon />
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold">Full Time</h1>
                  <h1>Waktu Kerja</h1>
                </div>
              </div>
            </div>
            <div className="flex place-items-center justify-end w-full">
              <Button
                type="submit"
                className="bg-primary-500 text-white px-5 py-2 rounded-lg hover:bg-primary-600"
                onClick={handleSetPopUp}
              >
                Ajukan Lamaran
              </Button>
            </div>
          </div>
        </section>
      </div>
      <main className=" min-h-[80vh] py-4 ">
        <div className="px-10 py-10 lg:px-20">
          <section className="grid grid-cols-2 place-content-between gap-[200px]">
            <div className="space-y-10 w-full">
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Tipe Kontrak</h1>
                <h1 className="text-[16px]">Full Time</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Posisi</h1>
                <h1 className="text-[16px]">
                  {jobDataDetail?.position} {recruitmentDummy}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Jenis Industri</h1>
                <h1 className="text-[16px]">Education</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">
                  Tentang Perusahaan
                </h1>
                <h1 className="text-[16px]">{jobDataDetail?.description}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Lokasi Kerja</h1>
                <h1 className="text-[16px]">{jobDataDetail?.location}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">
                  Deskripsi Pekerjaan
                </h1>
                <h1 className="text-[16px]">{jobDataDetail?.description}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Tunjangan</h1>
                <h1 className="text-[16px]">{jobDataDetail?.location}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">Syarat Pelamar</h1>
                <h1 className="text-[16px]">{jobDataDetail?.description}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-lg pb-3">
                  Proses Perekrutan
                </h1>
                <h1 className="text-[16px]">{jobDataDetail?.description}</h1>
              </div>
            </div>
            <AnotherJob />
          </section>
        </div>
      </main>
      <PopupAjukanLamaran
        icon={CheckList}
        lookup={getPopupStatus}
        image={jobDataDetail?.company_logo}
        popupTitle="Melamar Mudah Di Paket-C Gratis"
        onClose={() => setPopupStatus(false)}
      >
        <div className="block space-y-5">
          <form action="" className="flex flex-col gap-8">
            <div className="space-y-2">
              <TextField
                name="full_name"
                control={control}
                label="Nama Lengkap"
                type="text"
                variant="md"
                required
                placeholder="Masukkan Nama Lengkap"
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                labelClassName="text-start"
                message={errors.full_name?.message?.toString()}
                status={errors.full_name ? 'error' : 'none'}
              />
            </div>
            <div className="space-y-2">
              <TextField
                name="noWhatsapp"
                control={control}
                label="Nomor Whatsapp"
                type="number"
                variant="md"
                required
                placeholder="Masukkan Nomor Whatsapp"
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                labelClassName="text-start"
                message={errors.noWhatsapp?.message?.toString()}
                status={errors.noWhatsapp ? 'error' : 'none'}
              />
            </div>
            <hr />
            <div className="space-y-3">
              <UploadField
                variant="md"
                control={control}
                required
                name={'cv'}
                accepted=".pdf"
                label="CV"
              />
              <div className="flex justify-end place-items-center gap-2">
                <InformationIcon />
                <p className="text-gray-500">Max 3 MB</p>
              </div>
            </div>
            <hr />
            <div className="space-y-3">
              <UploadField
                variant="md"
                control={control}
                required
                name={'portofolio'}
                accepted=".jpg, .jpeg, .pdf"
                label="Portofolio"
              />
              <div className="flex justify-end place-items-center gap-2">
                <InformationIcon />
                <p className="text-gray-500">Max 3 MB</p>
              </div>
            </div>
          </form>
          <div className="flex space-x-4 justify-end place-items-center">
            <p className="text-gray-400">Langkah 1 dari 2</p>
            <Button
              type="button"
              className="rounded-lg ease-in-out w-[100px] bg-primary-500 text-white py-2 hover:bg-primary-600"
              onClick={handleNextSetPopup}
            >
              Lanjut
            </Button>
          </div>
        </div>
      </PopupAjukanLamaran>
      <PopupAjukanLamaran
        icon={CheckList}
        lookup={getPopupLetter}
        image={jobDataDetail?.company_logo}
        popupTitle="Melamar Mudah Di Paket-C Gratis"
        onClose={() => setPopupLetter(false)}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p>Surat Lamaran</p>
            <span className="text-primary-400">Optional</span>
          </div>
          <textarea
            className="border-2 rounded-lg h-[200px] px-2 py-2"
            placeholder="Isi surat Lamaran Kamu disini"
          />
          <div className="flex flex-row justify-end gap-3 place-items-center mt-4">
            <p className="text-gray-400">Langkah 2 dari 2</p>
            <Button
              type="button"
              className="py-1 px-6 rounded-lg border-2 text-primary-500 border-primary-500"
            >
              Lewati
            </Button>
            <Button
              type="submit"
              className="py-1 px-6 bg-primary-500 text-white rounded-lg border-2 border-white"
            >
              Lanjut
            </Button>
          </div>
        </div>
      </PopupAjukanLamaran>
    </Fragment>
  );
};
