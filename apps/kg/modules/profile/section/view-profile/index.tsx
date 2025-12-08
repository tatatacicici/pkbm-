import Image from 'next/image';
import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';
import { AiTwotoneLike } from 'react-icons/ai';
import {
  BsBuildingsFill,
  BsClockFill,
  BsDot,
  BsFillChatLeftFill,
} from 'react-icons/bs';
import { useProfile, useProfileComplete } from '../../../../hooks/profile/hook';
// import { useProfile } from "../profile-edit/hooks";

export const ViewProfileModule: FC = (): ReactElement => {
  const { data } = useProfile();
  const { data: completeData } = useProfileComplete();
  const userData = data?.data?.user;

  return (
    <main className="bg-neutral-50 p-8 rounded-md shadow-sm">
      {/* Hero Section */}
      <section className="relative w-full">
        <figure className="w-full min-h-[260px] bg-neutral-200 rounded-md shadow-sm"></figure>
        <figure className="w-[120px] h-[120px] rounded-full bg-neutral-300 border-4 border-neutral-50 absolute -bottom-12 left-0">
          {completeData?.data?.avatar !== null ? (
            <Image
              src={completeData?.data?.avatar || '/default-user.png'}
              width={0}
              height={0}
              alt="Profile"
              quality={100}
              style={{
                width: '100%',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              sizes="100vw"
              className="rounded-full object-cover"
            />
          ) : (
            <Avatar
              name={userData?.full_name || 'a'}
              color="#F26800"
              className="min-w-[120px] min-h-[120px]"
              round
            />
          )}
        </figure>
      </section>
      {/* Profile Info */}
      <section className="w-full pl-2 mt-16">
        <div className="flex flex-wrap justify-between w-full">
          <span className="text-base font-bold text-neutral-800 capitalize">
            {userData?.full_name}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-0 capitalize">
          {completeData?.data?.faculty &&
            completeData?.data?.faculty !== 'none' && (
              <>
                <span className="text-base text-neutral-600">
                  Paket {completeData?.data?.faculty}
                </span>
              </>
            )}
          {/* {completeData?.data?.major !== 'UNENROLLED' && (
            <>
              <BsDot className="hidden sm:block text-2xl text-version2-400" />
              <span className="text-base text-neutral-600">
                Paket {completeData?.data?.major}
              </span>
            </>
          )} */}
        </div>
      </section>
      {/* Profile Stats */}
      <main className="grid w-full grid-cols-1 gap-4 pt-6 pl-2 md:grid-cols-2">
        <div className="flex items-center gap-5 border border-blue-400 rounded-md px-6 py-4 shadow-sm text-blue-500 bg-gradient-to-r from-blue-200/50 to-blue-100 font-bold">
          <AiTwotoneLike className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Jumlah like yang didapat</h1>
            <p>{completeData?.data?.discussion_likes}</p>
          </section>
        </div>
        <div className="flex items-center gap-5 border border-yellow-400 rounded-md px-6 py-4 shadow-sm text-yellow-500 bg-gradient-to-r from-yellow-200/50 to-yellow-100 font-bold">
          <BsFillChatLeftFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Jumlah Diskusi</h1>
            <p>{completeData?.data?.discussion_posted}</p>
          </section>
        </div>
        <div className="flex items-center gap-5 border border-green-400 rounded-md px-6 py-4 shadow-sm text-green-500 bg-gradient-to-r from-green-200/50 to-green-100 font-bold">
          <BsClockFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Nilai Rata-rata</h1>
            <p>{completeData?.data?.ipk}</p>
          </section>
        </div>
        <div className="flex items-center gap-5 border border-red-400 rounded-md px-6 py-4 shadow-sm text-red-500 bg-gradient-to-r from-red-200/50 to-red-100 font-bold">
          <BsBuildingsFill className="text-4xl" />
          <section className="flex flex-col gap-1">
            <h1>Sertifikat</h1>
            <p>{completeData?.data?.total_certificates}</p>
          </section>
        </div>
      </main>
    </main>
  );
};
