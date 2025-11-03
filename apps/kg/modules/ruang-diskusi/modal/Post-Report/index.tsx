import { Button } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaFlag } from 'react-icons/fa6';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  useReportComment,
  useReportDiscussion,
  useReportReply,
} from '../../../../hooks/ruang-diskusi/hooks';
import {
  isModalOpen,
  reportDetailTitle,
  reportDetailType,
  selectedOption,
  selectedPostId,
} from '../../store';
import { TPostReportProps } from './types';

export const PostReportModal: FC<TPostReportProps> = ({
  type,
}): ReactElement => {
  const reportOption = [
    {
      title: 'Spam',
      report_type: 'SPAM',
    },
    {
      title: 'Ujaran atau simbol kebencian',
      report_type: 'HATE_SPEECH',
    },
    {
      title: 'Kekerasan atau organisasi berbahaya',
      report_type: 'VIOLENCE_DANGEROUS_ORGANIZATION',
    },
    {
      title: 'Ketelanjangan atau aktivitas seksual',
      report_type: 'NUDITY_SEXUAL_ACT',
    },
    {
      title: 'Penjualan barang ilegal atau barang dengan izin khusus',
      report_type: 'ILLEGAL_GOODS_SPECIAL_PERMIT',
    },
    {
      title: 'Perundungan (bullying) atau pelecehan',
      report_type: 'BULLYING',
    },
    {
      title: 'Pelanggaran hak kekayaan intelektual',
      report_type: 'COPYRIGHT_INFRINGEMENT',
    },
    {
      title: 'Bunuh diri atau melukai diri sendiri',
      report_type: 'SUICIDE_SELF_HARM',
    },
    {
      title: 'Penipuan atau penggelapan',
      report_type: 'SCAM',
    },
    {
      title: 'Informasi palsu',
      report_type: 'FALSE_INFORMATION',
    },
    {
      title: 'Saya hanya tidak menyukainya',
      report_type: 'I_DONT_LIKE_THIS',
    },
  ];

  const setSelectedOption = useSetRecoilState(selectedOption);
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const setReportDetail = useSetRecoilState(reportDetailTitle);
  const setReportType = useSetRecoilState(reportDetailType);

  const getSeletedPostId = useRecoilValue(selectedPostId);
  const getReportOption = useRecoilValue(reportDetailTitle);
  const getReportType = useRecoilValue(reportDetailType);

  const [reportDetailValue, setReportDetailValue] = useState('');

  const queryClient = useQueryClient();
  const { mutate } = useReportDiscussion(getSeletedPostId);
  const { mutate: mutateComment } = useReportComment(getSeletedPostId);
  const { mutate: mutateReply } = useReportReply(getSeletedPostId);

  const handleReport = async () => {
    const reportPayload = {
      report_type: getReportType,
      report_detail: reportDetailValue,
    };
    try {
      type === 'discussion'
        ? mutate(reportPayload, {
            onSuccess: () => {
              queryClient.invalidateQueries(['get-all-discussion']);
              // setOptionOpen(false);
              setReportDetailValue('');
              setReportDetail('');
              setSelectedOption('reportSuccess');
            },
          })
        : type === 'comment'
        ? mutateComment(reportPayload, {
            onSuccess: () => {
              queryClient.invalidateQueries([
                'comment-get-by-id',
                getSeletedPostId,
              ]);
              // setOptionOpen(false);
              setReportDetailValue('');
              setReportDetail('');
              setSelectedOption('reportSuccess');
            },
          })
        : mutateReply(reportPayload, {
            onSuccess: () => {
              queryClient.invalidateQueries(['comment-get-by-id']);
              // setOptionOpen(false);
              setReportDetailValue('');
              setReportDetail('');
              setSelectedOption('reportSuccess');
            },
          });
    } catch (err) {
      console.log('Gagal Report');
    }
  };

  return (
    <div className="w-full min-w-[400px]">
      {!getReportOption && (
        <section className="w-full">
          <header className="w-full flex justify-center border-b-[0.5px] py-2 border-neutral-300  relative">
            <h1 className="font-bold text-base text-neutral-900">Laporkan</h1>
            <RxCross1
              className="text-neutral-400 cursor-pointer text-lg absolute right-0"
              onClick={() => {
                setOptionOpen(false);
              }}
            />
          </header>
          <main className="text-sm py-4 flex flex-col">
            <h1 className="font-bold text-neutral-900 mb-3">
              Mengapa Anda Melaporkan Postingan ini ?
            </h1>
            {reportOption.map((item, index) => {
              return (
                <section
                  key={index}
                  className="w-full flex gap-4 py-3 border-b-[0.5px] border-neutral-200 cursor-pointer"
                  onClick={() => {
                    setReportDetail(item.title);
                    setReportType(item.report_type);
                    // setSelectedOption(item.title);
                  }}
                >
                  <div className="text-neutral-800 w-full text-left">
                    <p>{item.title}</p>
                  </div>
                  <div className="flex items-center">
                    <MdOutlineNavigateNext fill="#ccc" size={20} />
                  </div>
                </section>
              );
            })}
          </main>
        </section>
      )}

      {getReportOption !== '' && getReportOption && (
        <section className="w-full">
          <header className="w-full flex justify-between border-b-[0.5px] py-2 border-neutral-300  ">
            <BiArrowBack
              className="text-neutral-400 cursor-pointer text-lg "
              onClick={() => {
                setReportDetail('');
              }}
            />

            <h1 className="font-bold text-base text-neutral-900">Laporkan</h1>

            <RxCross1
              className="text-neutral-400 cursor-pointer text-lg"
              onClick={() => {
                setOptionOpen(false);
                setReportDetail('');
              }}
            />
          </header>
          <main className="text-sm py-4 flex flex-col gap-4  items-center text-center">
            {/* <div className="w-fit p-3 bg-blue-200 flex justify-items-center rounded-full">
              <FaFlag color="RGB(37,99,235)" size={30} />
            </div> */}
            <div className="w-fit p-3 bg-blue-100 flex justify-items-center rounded-full">
              <FaFlag color="RGB(67, 167, 255)" size={30} />
            </div>
            <h1 className="font-bold text-neutral-900 mb-3">
              Ini adalah {getReportOption}
            </h1>
            <textarea
              name="report_detail"
              id="report_detail"
              placeholder="Ceritakan lebih detail di sini"
              className="h-[100px] w-full border-[0.5px] border-neutral-300 rounded-lg text-sm outline-none px-4 py-2"
              value={reportDetailValue}
              onChange={(e) => setReportDetailValue(e.target.value)}
            />
            <div className="w-full flex justify-end">
              <Button
                // disabled={!isValid}
                onClick={handleReport}
                type="submit"
                // className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-neutral-300 bg-[#106FA4] text-neutral-100 hover:opacity-75"
                className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-neutral-300 bg-sky-base text-neutral-100 hover:opacity-75"
              >
                {/* <h1>{isLoading ? 'Sedang Mengirim' : 'Kirim'} </h1> */}
                Lapor
              </Button>
            </div>
          </main>
        </section>
      )}
    </div>
  );
};
