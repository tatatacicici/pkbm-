'use client';

import { useGetAllSubject } from '@kampus-gratis/apps/kg/hooks/rencana-studi/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Image from 'next/image';

export default function KurikulumSilabusModule() {
  const { data, isLoading } = useGetAllSubject(
    '',
    '',
    1,
    '',
    '',
    '',
    'INDIVIDUAL',
    20
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-8">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/teacher.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Kurikulum dan Silabus
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Jelajahi Dunia Pengetahuan Luas dengan Kurikulum dan Silabus
                  Lengkap di Paket-C Gratis!
                </p>
              </div>
              <p className="text-white">
                Di Paket-C Gratis, kami berkomitmen untuk menyediakan pendidikan
                berkualiatas tinggi yang dapat diakses oleh semua orang. Kami
                menawarkan berbagai pilihan mata kuliah dengan kurikulum dan
                silabus yang menarik dan relevan dengan kebutuhan masing-masing
                yang dirancang dengan cermat oleh para ahli di bidangnya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 max-w-[1440px] mx-auto p-8 pt-0">
        <h2 className="text-2xl font-semibold mb-4 text-blue-base text-center">
          Paket-C Gratis menyediakan berbagai pilihan
          <span className="text-orange-base"> mata kuliah menarik</span>
        </h2>
        <div className="w-full">
          <CurriculumTable data={data.data} />
        </div>
      </div>
      <div className="text-center pb-12">
        <h2 className="text-2xl font-semibold">
          Ayo jelajahi kurikulum dan silabus lengkap di Paket-C Gratis!
        </h2>
        <a href="/rencana-studi">
          <button className="bg-blue-base text-white px-12 py-2 rounded-lg mt-4 font-semibold">
            Jelajahi
          </button>
        </a>
      </div>
    </div>
  );
}

const SubjectCard = ({
  name,
  thumbnail,
}: {
  name: string;
  thumbnail: string;
}) => {
  return (
    <div className="flex gap-4 border rounded-xl p-2 h-max items-center shadow-sm">
      <div className="rounded-lg overflow-hidden w-24 h-20 relative flex-shrink-0">
        <Image src={thumbnail} alt={name} layout="fill" />
      </div>
      <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
    </div>
  );
};

const CurriculumTable = ({
  data,
}: {
  data: {
    id: number;
    name: string;
    description: string;
    code: string;
    credit: number;
    type: string;
    level: string;
    thumbnail: string;
    brochure: string;
    semester: string;
    total_session: number;
    available: number;
    start_date: string;
    major_name: string;
  }[];
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Credit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Level
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Semester
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Session
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Major Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.description.slice(0, 100)}
                {item.description.length > 100 ? '...' : ''}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.credit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.level}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.semester}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.total_session}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.major_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
