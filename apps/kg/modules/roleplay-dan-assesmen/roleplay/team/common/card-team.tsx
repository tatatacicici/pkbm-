import { useJoinRoleplayTeam } from '@kampus-gratis/apps/kg/hooks/roleplay/hook';
import {
  TRoleplayMemberItem,
  TRoleplayScheduleItem,
} from '@kampus-gratis/apps/kg/types/roleplay';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ModalConfirmation from '../../../common/modal-confirmation';
import SelectMember from './select-member';

export default function CardTeam({
  id,
  number,
  status,
  members,
  schedules,
  created_at,
}: {
  id: string;
  number: string;
  status: string;
  members: TRoleplayMemberItem[];
  schedules: TRoleplayScheduleItem[];
  created_at: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const router = useRouter();
  const { roleplayId } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useJoinRoleplayTeam(roleplayId as string);

  const onSubmit = () => {
    const payload = {
      team_id: id,
      schedule_id: selectedSchedule,
    };
    try {
      mutate(payload, {
        onSuccess: (data) => {
          toast.success(data.message);
          queryClient.invalidateQueries(['roleplay-team', roleplayId]);
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message || 'Gagal bergabung dengan tim'
          );
          setIsOpen(false);
        },
      });
    } catch (error) {
      toast.error('Terjadi kesalahan');
    }
    toast.dismiss();
  };

  return (
    <>
      <div className="border rounded-xl flex gap-4 w-full px-4 py-6">
        <div className="w-full">
          <p className="font-medium">Tim Roleplay 1</p>
          <div className="space-y-2 py-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SelectMember
                disable={true}
                key={index}
                text={`Anggota ${index + 1}`}
                placeholder={members[index]?.full_name || 'Tersedia'}
              />
            ))}
            {/* <div className="flex gap-2">
              <div className="flex w-full">
                <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                  <BsCalendar className="mr-2" />
                  Tanggal
                </div>
                <input
                  type="date"
                  className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex w-full">
                <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                  <BsCalendar className="mr-2" />
                  Waktu
                </div>
                <input
                  type="time"
                  className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
            </div> */}
            <p className="text-gray-500 text-sm">
              Pilih tanggal dan waktu untuk roleplay
            </p>
            <div className="flex gap-2">
              {schedules.map((schedule, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSchedule(schedule.id)}
                  className={`rounded-md px-4 py-2 text-center cursor-pointer w-max text-sm font-medium border border-blue-base text-blue-base ${
                    schedule.id === selectedSchedule
                      ? 'bg-blue-base text-white'
                      : 'hover:bg-gray-100 '
                  }`}
                >
                  {new Date(schedule.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {' - '}
                  {schedule.time.split(':').slice(0, 2).join(':')}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="px-6 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 hover:cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Gabung Tim
            </button>
          </div>
        </div>
      </div>
      <ModalConfirmation
        text="Apakah anda yakin ingin bergabung dengan tim ini?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={onSubmit}
        buttonText="Gabung Tim"
        isLoading={isLoading}
      />
    </>
  );
}
