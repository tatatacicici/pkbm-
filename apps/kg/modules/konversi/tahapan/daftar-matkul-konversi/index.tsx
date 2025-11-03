import { FC, ReactElement } from 'react';
import TableComponent from './table';

export const DaftarMatkulKonversiModule: FC = (): ReactElement => {
  return (
    <div className="w-full bg-neutral-50 h-full ">
      <div className="bg-neutral-100 rounded-lg p-[10px]">
        <TableComponent />
      </div>
    </div>
  );
};
