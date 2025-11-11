import { LoadingButton } from '@kampus-gratis/components/molecules';
import Image from 'next/image';
import Link from 'next/link';
import { MdTimer } from 'react-icons/md';

export default function SectionDetail({
  avatar,
  name,
  topic,
  description,
  caseStudy,
  rules,
  duration,
  value,
  link,
  status,
  isLoading,
  onSubmit,
}: {
  avatar: string;
  name: string;
  topic: string;
  description: string;
  caseStudy: string;
  rules: string;
  duration?: number;
  link?: string;
  value?: {
    document_url: string;
    video_url: string;
  };
  status: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <div className="py-4 flex items-center gap-2 rounded-xl border px-4 bg-gray-100/50">
        <Image
          src={avatar}
          width={80}
          height={80}
          className="rounded-full object-cover w-[55px] h-[55px]"
          alt={name}
        />

        <div className="">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-gray-500">{topic}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <MdTimer className="text-warning-base" />
          <p className="text-warning-base">12 Juli 2024</p>
        </div>
        {status === 'GRADING' ? (
          <div className="bg-blue-base text-white px-6 py-1 rounded-xl text-sm">
            Sedang Dinilai
          </div>
        ) : (
          <div className="bg-warning-base text-white px-6 py-1 rounded-xl text-sm">
            Belum Mengumpulkan
          </div>
        )}
      </div>
      <div className="rounded-xl py-4 px-8 border space-y-6">
        <div className="space-y-1">
          <h1 className="text-xl font-medium">Deskripsi</h1>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="space-y-1">
          <h1 className="text-xl font-medium">Studi Kasus</h1>
          <p className="text-gray-600">{caseStudy}</p>
        </div>
        {link && (
          <div className="">
            <p className="text-gray-600">
              Berikut merupakan link pertemuan Asesmen via zoom:
            </p>
            <Link href="#" className="text-blue-500 hover:underline">
              https://zoom.com/aiuodw3g3t2
            </Link>
          </div>
        )}
      </div>
      <div className="rounded-xl py-4 px-8 border space-y-2">
        <h2 className="text-xl font-medium">
          Aturan pengumpulan tugas Asesmen
        </h2>
        <ol className="list-inside text-gray-600">
          {rules.split('\n').map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </div>

      <h2 className="text-xl font-medium">Form Pengumpulan Asesmen</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">Nama yang mengumpulkan:</label>
          <input
            id="name"
            name="name"
            type="text"
            value="John Doe"
            disabled
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">
            Upload File Penugasan Asesmen (Optional)
          </label>
          <label htmlFor="file-input" className="sr-only">
            Choose file
          </label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
          />
        </div>

        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">Link Video Asesmen</label>
          <div className="flex gap-2">
            <input
              id="link"
              name="link"
              type="text"
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              className="bg-blue-base w-[120px] text-white px-2 py-2 rounded-md disabled:opacity-50 disabled:pointer-events-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <LoadingButton /> : 'Unggah'}
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            <span className="text-red-500 font-medium">Note: </span>
            File dan link yang diunggah tidak dapat diubah
          </p>
        </div>
      </form>
    </>
  );
}
