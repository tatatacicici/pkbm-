import { TMyStudyV2Item } from '@kampus-gratis/apps/kg/types/mystudy-module';
import Image from 'next/image';
import { useEffect } from 'react';
import Search from '../../../../assets/drill-simulasi/search.svg';

export const SearchInput = ({
  data,
  setFilteredData,
}: {
  data: TMyStudyV2Item[];
  setFilteredData: (data: TMyStudyV2Item[]) => void;
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toLowerCase();
    const filtered = name
      ? data.filter((item: TMyStudyV2Item) =>
          item.name.toLowerCase().includes(name)
        )
      : data;
    setFilteredData(filtered);
  };

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#222529] h-[56px] my-5 rounded-[8px] text-black">
      <div className="flex gap-3 py-3">
        <Image
          src={Search}
          alt={'search'}
          width={28}
          className="ml-3"
          style={{
            width: 'auto',
            height: 'auto',
          }}
        />
        <input
          type={'text'}
          className="bg-transparent w-full focus:outline-none bg-[#F5F5F5]"
          placeholder="Cari Mata Pelajaran atau Pelatihan"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};
