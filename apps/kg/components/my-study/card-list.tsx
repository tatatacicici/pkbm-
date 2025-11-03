import { FaBookOpen, FaCheckCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import { GrScorecard } from 'react-icons/gr';
import { IoDocumentText, IoTimerOutline } from 'react-icons/io5';
import { MdOutlineAccessTimeFilled, MdQuiz } from 'react-icons/md';
import { PiBookmarksSimpleFill } from 'react-icons/pi';

export default function CardListSubject({
  id,
  total_videos,
  total_documents,
  total_journals,
  total_articles,
  duration,
  type,
  title,
  deadline,
  grading,
  description,
  submitted,
}: {
  id: string | number;
  total_videos?: string;
  total_documents?: string | number;
  total_journals?: string;
  total_articles?: string;
  duration?: string;
  type?: string;
  deadline?: string;
  grading?: boolean;
  title: string;
  description?: string;
  submitted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-6 w-full rounded-2xl p-4 border shadow-md transition-all duration-200 group ${
        submitted
          ? 'bg-[#d8f3dc]'
          : grading
          ? 'bg-[#a2d6f9]'
          : 'bg-[#eef2f5] hover:bg-[#f4f7fa]'
      }`}
    >
      <div
        className={`flex rounded-xl p-4 pb-6 text-xs font-semibold gap-2 flex-col shrink-0 transition-all duration-200
        ${
          submitted
            ? 'bg-[#b7e4c7] text-[#386641]'
            : grading
            ? 'bg-[#60b6fb] text-[#112A46]'
            : 'bg-[#DCE2F0] text-[#50586C] group-hover:bg-[#f2f6ff] border'
        }
      `}
      >
        <h2 className="font-bold text-lg text-center">
          Module {id}
          {submitted && <FaCheckCircle className="inline-block ml-2" />}
        </h2>
        <div className="flex gap-2">
          {duration && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#333D79] text-[#FAEBEF]">
              <div className="rounded-full bg-white p-1.5 text-[#333D79]">
                <MdOutlineAccessTimeFilled size={16} />
              </div>
              <p className="">{duration}</p>
            </div>
          )}
          {type && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#A4193D] text-[#FFDFB9]">
              <div className="rounded-full bg-white p-1 text-[#A4193D]">
                <MdQuiz size={20} />
              </div>
              <p className="">{type}</p>
            </div>
          )}
          {total_videos && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#333D79] text-[#FAEBEF]">
              <div className="rounded-full bg-white p-1.5 text-[#333D79]">
                <FaPlay size={16} />
              </div>
              <p className="">{total_videos} Video</p>
            </div>
          )}
          {total_documents ? (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#F2AA4C] text-[#101820]">
              <div className="rounded-full bg-white p-1 text-[#F2AA4C]">
                <IoDocumentText size={20} />
              </div>
              <p className="">{total_documents} Dokumen</p>
            </div>
          ) : null}
        </div>
        <div className="flex gap-2">
          {deadline && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#A4193D] text-[#FFDFB9]">
              <div className="rounded-full bg-white p-1 text-[#A4193D]">
                <IoTimerOutline size={20} />
              </div>
              <p className="">
                Deadline:{' '}
                {new Date(deadline).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          )}
          {total_journals && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#A4193D] text-[#FFDFB9]">
              <div className="rounded-full bg-white p-1 text-[#A4193D]">
                <FaBookOpen size={20} />
              </div>
              <p className="">{total_journals} Jurnal</p>
            </div>
          )}
          {total_articles && (
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 w-full bg-[#2BAE66] text-[#FCF6F5]">
              <div className="rounded-full bg-white p-1 text-[#2BAE66]">
                <PiBookmarksSimpleFill size={20} />
              </div>
              <p className="">{total_articles} Artikel</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600 line-clamp-3">{description}</p>
        {grading && (
          <div className="flex items-center gap-2 bg-[#f5cc00] text-[#101820] rounded-full px-3 py-2 w-max text-sm">
            <div className="rounded-full bg-white p-1 text-[#f5cc00]">
              <GrScorecard />
            </div>
            <p className="font-semibold">Penugasan sedang dinilai</p>
          </div>
        )}
      </div>
    </div>
  );
}
