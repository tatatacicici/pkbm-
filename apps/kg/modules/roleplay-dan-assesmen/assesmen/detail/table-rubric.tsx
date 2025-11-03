import { useSubmitSelfScoringSession } from '@kampus-gratis/apps/kg/hooks/asesmen/hook';
import {
  TAssesmenSessionData,
  TAssesmenSessionDetail,
  TSelfScoringItem,
} from '@kampus-gratis/apps/kg/types/asesmen';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';

const RubricTable = ({ data }: { data: TAssesmenSessionData }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { session_id } = useParams();
  const [formData, setFormData] = useState<TSelfScoringItem[]>(
    data.scores.competencies.map((competency) => ({
      competency_id: competency.id,
      score_id: null,
      note: '',
    }))
  );
  const { mutate, isLoading } = useSubmitSelfScoringSession(
    session_id as string
  );

  const handleScoreChange = (competencyIndex: number, scoreId: string) => {
    setFormData((prevData) =>
      prevData.map((item, index) =>
        index === competencyIndex ? { ...item, score_id: scoreId } : item
      )
    );
  };

  const handleNoteChange = (competencyIndex: number, note: string) => {
    setFormData((prevData) =>
      prevData.map((item, index) =>
        index === competencyIndex ? { ...item, note } : item
      )
    );
  };

  const handleNext = () => {
    if (currentIndex < data.scores.competencies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const payload = {
      scores: formData,
    };

    try {
      mutate(payload, {
        onSuccess: (data) => {
          toast.success(data.message);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message || 'Gagal mengumpulkan assesmen'
          );
        },
      });
    } catch (error) {
      toast.error('Terjadi kesalahan');
    }
    toast.dismiss();
  };

  const currentCompetency = data.scores?.competencies[currentIndex];

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-max py-2">
            <div className="overflow-hidden rounded-xl border border-neutral-400/70">
              <table className="min-w-full w-[3000px] text-center text-sm font-light table-auto">
                <thead className="border-b border-neutral-400/70 font-medium">
                  <tr className="text-white bg-[#6b7b8c]">
                    <th
                      scope="col"
                      rowSpan={2}
                      className="border-e border-neutral-400/70 px-6 py-4"
                    >
                      Kompetensi
                    </th>
                    <th
                      rowSpan={2}
                      scope="col"
                      className="border-e border-neutral-400/70 px-6 py-4"
                    >
                      Deskripsi
                    </th>
                    <th
                      scope="col"
                      colSpan={4}
                      className="border-e border-b border-neutral-400/70 px-6 py-4"
                    >
                      Kurang (1 - 4)
                    </th>
                    <th
                      scope="col"
                      colSpan={2}
                      className="border-e border-b border-neutral-400/70 px-6 py-4"
                    >
                      Cukup (5 - 6)
                    </th>
                    <th
                      scope="col"
                      colSpan={2}
                      className="border-e border-b border-neutral-400/70 px-6 py-4"
                    >
                      Baik (7 - 8)
                    </th>
                    <th
                      scope="col"
                      colSpan={2}
                      className="border-e border-b border-neutral-400/70 px-6 py-4"
                    >
                      Sangat Baik (9 - 10)
                    </th>
                    <th
                      rowSpan={2}
                      scope="col"
                      className="border-e border-neutral-400/70 px-6 py-4"
                    >
                      Kelemahan Ybs, Rekomendasi Perbaikan
                    </th>
                  </tr>
                  <tr>
                    {currentCompetency?.details.map(
                      (item: TAssesmenSessionDetail, index: number) => (
                        <th
                          key={index}
                          scope="col"
                          className={`border-e border-neutral-400/70 px-6 py-4 cursor-pointer transition ${
                            formData[currentIndex].score_id === item.id
                              ? 'bg-primary-600 text-white'
                              : ' hover:bg-gray-100 '
                          }`}
                          onClick={() =>
                            handleScoreChange(currentIndex, item.id)
                          }
                        >
                          {item.score}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                {data.scores ? (
                  <tbody key={currentIndex}>
                    <tr className="border-b border-neutral-400/70">
                      <td className="border-e border-neutral-400/70 px-6 py-4">
                        {currentCompetency.aspect}
                      </td>
                      <td className="border-e border-neutral-400/70 px-6 py-4">
                        {currentCompetency.description}
                      </td>
                      {currentCompetency.details.map((detail, index) => (
                        <td
                          key={index}
                          colSpan={1}
                          className="border-e border-neutral-400/70 px-6 py-4"
                        >
                          {detail.description}
                        </td>
                      ))}
                      <td className="align-top">
                        <textarea
                          className="w-full p-2 outline-none border-none resize-none"
                          name="note"
                          rows={6}
                          placeholder="Ketik rekomendasi perbaikan disini..."
                          value={formData[currentIndex].note}
                          onChange={(e) =>
                            handleNoteChange(currentIndex, e.target.value)
                          }
                        ></textarea>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr className="border-b border-neutral-400/70">
                      <td
                        className="border-e border-neutral-400/70 px-6 py-20 "
                        colSpan={13}
                      >
                        <p className="text-center font-semibold text-md">
                          Kamu belum bisa menilai rubrik, Silahkan unggah video
                          dan dokumen terlebih dahulu.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

      {data.scores ? (
        <div className="flex justify-between mt-2">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-4 py-2 bg-[#6b7b8c] text-white rounded-lg flex items-center gap-2 disabled:opacity-50 
            ${currentIndex === 0 ? 'invisible' : ''}`}
          >
            <FaArrowLeft />
            Sebelumnya
          </button>

          {currentIndex < data.scores.competencies.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-base text-white rounded-lg flex items-center gap-2"
            >
              Selanjutnya
              <FaArrowRight />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-[150px] justify-center py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoadingButton />
              ) : (
                <>
                  Kumpulkan
                  <FaCircleCheck />
                </>
              )}
            </button>
          )}
        </div>
      ) : null}
    </>
  );
};

export default RubricTable;
