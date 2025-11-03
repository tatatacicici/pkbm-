import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  FaCheckCircle,
  FaClipboardList,
  FaHourglassHalf,
  FaRegCalendarAlt,
  FaRegClock,
  FaUserEdit,
} from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import {
  IoChatboxEllipses,
  IoCloseCircle,
  IoDocumentText,
} from 'react-icons/io5';
import { MdArrowDropDown, MdMonitor, MdQuiz } from 'react-icons/md';
import { TbCloudSearch } from 'react-icons/tb';

type ProgressStatus =
  | 'LOCKED'
  | 'FINISHED'
  | 'ONGOING'
  | 'FAILED'
  | 'GRADING'
  | 'PENDING';

type SubItem = {
  id: string;
  title: string;
  status: ProgressStatus;
  deadline?: string;
};

type ProgressItem = {
  type: string;
  status: ProgressStatus;
  modules?: SubItem[];
  quizzes?: SubItem[];
  assignments?: SubItem[];
};

type Session = {
  id: string;
  title: string;
  no: number;
  type: string;
  start_at: string | null;
  is_locked: boolean;
  progress: ProgressItem[];
};

type SessionSectionProps = {
  session: Session | any;
  index: number;
  subjectSession: Session[];
};

export const SessionSection: React.FC<SessionSectionProps> = ({
  session,
  index,
  subjectSession,
}) => {
  const [isOpen, setIsOpen] = useState('');
  const pathname = usePathname();
  const globalCounterRef = useRef(0);

  useEffect(() => {
    if (isOpen === `Accordion-${session.no}`) {
      globalCounterRef.current = 0;
    }
  }, [isOpen, session.no]);

  const isSessionStarted = () => {
    if (!session.start_at) {
      return false;
    }
    const currentDate = new Date();
    const sessionDate = new Date(session.start_at);
    return currentDate.getTime() > sessionDate.getTime();
  };

  const isSessionLocked = () => {
    return session.is_locked || (session.start_at && !isSessionStarted());
  };

  const handleOnClick = () => {
    if (isSessionLocked()) {
      toast.dismiss();
      const lastOnGoingSession = subjectSession
        .slice(0, index)
        .reverse()
        .find((s) => !s.is_locked && (!s.start_at || isSessionStarted()));
      if (lastOnGoingSession) {
        const lastOnGoingContent = lastOnGoingSession.progress.find(
          (p) =>
            p.status === 'ONGOING' &&
            p.type !== 'ATTENDANCE' &&
            p.type !== 'DISCUSSION' &&
            p.type !== 'LIVE_MENTORING'
        );
        if (lastOnGoingContent) {
          return toast.error(
            `Kamu harus mengerjakan ${getTitle(
              lastOnGoingContent.type
            )} pada pertemuan ${lastOnGoingSession.no} terlebih dahulu`
          );
        }
        return toast.error('Pertemuan ini belum dibuka');
      }
      return toast.error('Pertemuan ini belum dibuka');
    }
    setIsOpen(
      isOpen === `Accordion-${session.no}` ? '' : `Accordion-${session.no}`
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'ATTENDANCE':
        return <FaRegCalendarAlt className="text-green-500 text-xl" />;
      case 'MODULE':
        return <IoDocumentText className="text-blue-500 text-xl" />;
      case 'QUIZ':
        return <MdQuiz className="text-yellow-500 text-xl" />;
      case 'ASSIGNMENT':
        return <FaClipboardList className="text-red-500 text-xl" />;
      case 'REFLECTION':
        return <TbCloudSearch className="text-orange-500 text-xl" />;
      case 'ASSESSMENT':
        return <FaUserEdit className="text-teal-500 text-xl" />;
      case 'DISCUSSION':
        return <IoChatboxEllipses className="text-green-500 text-xl" />;
      case 'LIVE_MENTORING':
        return <MdMonitor className="text-blue-500 text-xl" />;
      default:
        return null;
    }
  };

  const getTitle = (type: string) => {
    switch (type) {
      case 'ATTENDANCE':
        return 'Kehadiran';
      case 'MODULE':
        return 'Modul';
      case 'QUIZ':
        return 'Kuis';
      case 'ASSIGNMENT':
        return 'Tugas Individu';
      case 'REFLECTION':
        return 'Refleksi Pembelajaran';
      case 'ASSESSMENT':
        return 'Penilaian Pengajar';
      case 'DISCUSSION':
        return 'Diskusi Pertemuan';
      case 'LIVE_MENTORING':
        return 'Live Mentoring';
      default:
        return type;
    }
  };

  const getLink = (type: string) => {
    switch (type) {
      case 'ATTENDANCE':
      case 'MODULE':
      case 'QUIZ':
      case 'ASSIGNMENT':
        return '';
      case 'REFLECTION':
        return `${pathname}/refleksi-pembelajaran/${session.id}`;
      case 'ASSESSMENT':
        return `${pathname}/penilaian-pengajar/${session.id}`;
      case 'DISCUSSION':
        return `${pathname}/diskusi/${session.id}`;
      case 'LIVE_MENTORING':
        return `${pathname}/live-mentoring/${session.id}`;
      default:
        return '#';
    }
  };

  const getSubItems = (item: ProgressItem): SubItem[] | undefined => {
    switch (item.type) {
      case 'MODULE':
        return item.modules;
      case 'QUIZ':
        return item.quizzes;
      case 'ASSIGNMENT':
        return item.assignments;
      default:
        return undefined;
    }
  };

  const getNotificationText = (type: string, status: ProgressStatus) => {
    if (status === 'GRADING' || status === 'FAILED' || status === 'FINISHED') {
      return null;
    }

    switch (type) {
      case 'MODULE':
        return 'Kamu perlu menonton video dan menyelesaikan modul';
      case 'QUIZ':
        return 'Kamu perlu menjawab kuis (minimal 1 kali)';
      case 'ASSIGNMENT':
        return 'Kamu perlu mengunggah berkas atau mengirim teks untuk mengumpulkan tugas';
      default:
        return null;
    }
  };

  const calculateProgressPercentage = (session: Session) => {
    const totalActivities = session.progress.length;
    const completedActivities = session.progress.filter(
      (item) =>
        item.status === 'FINISHED' ||
        item.status === 'GRADING' ||
        item.status === 'FAILED'
    ).length;
    return Math.round((completedActivities / totalActivities) * 100);
  };

  const renderProgressItem = (
    item: ProgressItem,
    moduleIndex: number,
    isLastQuiz: boolean
  ) => {
    const isLocked = item.status === 'LOCKED';
    const subItems = getSubItems(item);
    const hasSubItems = subItems && subItems.length > 0;
    const shouldShowLock =
      isLocked ||
      (!hasSubItems && ['MODULE', 'QUIZ', 'ASSIGNMENT'].includes(item.type));
    const showIcon = !['MODULE', 'QUIZ', 'ASSIGNMENT'].includes(item.type);

    return (
      <div key={moduleIndex} className="mb-4 last:mb-0">
        {showIcon && (
          <div
            className={`flex items-center justify-between gap-3 pb-4 ${
              item.type === 'LIVE_MENTORING' ? '' : 'border-b'
            } border-gray-200`}
          >
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0">{getIcon(item.type)}</span>
              <div className="flex flex-col">
                {shouldShowLock ? (
                  <span className="font-medium text-gray-400 cursor-default">
                    {getTitle(item.type)}
                  </span>
                ) : (
                  <Link
                    href={getLink(item.type)}
                    className={`font-medium text-gray-800 hover:underline`}
                  >
                    {getTitle(item.type)}
                  </Link>
                )}
                {item.type === 'ATTENDANCE' && (
                  <span className="text-sm text-gray-600 mt-2">
                    Kamu perlu untuk menyelesaikan semua aktivitas
                  </span>
                )}
                {item.type === 'REFLECTION' && (
                  <span className="text-sm text-gray-600 mt-2">
                    Refleksi pembelajaran adalah kesempatan untuk mengevaluasi
                    pembelajaran yang telah kamu dapatkan pada pertemuan ini
                  </span>
                )}
                {item.type === 'ASSESSMENT' && (
                  <span className="text-sm text-gray-600 mt-2">
                    Berikan nilai dan komentar kamu untuk pengajar pada
                    pertemuan ini
                  </span>
                )}
              </div>
            </div>
            <span
              className={`text-sm font-medium ${
                isLocked
                  ? 'text-gray-400'
                  : item.status === 'FINISHED'
                  ? 'text-green-600'
                  : item.status === 'FAILED'
                  ? 'text-red-500'
                  : item.status === 'ONGOING'
                  ? 'text-blue-500'
                  : item.status === 'GRADING'
                  ? 'text-yellow-500'
                  : 'text-gray-400'
              }`}
            >
              {isLocked ? (
                <IoIosLock className="text-gray-400" size={24} />
              ) : item.status === 'FINISHED' ? (
                <FaCheckCircle className="text-green-600 mr-0.5" size={20} />
              ) : item.status === 'FAILED' ? (
                <IoCloseCircle className="text-red-500" size={24} />
              ) : item.status === 'GRADING' ? (
                <FaHourglassHalf className="text-yellow-500 mr-0.5" size={20} />
              ) : item.status === 'ONGOING' ? (
                item.type === 'ATTENDANCE' && (
                  <FaHourglassHalf
                    className="text-yellow-500 mr-0.5"
                    size={20}
                  />
                )
              ) : null}
            </span>
          </div>
        )}

        {item.type === 'MODULE' && !hasSubItems && (
          <div className="flex items-center gap-4 py-4 pt-0 border-b border-gray-200">
            <span className="flex-shrink-0">
              <IoDocumentText className="text-blue-500 text-xl" />
            </span>
            <span className="text-sm text-gray-600">
              Materi pada pertemuan ini belum tersedia{' '}
              <strong>
                <i>(tidak ada atau belum diunggah)</i>
              </strong>{' '}
              oleh pengajar
            </span>
          </div>
        )}

        {hasSubItems && (
          <div className={showIcon ? '' : 'border-b border-gray-200'}>
            {subItems!.map((subItem, subIndex) => {
              globalCounterRef.current += 1;
              const currentCounter = globalCounterRef.current;

              return (
                <div
                  key={subIndex}
                  className={`flex justify-between items-center ${
                    !showIcon && subIndex === 0 ? 'pt-0' : ''
                  } py-4 border-b border-gray-200 last:border-b-0`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0">{getIcon(item.type)}</span>
                    <div className="flex flex-col gap-1">
                      {isLocked ? (
                        <span className="text-sm text-gray-400">
                          {currentCounter}. {subItem.title}
                        </span>
                      ) : (
                        <Link
                          href={`${pathname}/session/${session.id}/${
                            item.type === 'MODULE'
                              ? 'modul'
                              : item.type === 'QUIZ'
                              ? 'kuis'
                              : 'tugas'
                          }/${subItem.id}`}
                          className="font-medium text-gray-800 hover:underline"
                        >
                          {currentCounter}. {subItem.title}
                        </Link>
                      )}
                      {getNotificationText(item.type, subItem.status) && (
                        <div className="flex flex-row gap-1">
                          <span className="text-sm text-gray-600 mt-1">
                            {getNotificationText(item.type, subItem.status)}
                          </span>
                          {subItem.deadline && (
                            <span className="text-sm text-gray-600 mt-1">
                              -{' '}
                              <strong>
                                Tenggat waktu:{' '}
                                {new Date(subItem.deadline).toLocaleDateString(
                                  'id-ID',
                                  {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    minute: '2-digit',
                                    hour: '2-digit',
                                  }
                                )}{' '}
                                WIB
                              </strong>
                            </span>
                          )}
                        </div>
                      )}
                      {isLocked ? (
                        <span className="text-sm text-gray-400">
                          Belum terbuka
                        </span>
                      ) : subItem.status === 'ONGOING' ? (
                        <span className="text-sm text-gray-400">
                          Belum dikerjakan
                        </span>
                      ) : subItem.status === 'PENDING' ? (
                        <span className="text-sm text-gray-400">
                          Kamu belum mengerjakan tugas ini
                          {subItem.deadline && (
                            <span>
                              {' '}
                              - Deadline:{' '}
                              {new Date(subItem.deadline).toLocaleDateString(
                                'id-ID',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                }
                              )}
                            </span>
                          )}
                        </span>
                      ) : subItem.status === 'FINISHED' ? (
                        <span className="text-sm text-green-600">
                          Tugas kamu telah selesai
                        </span>
                      ) : subItem.status === 'FAILED' ? (
                        <span className="text-sm text-red-500">
                          Nilai kamu di bawah rata-rata. Coba untuk lebih teliti
                          lagi dalam mengerjakan
                        </span>
                      ) : subItem.status === 'GRADING' ? (
                        <span className="text-sm text-black">
                          Tugas kamu dalam status sedang dinilai. Tapi kamu
                          masih bisa mengubah jawaban tugas sebelum batas waktu
                          pengumpulan
                        </span>
                      ) : subItem.status === 'LOCKED' ? (
                        <span className="text-sm text-gray-400">Terkunci</span>
                      ) : null}
                    </div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isLocked
                        ? 'text-gray-400'
                        : subItem.status === 'FINISHED'
                        ? 'text-green-600'
                        : subItem.status === 'FAILED'
                        ? 'text-red-500'
                        : subItem.status === 'ONGOING'
                        ? 'text-blue-500'
                        : subItem.status === 'GRADING'
                        ? 'text-yellow-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {isLocked ? (
                      <IoIosLock className="text-gray-400" size={24} />
                    ) : subItem.status === 'FINISHED' ? (
                      <FaCheckCircle
                        className="text-green-600 mr-0.5"
                        size={20}
                      />
                    ) : subItem.status === 'FAILED' ? (
                      <IoCloseCircle className="text-red-500" size={24} />
                    ) : subItem.status === 'GRADING' ? (
                      <FaHourglassHalf
                        className="text-yellow-500 mr-0.5"
                        size={20}
                      />
                    ) : isLocked ? (
                      <IoIosLock className="text-gray-400" size={24} />
                    ) : null}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {item.type === 'QUIZ' && renderDiscussion()}
        {item.type === 'QUIZ' && renderLiveMentoring()}
      </div>
    );
  };

  const renderDiscussion = () => (
    <div className="mt-4 mb-4 last:mb-0">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0">{getIcon('DISCUSSION')}</span>
          <div className="flex flex-col">
            <Link
              href={`${pathname}/diskusi/${session.id}`}
              className={`font-medium text-gray-800 hover:underline`}
            >
              {getTitle('DISCUSSION')}
            </Link>
            <span className="text-sm text-gray-600 mt-2">
              Kamu perlu menjawab semua diskusi dan menyukai komentar atau
              balasan orang lain minimal satu (1)
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveMentoring = () => (
    <div className="mt-4 mb-4 last:mb-0">
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0">{getIcon('LIVE_MENTORING')}</span>
          <div className="flex flex-col">
            <Link
              href={`${pathname}/live-mentoring/${session.id}`}
              className={`font-medium text-gray-800 hover:underline`}
            >
              {getTitle('LIVE_MENTORING')}
            </Link>
            <span className="text-sm text-gray-600 mt-2">
              Live Mentoring berisi kilas balik dan diskusi bersama dengan
              pengajar{' '}
              <strong>
                <i>(jika ada)</i>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={handleOnClick}
        // className={`w-full px-6 py-4 text-white text-left font-semibold flex justify-between items-center ${
        //   isSessionLocked() ? 'bg-gray-500' : 'bg-primary-500'
        // }`}
        className={`w-full px-6 py-4 text-white text-left font-semibold flex justify-between items-center ${
          isSessionLocked() ? 'bg-gray-500' : 'bg-sky-base'
        }`}
      >
        <span>
          Pertemuan {index + 1}: {session.title}
          {session.start_at && isSessionLocked()
            ? ` - ${new Date(session.start_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}`
            : ''}
        </span>
        {isSessionLocked() ? (
          <IoIosLock className="text-gray-400" size={24} />
        ) : (
          <MdArrowDropDown
            className={`text-3xl relative ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {isOpen === `Accordion-${session.no}` && !isSessionLocked() && (
        <div className="p-4 pb-0">
          {session.progress.some(
            (item: { type: string }) => item.type === 'ATTENDANCE'
          ) && (
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-gray-200 mb-4">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0">
                  <FaRegClock className="text-green-500 text-xl" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">Kehadiran</span>
                  <span className="text-sm text-gray-600 mt-2">
                    {calculateProgressPercentage(session) === 100
                      ? 'Kamu telah menyelesaikan semua aktivitas pada pertemuan ini'
                      : 'Kamu perlu untuk menyelesaikan semua aktivitas'}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`text-sm font-medium mr-2 ${
                    calculateProgressPercentage(session) === 100
                      ? 'text-green-500'
                      : 'text-blue-500'
                  }`}
                >
                  {calculateProgressPercentage(session)}%
                </span>
                <div className="w-20 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      calculateProgressPercentage(session) === 100
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}
                    style={{
                      width: `${calculateProgressPercentage(session)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {(() => {
            // Create a custom order for rendering items
            const customOrder = [
              'MODULE',
              'QUIZ',
              'ASSIGNMENT',
              'REFLECTION',
              'ASSESSMENT',
            ];

            const lastQuizIndex = session.progress
              .filter((item: ProgressItem) => customOrder.includes(item.type))
              .map((item: ProgressItem) => item.type)
              .lastIndexOf('QUIZ');

            return customOrder.map((itemType, index) => {
              const item = session.progress.find(
                (p: ProgressItem) => p.type === itemType
              );
              if (item) {
                const isLastQuiz =
                  itemType === 'QUIZ' && index === lastQuizIndex;
                return renderProgressItem(
                  item,
                  session.progress.indexOf(item),
                  isLastQuiz
                );
              }
              return null;
            });
          })()}
        </div>
      )}
    </div>
  );
};
