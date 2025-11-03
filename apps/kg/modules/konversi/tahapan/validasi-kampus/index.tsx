import { Combobox } from '@headlessui/react';
import {
  Button,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import {
  queryJurusanAsal,
  queryPerguruanAsal,
  queryProdiAsal,
} from '../../../../recoil/atoms/validasi-kampus';
import {
  filterJurusanAsal,
  filterPerguruanAsal,
  filterProdiAsal,
} from '../../../../recoil/selectors/validasi-kampus';
import { FC, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLeftArrowAlt, BiSave } from 'react-icons/bi';
import { useRecoilState, useRecoilValue } from 'recoil';

export const ValidasiKampusModule: FC = (): ReactElement => {
  const [queryPerguruan, setQueryPerguruan] =
    useRecoilState(queryPerguruanAsal);
  const [queryProdi, setQueryProdi] = useRecoilState(queryProdiAsal);
  const [queryJurusan, setQueryJurusan] = useRecoilState(queryJurusanAsal);
  const getSemuaPerguruanAsal = useRecoilValue(filterPerguruanAsal);
  const getSemuaProdiAsal = useRecoilValue(filterProdiAsal);
  const getSemuaJurusanAsal = useRecoilValue(filterJurusanAsal);
  const [selectedGlobalPerguruan, setSelectedGlobalPerguruan] = useState('');
  const [selectedGlobalProdi, setSelectedGlobalProdi] = useState('');
  const [selectedGlobalJurusan, setSelectedGlobalJurusan] = useState('');

  const { control } = useForm();

  return (
    <div className="  w-full mt-8 pb-[249px] flex flex-col justify-center items-center ">
      <div className="w-2/3 mx-8 rounded-md relative border-8 border-neutral-100">
        <div className="bg-blue-base py-6 text-center rounded-t-md">
          <h1 className="text-white text-xl font-bold ">
            Validasi Perguruan Tinggi Asal
          </h1>
        </div>
        <form action="">
          <div className="p-10">
            <div className="flex flex-col gap-y-4 pb-2">
              <label htmlFor="" className="font-bold">
                Nama Perguruan Tinggi Asal{' '}
                <span className="text-red-500">*</span>
              </label>
              <Combobox
                value={selectedGlobalPerguruan}
                onChange={setSelectedGlobalPerguruan}
              >
                <div
                  className={
                    'w-full flex bg-white h-[56px] pl-2 focus:outline-none rounded-[8px] border-2'
                  }
                >
                  <Combobox.Input
                    onChange={(event) => setQueryPerguruan(event.target.value)}
                    value={queryPerguruan}
                    placeholder="-- Pilih Perguruan Tinggi --"
                    className={'w-full ml-3 bg-white focus:outline-none'}
                    required
                  />
                  <div className="flex items-center justify-item-center me-4">
                    <AiOutlineSearch className="text-2xl  text-neutral-400" />
                  </div>
                </div>

                <Combobox.Options
                  className={
                    'w-full max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-lg border-2 rounded-md px-2'
                  }
                >
                  <div className="bg-neutral-100 rounded-[8px]">
                    {getSemuaPerguruanAsal.map((dummy: any, i: any) => (
                      <Combobox.Option
                        key={i}
                        value={dummy.title}
                        className={
                          'py-3 block z-10 hover:bg-[#D3E8F4] bg-white font-normal pl-6 text-black rounded-[8px] text-[14px] hover:cursor-pointer'
                        }
                        onClick={() => setQueryPerguruan(dummy.title)}
                      >
                        {dummy.title}
                      </Combobox.Option>
                    ))}
                  </div>
                </Combobox.Options>
              </Combobox>
            </div>
            <div className="flex flex-col gap-y-4 py-4">
              <label htmlFor="" className="font-bold">
                Program Studi Asal <span className="text-red-500">*</span>
              </label>
              <Combobox
                value={selectedGlobalProdi}
                onChange={setSelectedGlobalProdi}
              >
                <div
                  className={
                    'w-full flex bg-white h-[56px] pl-2 focus:outline-none rounded-[8px] border-2'
                  }
                >
                  <Combobox.Input
                    onChange={(event) => setQueryProdi(event.target.value)}
                    value={queryProdi}
                    placeholder="-- Pilih Program Studi --"
                    className={'w-full ml-3 bg-white focus:outline-none'}
                    required
                  />
                  <div className="flex items-center justify-item-center me-4">
                    <AiOutlineSearch className="text-2xl  text-neutral-400" />
                  </div>
                </div>

                <Combobox.Options
                  className={
                    'w-full max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-lg border-2 rounded-md px-2'
                  }
                >
                  <div className="bg-neutral-100 rounded-[8px]">
                    {getSemuaProdiAsal.map((dummy: any, i: any) => (
                      <Combobox.Option
                        key={i}
                        value={dummy.title}
                        className={
                          'py-3 block z-10 hover:bg-[#D3E8F4] bg-white font-normal pl-6 text-black rounded-[8px] text-[14px] hover:cursor-pointer'
                        }
                        onClick={() => setQueryProdi(dummy.title)}
                      >
                        {dummy.title}
                      </Combobox.Option>
                    ))}
                  </div>
                </Combobox.Options>
              </Combobox>
            </div>
            <div className="flex flex-col gap-y-4 py-4">
              <label htmlFor="" className="font-bold">
                Jurusan Asal <span className="text-red-500">*</span>
              </label>
              <Combobox
                value={selectedGlobalJurusan}
                onChange={setSelectedGlobalJurusan}
              >
                <div
                  className={
                    'w-full flex bg-white h-[56px] pl-2 focus:outline-none rounded-[8px] border-2'
                  }
                >
                  <Combobox.Input
                    onChange={(event) => setQueryJurusan(event.target.value)}
                    value={queryJurusan}
                    placeholder="-- Pilih Jurusan --"
                    className={'w-full ml-3 bg-white focus:outline-none'}
                    required
                  />
                  <div className="flex items-center justify-item-center me-4">
                    <AiOutlineSearch className="text-2xl  text-neutral-400" />
                  </div>
                </div>

                <Combobox.Options
                  className={
                    'w-full max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-lg border-2 rounded-md px-2'
                  }
                >
                  <div className="bg-neutral-100 rounded-[8px]">
                    {getSemuaJurusanAsal.map((dummy: any, i: any) => (
                      <Combobox.Option
                        key={i}
                        value={dummy.title}
                        className={
                          'py-3 block z-10 hover:bg-[#D3E8F4] bg-white font-normal pl-6 text-black rounded-[8px] text-[14px] hover:cursor-pointer'
                        }
                        onClick={() => setQueryJurusan(dummy.title)}
                      >
                        {dummy.title}
                      </Combobox.Option>
                    ))}
                  </div>
                </Combobox.Options>
              </Combobox>
            </div>
            <div className="flex gap-x-2 justify-between w-full">
              <TextField
                name="nim"
                label="NIM Asal"
                required
                variant="md"
                control={control}
                className="w-full"
              />
              <TextField
                name="ipk"
                label="IPK Asal"
                required
                variant="md"
                control={control}
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-y-4 w-full">
              <SelectField
                name="fakultas"
                label="Fakultas Yang Akan di ambil di Paket-C Gratis"
                required
                control={control}
                className="w-full"
                options={[
                  { value: 'Fakultas Teknik', label: 'Fakultas Teknik' },
                  { value: 'Fakultas Ekonomi', label: 'Fakultas Ekonomi' },
                  {
                    value: 'Fakultas Kedokteran',
                    label: 'Fakultas Kedokteran',
                  },
                ]}
                variant="md"
                placeholder="Pilih"
              />
              <SelectField
                name="prodi"
                label="Program Studi Yang Akan di ambil di Paket-C Gratis"
                required
                control={control}
                className="w-full"
                options={[
                  {
                    value: 'S1 (Sistem Informasi)',
                    label: 'S1 (Sistem Informasi)',
                  },
                  {
                    value: 'S2 (Manajemen Bisnis)',
                    label: 'S2 (Manajemen Bisnis)',
                  },
                  {
                    value: 'S3 (Kedokteran Umum)',
                    label: 'S3 (Kedokteran Umum)',
                  },
                ]}
                variant="md"
                placeholder="Pilih"
              />
            </div>
            <div className="flex gap-x-4 pt-4 w-full justify-center">
              <Button
                type="button"
                className="bg-white border-2 font-semibold py-2 border-blue-base px-10 text-blue-base rounded-md flex items-center justify-center gap-x-2"
              >
                <BiLeftArrowAlt size={20} />
                Kembali
              </Button>
              <Button
                type="button"
                className="bg-blue-base font-semibold py-2 px-4 text-white rounded-md flex items-center justify-center gap-x-2"
              >
                <BiSave size={20} />
                Simpan dan Lanjut
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
