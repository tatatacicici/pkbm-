'use client';

import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { Button } from '@nextui-org/react';
import EmptyState from 'apps/kg/components/empty-state';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaArrowLeft, FaCheckCircle, FaEye } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import YouTube from 'react-youtube';
import {
  useGetModuleContentById,
  usePopupConfirmModul,
  useWatchedVideoSubmitById,
} from '../../../../hooks/mystudy/module/hook';
import { TModuleContentItem } from '../../../../types/module-content';
import { ModuleButton } from '../components/button';
import { ModulePopup } from './pop-up';

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  content?: string;
  url?: string;
  document_file?: string;
  article_file?: string;
  is_video_seen?: boolean;
}

type ContentType = 'video' | 'document' | 'journal' | 'article';

interface ActiveContent {
  type: ContentType;
  item: ContentItem;
}

const TruncatedText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxLength) : text;

  return <p className="text-sm">{resultString}</p>;
};

export const ModuleContentModule: FC = (): ReactElement => {
  const { subjectId, sessionId, moduleId } = useParams<{
    subjectId: string;
    sessionId: string;
    moduleId: string;
  }>();
  const { data, isLoading } = useGetModuleContentById(
    subjectId,
    sessionId,
    moduleId
  );
  const { setPopupStatus } = usePopupConfirmModul();
  const { mutate } = useWatchedVideoSubmitById();
  const [dataModuleContents, setDataModuleContents] =
    useState<TModuleContentItem | null>(null);

  const [activeContent, setActiveContent] = useState<ActiveContent | null>(
    null
  );

  useEffect(() => {
    if (data?.data.module) {
      setDataModuleContents(data.data.module as TModuleContentItem);
    }
  }, [data]);

  useEffect(() => {
    if (dataModuleContents) {
      if (dataModuleContents.videos && dataModuleContents.videos.length > 0) {
        setActiveContent({ type: 'video', item: dataModuleContents.videos[0] });
      } else if (
        dataModuleContents.documents &&
        dataModuleContents.documents.length > 0
      ) {
        setActiveContent({
          type: 'document',
          item: dataModuleContents.documents[0],
        });
      } else if (
        dataModuleContents.journals &&
        dataModuleContents.journals.length > 0
      ) {
        setActiveContent({
          type: 'journal',
          item: dataModuleContents.journals[0],
        });
      } else if (
        dataModuleContents.articles &&
        dataModuleContents.articles.length > 0
      ) {
        setActiveContent({
          type: 'article',
          item: dataModuleContents.articles[0],
        });
      }
    }
  }, [dataModuleContents]);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideoEnd = (videoId: string) => {
    mutate(videoId);
    setDataModuleContents((prevContents) => {
      if (!prevContents) return null;
      return {
        ...prevContents,
        videos: prevContents.videos?.map((video) =>
          video.id === videoId ? { ...video, is_video_seen: true } : video
        ),
      };
    });
  };

  const renderMainContent = (): ReactElement => {
    if (!activeContent) return <EmptyState text="Tidak ada konten tersedia" />;

    switch (activeContent.type) {
      case 'video':
        return (
          <YouTube
            videoId={
              activeContent.item.url?.match(
                /(?<=v=|v\/|vi\/|vi=|youtu\.be\/|\/v\/|\/embed\/|\/shorts\/|\/youtu.be\/|\/v=|\/e\/|\/u\/\w\/|\/embed\/|\/v\/|\/watch\?v=|youtube.com\/watch\?v=|youtu.be\/)([^#&?\n]*)/
              )?.[0]
            }
            opts={{
              height: '300',
              width: '800',
              playerVars: { autoplay: 1 },
            }}
            onReady={(event: any) => event.target.pauseVideo()}
            onStateChange={(event: any) => {
              if (event.data === YouTube.PlayerState.ENDED) {
                handleVideoEnd(activeContent.item.id);
              }
            }}
            iframeClassName="xl:w-[728px] md:w-[728px] xl:h-[398px] lg:h-[508px] w-[350px] h-[240px]"
          />
        );
      case 'document':
      case 'journal':
      case 'article':
        return (
          <div className="relative">
            <iframe
              src={
                activeContent.item.url ||
                activeContent.item.document_file ||
                activeContent.item.article_file
              }
              className="xl:w-[728px] md:w-[728px] xl:h-[398px] lg:h-[508px] w-[350px] h-[240px] border rounded"
            />

            <Button
              onClick={() =>
                handleDownload(
                  activeContent.item.url || '',
                  `${activeContent.item.title}.pdf`
                )
              }
              className="absolute top-2 right-2 bg-blue-base text-white px-3 py-2 rounded-md flex items-center gap-2"
            >
              <FaEye />
              Lihat Jurnal
            </Button>
          </div>
        );
    }
  };

  useEffect(() => {
    if (data?.data.detail?.subject_name) {
      document.title = `Modul ${dataModuleContents?.title} - Pertemuan ${data.data.detail.session_no} - ${data.data.detail.subject_name} | Paket-C Gratis`;

      if (typeof window !== 'undefined') {
        window.gtag('config', 'G-YWYY60L1FX', {
          page_title: `Modul ${dataModuleContents?.title} - Pertemuan ${data.data.detail.session_no} - ${data.data.detail.subject_name} | Paket-C Gratis`,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    }
  }, [data?.data.detail, dataModuleContents]);

  if (isLoading) return <LoadingSpinner />;
  if (!data?.data)
    return <EmptyState text="Oops! Konten modul ini belum tersedia." />;

  const hasModules =
    dataModuleContents &&
    ['videos', 'documents', 'journals', 'articles'].some(
      (type) =>
        dataModuleContents[type as keyof TModuleContentItem] &&
        (dataModuleContents[type as keyof TModuleContentItem] as any[]).length >
          0
    );

  const contentTypes = [
    { type: 'videos', title: 'Video' },
    { type: 'documents', title: 'Dokumen' },
    { type: 'journals', title: 'Jurnal' },
    { type: 'articles', title: 'Artikel' },
  ];

  const hasContent = contentTypes.some(({ type }) => {
    const contentArray = dataModuleContents?.[
      type as keyof TModuleContentItem
    ] as any[];
    return contentArray && contentArray.length > 0;
  });

  return (
    <Fragment>
      <BreadCrumb
        className="px-5"
        items={[
          ...StudiKuBreadCumbs,
          {
            name: data?.data.detail.subject_name,
            link: `/studi-ku/${subjectId}`,
          },
          {
            name: dataModuleContents?.title,
            link: `/studi-ku/${subjectId}/session/${sessionId}/${moduleId}`,
          },
        ]}
        bgColor="bg-white"
      />
      <ModulePopup moduleId={dataModuleContents?.id as string} />
      {dataModuleContents && (
        <>
          <div className="flex flex-col h-full w-full items-center px-4 lg:px-8 mb-10 max-w-[1440px] mx-auto">
            <h1 className="mx-auto lg:text-3xl text-lg font-bold my-10">
              {dataModuleContents?.title}
            </h1>
            <div className="flex xl:flex-row flex-col w-full h-full gap-8 xl:gap-16">
              <section className="flex w-full">
                <div className="flex flex-col w-full h-auto gap-4 justify-center items-center">
                  {renderMainContent()}
                  <div className="shadow-lg rounded-lg p-5 lg:p-10 w-full h-full mt-3 md:mt-6 lg:mt-0 flex flex-col justify-between">
                    <div>
                      <h1 className="font-bold text-xl">
                        {activeContent?.item.title}
                      </h1>
                      <div className="w-full border-t rounded-lg border-gray-300 my-4"></div>
                      <p
                        className="text-gray-500"
                        dangerouslySetInnerHTML={
                          activeContent?.item.content
                            ? { __html: activeContent.item.content }
                            : { __html: activeContent?.item.description || '' }
                        }
                      ></p>
                    </div>
                  </div>
                </div>
              </section>
              {hasContent && (
                <section className="flex flex-col w-full shadow-lg rounded-lg p-6 justify-between">
                  <div className="flex flex-col w-full">
                    {contentTypes.map(({ type, title }) => {
                      const contentArray = dataModuleContents[
                        type as keyof TModuleContentItem
                      ] as any[];
                      if (!contentArray || contentArray.length === 0) {
                        return null; // Don't render anything if the array is empty
                      }
                      return (
                        <Fragment key={type}>
                          <h1 className="font-bold text-xl">{title}</h1>
                          <div className="flex flex-col gap-y-2 pt-2 mb-4">
                            {dataModuleContents[
                              type as keyof TModuleContentItem
                            ] &&
                            (
                              dataModuleContents[
                                type as keyof TModuleContentItem
                              ] as any[]
                            ).length > 0 ? (
                              (
                                dataModuleContents[
                                  type as keyof TModuleContentItem
                                ] as any[]
                              ).map((item: ContentItem, index: number) => (
                                <Button
                                  key={index}
                                  type="button"
                                  onClick={() =>
                                    setActiveContent({
                                      type: type.slice(0, -1) as ContentType,
                                      item,
                                    })
                                  }
                                  //   className={`flex items-center gap-x-2 w-full py-2 px-3 rounded-md shadow-sm text-start
                                  // ${
                                  //   activeContent?.item.id === item.id
                                  //     ? 'bg-blue-base text-white'
                                  //     : item.is_video_seen
                                  //     ? 'bg-green-500 text-white'
                                  //     : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500 border border-gray-100'
                                  // }`}
                                  className={`flex items-center gap-x-2 w-full py-2 px-3 rounded-md shadow-sm text-start
                                ${
                                  activeContent?.item.id === item.id
                                    ? 'bg-sky-base text-white'
                                    : item.is_video_seen
                                    ? 'bg-green-500 text-white'
                                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500 border border-gray-100'
                                }`}
                                >
                                  {type === 'videos' ? (
                                    item.is_video_seen ? (
                                      <FaCheckCircle
                                        size={36}
                                        className="text-white py-1"
                                      />
                                    ) : (
                                      <BsFillPlayCircleFill
                                        size={36}
                                        className="text-success-base py-1"
                                      />
                                    )
                                  ) : (
                                    <IoDocumentText
                                      size={36}
                                      className="text-red-base py-1"
                                    />
                                  )}
                                  <TruncatedText
                                    text={item.title}
                                    maxLength={50}
                                  />
                                </Button>
                              ))
                            ) : (
                              <p className="text-gray-500">
                                Dosen belum membuat {title.toLowerCase()}
                              </p>
                            )}
                          </div>
                          <div className="w-full border-t rounded-lg border-gray-300 mb-4"></div>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div className="w-fit lg:mt-16 md:mt-10 mt-7 mb-5 mx-auto">
                    {hasModules ? (
                      dataModuleContents?.status === 'FINISHED' ? (
                        <ModuleButton
                          className="px-3 cursor-default"
                          color={'green'}
                          text="Modul Selesai"
                          size="regular"
                          icon={
                            <FaCheckCircle size={18} className="text-white" />
                          }
                        />
                      ) : (
                        <ModuleButton
                          className="px-3"
                          color={'blue'}
                          text="Selesaikan Modul"
                          size="regular"
                          onClick={() => setPopupStatus(true)}
                          icon={
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.0889 10.915L11.0011 16.0049L8.49951 16.5052L8.99982 14.0036L14.0903 8.91377C14.3548 8.64886 14.7137 8.5 15.088 8.5C15.4622 8.5 15.8212 8.64886 16.0856 8.91377L16.0916 8.91911C16.6419 9.47105 16.6407 10.3645 16.0889 10.915Z"
                                stroke="white"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M6.4958 14.5042H2.4933C1.94067 14.5042 1.49268 14.0562 1.49268 13.5036V2.49672C1.49268 1.94409 1.94067 1.49609 2.4933 1.49609H12.4996C13.0522 1.49609 13.5002 1.94409 13.5002 2.49672V6.99953"
                                stroke="white"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M6.49561 4.49609H10.4981"
                                stroke="white"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M4.49463 7.5H10.4984"
                                stroke="white"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M4.49463 10.5H9.49775"
                                stroke="white"
                                strokeWidth="1.5"
                              />
                            </svg>
                          }
                        />
                      )
                    ) : (
                      <ModuleButton
                        className="px-3 cursor-default"
                        color={'gray'}
                        text="Modul Belum Tersedia"
                        size="regular"
                      />
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
          <Link
            href={`/studi-ku/${subjectId}`}
            // className="inline-flex text-primary-500 hover:text-primary-600 font-medium text-xs sm:text-sm mx-8"
            className="inline-flex text-sky-base hover:text-sky-base/80 font-medium text-xs sm:text-sm mx-8"
          >
            <FaArrowLeft className="mr-1 sm:mr-2" /> Kembali ke List Pertemuan
          </Link>
        </>
      )}
    </Fragment>
  );
};

export default ModuleContentModule;
