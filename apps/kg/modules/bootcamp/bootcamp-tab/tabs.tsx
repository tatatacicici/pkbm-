// eslint-disable-next-line @nx/enforce-module-boundaries
import { TSubject } from '@kampus-gratis/apps/kg/types/rencana-studi';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getColorByCategoryAndValue } from '../../../../../apps/kg/utils/constantStudyPlan';
import Link from 'next/link';
import { BsGlobe } from 'react-icons/bs';
import { IoIosBriefcase, IoIosColorPalette } from 'react-icons/io';
import { IoGameController } from 'react-icons/io5';
import { LuBrainCircuit } from 'react-icons/lu';
import { TbUserDollar } from 'react-icons/tb';

const getIcon = (title: string) => {
  switch (title) {
    case 'Bisnis Keberlanjutan':
      return <IoIosBriefcase className="text-2xl me-2" />;
    case 'Pembiayaan dan Optimalisasi Bisnis':
      return <TbUserDollar className="text-2xl me-2" />;
    case 'Teknologi Virtual Reality & Game':
      return <IoGameController className="text-2xl me-2" />;
    case 'Teknologi Internet of Things & Cyber Security':
      return <BsGlobe className="text-2xl me-2" />;
    case 'Desain Digital':
      return <IoIosColorPalette className="text-2xl me-2" />;
    default:
      return <LuBrainCircuit className="text-2xl me-2" />;
  }
};

const getBackgroundColor = (title: string) => {
  switch (title) {
    case 'Bisnis Keberlanjutan':
      return 'text-white bg-[#4caf50]';
    case 'Pembiayaan dan Optimalisasi Bisnis':
      return 'text-white bg-[#ff9800]';
    case 'Teknologi Virtual Reality & Game':
      return 'text-white bg-[#e91e63]';
    case 'Teknologi Internet of Things & Cyber Security':
      return 'text-white bg-[#ff5722]';
    case 'Desain Digital':
      return 'text-white bg-[#9c27b0]';
    case 'Teknologi BlockChain, AI & Data Science':
      return 'text-white bg-[#3f51b5]';
    default:
      return 'text-white bg-[#f44336]';
  }
};

const getBackgroundColorReverse = (title: string) => {
  switch (title) {
    case 'Bisnis Keberlanjutan':
      return 'bg-white text-[#4caf50]';
    case 'Pembiayaan dan Optimalisasi Bisnis':
      return 'bg-white text-[#ff9800]';
    case 'Teknologi Virtual Reality & Game':
      return 'bg-white text-[#e91e63]';
    case 'Teknologi Internet of Things & Cyber Security':
      return 'bg-white text-[#ff5722]';
    case 'Desain Digital':
      return 'bg-white text-[#9c27b0]';
    case 'Teknologi BlockChain, AI & Data Science':
      return 'bg-white text-[#3f51b5]';
    default:
      return 'bg-white text-[#f44336]';
  }
};

export function Tabs({
  activeTab,
  setActiveTab,
  title,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  title: string;
}) {
  return (
    <li>
      <button
        className={`inline-flex items-center px-4 py-3 rounded-lg w-full shadow-sm
        ${getBackgroundColor(title)} ${
          activeTab === title ? 'font-bold underline' : ``
        }`}
        onClick={() => setActiveTab(title)}
      >
        {getIcon(title)}
        <p className="text-start">{title}</p>
      </button>
    </li>
  );
}

export function TabsContent({
  activeTab,
  title,
  data,
}: {
  activeTab: string;
  title: string;
  data: TSubject[];
}) {
  const filteredData = Array.isArray(data)
    ? data.filter((subject) => subject.major_name === title)
    : [];

  return (
    <div
      className={`
    p-6 text-medium rounded-lg w-full h-[430px]
    ${activeTab === title ? 'block' : 'hidden'}
    ${getBackgroundColor(title)}
    `}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="overflow-auto h-[350px] scrollbar-hide">
        <ul className="flex-column text-sm font-medium md:me-4 mb-4 md:mb-0">
          {filteredData ? (
            filteredData.map((subject) => (
              <Link href={`#${subject.slug}`} key={subject.slug}>
                <li
                  className={`px-4 py-3 rounded-md mb-2 cursor-pointer ${getBackgroundColorReverse(
                    title
                  )}`}
                >
                  <span className="">{subject.name}</span>
                </li>
              </Link>
            ))
          ) : (
            <div>Tidak ada data</div>
          )}
        </ul>
      </div>
    </div>
  );
}
