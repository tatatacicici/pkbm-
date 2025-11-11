import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useParams } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { useAdministrationrById } from '../../../hooks/user/getAdministrationUser/hook';
import { IcRightArrow } from '../assets/ic-arrowright';

export const LihatBerkasModule: FC = (): ReactElement => {
  const genderOption = ['Laki-Laki', 'Perempuan'];

  const params = useParams();
  console.log(params);
  const { id } = params;
  const { data, isLoading } = useAdministrationrById(id);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col justify-center place-items-center py-5 gap-10">
          <div className="flex space-x-5 place-items-center w-full bg-primary-500 px-5 rounded py-2 text-white">
            <IcRightArrow />
            <p>Informasi Diri</p>
          </div>
          {!data?.data?.biodata ? (
            <h1 className="font-bold">Mahasiswa Belum Mengisi Biodata</h1>
          ) : (
            <div className="bg-white w-full h-full shadow-lg">
              <div className="flex flex-col gap-10 px-3 py-3">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="font-semibold">
                      Nama lengkap <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={
                        data?.data?.biodata
                          ? data?.data?.biodata?.full_name
                          : ('Belum Mengisi Biodata' as string)
                      }
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Alamat Email<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.user?.email as string}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Jenis Kelamin<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={
                        data?.data?.biodata?.gender == 'MALE'
                          ? 'Laki-Laki'
                          : 'Perempuan'
                      }
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Nomor Handphone<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={
                        data?.data?.biodata
                          ? data?.data?.biodata?.phone_number
                          : 'Belum Mengisi Biodata'
                      }
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Tempat Lahir<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={
                        data?.data?.biodata
                          ? data?.data?.biodata?.birthplace
                          : 'Belum Mengisi Biodata'
                      }
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Tanggal Lahir<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={
                        data?.data?.biodata
                          ? data?.data?.biodata?.birthdate.slice(0, 10)
                          : 'Belum Mengisi Biodata'
                      }
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Alamat Lengkap<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.address}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Pendidikan Terakhir
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.last_education}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">NIM atau NPM</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.nim}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Universitas Asal</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.university}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Program Studi</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.major}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Semester</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.biodata?.semester}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex space-x-5 place-items-center w-full bg-primary-500 px-5 rounded py-2 text-white">
            <IcRightArrow />
            <p>Informasi Pekerjaan</p>
          </div>
          {!data?.data?.familial ? (
            <h1 className="font-bold">
              Mahasiswa Belum Mengisi Informasi Pekerjaan
            </h1>
          ) : (
            <div className="bg-white w-full h-full shadow-lg">
              <div className="flex flex-col gap-10 px-3 py-3">
                <div className="grid grid-cols-3 gap-10">
                  <div>
                    <p className="font-semibold">
                      Name Ayah<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.father_name}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Pekerjaan Ayah<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.father_occupation.replace(
                        /_/,
                        ' '
                      )}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Penghasilan Ayah
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.father_salary}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Name Ibu<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.mother_name}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Pekerjaan Ibu<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.mother_occupation}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Penghasilan Ibu<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.mother_salary}
                      disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="font-semibold">
                      Pekerjaan Pribadi
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.self_occupation}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Penghasilan Pribadi
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.self_salary}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Tinggal Dengan<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.live_with}
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Biaya Hidup Selama Kuliah Ditanggung Oleh
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      value={data?.data?.familial?.tuition_payer}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-5 place-items-center w-full bg-primary-500 px-5 rounded py-2 text-white">
            <IcRightArrow />
            <p>Pemberkasan</p>
          </div>
          {!data?.data?.file ? (
            <>
              <h1 className="font-bold">Mahasiswa Belum Mengisi Berkas</h1>
            </>
          ) : (
            <div className="bg-white w-full h-full shadow-lg">
              <div className="flex flex-col gap-10 px-3 py-3">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="font-semibold">
                      Kartu Tanda Penduduk (KTP)
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Pas Foto<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Ijasah Terakhir<span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Transkrip Nilai Terbaru
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Kartu Keluarga (KK)
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Surat Rekomendasi
                      <span className="text-warning-500">*</span>
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="w-full py-2 px-2 border-2 rounded"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
