import Image from 'next/image';
import Link from 'next/link';
import { LayoutFooter } from '../components/footer';
import { BaseLayout } from '../components/layouts/base/section';

export default function NotFound() {
  return (
    <BaseLayout title="Not Found">
      <section className="h-screen flex-col flex bg-white w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src="/images/dashboard/not-found.svg"
            width={280}
            height={280}
            alt="Empty"
          />
          <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
          <p className="text-gray-600 mt-4 mb-6">
            Halaman yang Anda cari tidak ditemukan atau dalam perbaikan.
          </p>
          <Link
            href="/semua-fitur"
            className="px-4 py-2 text-white bg-sky-base hover:bg-sky-base/80 text-primary rounded-md font-semibold transition-all"
          >
            Kembali ke Semua Fitur
          </Link>
        </div>
      </section>
      <LayoutFooter />
    </BaseLayout>
  );
}
