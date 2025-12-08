'use client';

import {
  useDataMajorContract,
  useMajorContract,
} from '../../../hooks/study-plan/hook';
import { FC, ReactElement, useEffect } from 'react';
import { NotEnrolled } from './not-enrolled';
import { Enrolled } from './enrolled';

type Props = {
  id: string;
};

export const SubmissionContractStudy: FC<Props> = ({ id }): ReactElement => {
  const { setMajorContractData } = useDataMajorContract();
  const { data } = useMajorContract(id);

  useEffect(() => {
    if (data) {
      setMajorContractData(data?.data);
    }
  }, [data, setMajorContractData]);

  return (
    <main className="py-2 px-6 md:px-14 lg:px-16 bg-neutral-50 min-h-[150vh] w-full overflow-hidden">
      {!data?.data?.studentTakenMajor && <NotEnrolled id={id} />}
      {data?.data?.studentTakenMajor && <Enrolled id={id} />}
    </main>
  );
};
