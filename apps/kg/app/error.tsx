'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="h-screen flex-col flex bg-white w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/dashboard/not-found.svg"
          width={280}
          height={280}
          alt="Error"
        />
        <h1 className="text-5xl font-bold text-gray-800">Oops!</h1>
        <p className="text-gray-600 mt-4 mb-6">
          Terjadi kesalahan. Silakan coba lagi.
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="px-4 py-2 text-white bg-sky-500 hover:bg-sky-600 rounded-md font-semibold transition-all"
          >
            Coba Lagi
          </button>
          <Link
            href="/semua-fitur"
            className="px-4 py-2 text-sky-500 border border-sky-500 hover:bg-sky-50 rounded-md font-semibold transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
