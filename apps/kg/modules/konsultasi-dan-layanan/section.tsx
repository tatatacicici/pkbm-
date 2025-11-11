import { FC, ReactElement } from 'react';
import Image from 'next/image';
import random from './icon/random.svg';
import consultation from './icon/consultation.svg';
import option from './icon/option.svg';
import service from './icon/service.svg';
import headset from './icon/ic-service.svg';
import star from './icon/star.svg';
import { Accordion } from '@kampus-gratis/components/molecules';
import Link from 'next/link';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const ConsultationAndServiceModule: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100 w-full h-full px-8 md:px-14  lg:px-16">
      <main className="max-w-[1440px] mx-auto">
        <section className="flex mt-10 y-10 flex-col bg-primary-500 h-[244px] mx-[72px] rounded-md justify-center items-center text-white gap-[14px]">
          <h1 className="font-bold text-[36px]">Konsultasi & Layanan</h1>
          <p className="text-[28px]">Apa yang bisa kami bantu untuk Anda?</p>
          <div className="flex absolute pt-44 pl-16">
            <Image src={random} width={20} alt="?" />
          </div>
        </section>
        <div className="flex absolute pt-8 pl-16">
          <Image src={star} alt="svg" />
        </div>
        <div className="flex absolute pt-12 left-60">
          <Image src={random} alt="svg" />
        </div>
        <div className="flex absolute pt-8 right-20">
          <Image src={star} alt="svg" />
        </div>
        <section className="flex justify-center items-center py-40 gap-[132px]">
          <div className="flex flex-col justify-center items-center bg-white w-[420px] h-[450px] rounded-md shadow-xl gap-4">
            <div className="flex absolute top-80 pt-28">
              <Image src={consultation} alt="consul" />
            </div>
            <h1 className="text-black font-semibold text-[28px]">Konsultasi</h1>
            <div className="flex flex-col text-left px-12 gap-y-4">
              <Link
                href={`/konsultasi-dan-layanan/konsultasi-karir-dan-cita-cita`}
                className="flex gap-2 cursor-pointer"
              >
                <Image src={option} alt=">" />
                <p>Konsultasi Karir & Cita-Cita</p>
              </Link>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Konsultasi Masalah Keluarga dan Keuangan</p>
              </div>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Konsultasi Masalah Pribadi dan Cuti Kuliah</p>
              </div>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Konsultasi Akademik</p>
              </div>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Konsultasi Lainnya</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white w-[420px] h-[450px] rounded-md shadow-xl gap-4">
            <div className="flex absolute top-80 pt-28">
              <Image src={service} alt="consul" />
            </div>
            <div className="flex absolute top-80 pt-36">
              <Image src={headset} alt="consul" />
            </div>
            <h1 className="text-black font-semibold text-[28px]">Layanan</h1>
            <div className="flex flex-col text-left px-12 gap-y-4">
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Dokumen (Unduh berbagai dokumen)</p>
              </div>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Proses Dokumen (Ajukan dokumen yang telah di Unduh)</p>
              </div>
              <div className="flex gap-2">
                <Image src={option} alt=">" />
                <p>Cek Status Dokumen</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 mx-[136px] mb-40">
          <h1 className="text-[28px] font-semibold py-4">
            Petanyaan yang sering Ditanyakan
          </h1>
          <p className="py-4">
            Berikut list pertanyaan-pertanyaan yang sering ditanyakan kepada
            kami{' '}
          </p>
          <Accordion
            title="Apa itu Paket-C Gratis?"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500 ">
              Paket-C Gratis adalah sebuah sistem manajemen e-learning yang
              gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun,
              dan selalu update.
            </p>
          </Accordion>
          <Accordion
            title="Berapakah biaya kuliah di Paket-C Gratis?"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500">
              Gratis , hanya saja kamu harus melakukan komitmen dan mengikuti
              seluruh kelas dengan baik
            </p>
          </Accordion>
          <Accordion
            title="Bagaimana alur pendaftaran kuliah di Paket-C Gratis?"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500">
              Anda harus memiliki akun dan mengikut seluruh sosial media yang
              dimiliki paket-c gratis
            </p>
          </Accordion>
          <Accordion
            title="Program studi apa saja yang ditawarkan oleh Paket-C Gratis?"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500">
              Berbagai macam pelatihan hardskill maupun softskill
            </p>
          </Accordion>
          <Accordion
            title="Bolehkah mahasiswa yang kampusnya di bawah naungan Kementrian di luar Kemendikbud Ristek  mendaftar kuliah di Paket-C Gratis"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500">
              Boleh jika kampusnya bisa melakukan koversi sks
            </p>
          </Accordion>
          <Accordion
            title="Jika ada kampus yang belum bermitra tetapi ingin ikut program Paket-C Gratis?"
            idAccordion="what"
            className="bg-neutral-200"
          >
            <p className="bg-white p-6 text-[16px] text-neutral-500">
              Maka dilakukan sosialisasi terlebih dahulu agar kampus dan kampus
              gratis dapat memiliki persetujuan
            </p>
          </Accordion>
        </section>
      </main>
      <FooterCredit />
    </div>
  );
};
