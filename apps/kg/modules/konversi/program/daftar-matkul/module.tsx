import { BreadCrumb, Search } from '@kampus-gratis/components/atoms';
import { BaseLayout } from '../../../../components';
import TableMatkul from './table-matkul';
import FooterCredit from '../../../../components/footer/footer-credit/footer-credit';

const ProgramKonversiBreadcrumb = [
  { name: 'Beranda', link: '/beranda' },
  { name: 'Konversi SKS', link: '/konversi' },
  { name: 'Program Konversi', link: '/konversi/program' },
  { name: 'Daftar Mata Kuliah', link: '/konversi/daftar-mata-kuliah' },
];

const DaftarMatkulKonversiModule = () => {
  return (
    <BaseLayout>
      <main className="bg-neutral-100">
        <div className="max-w-[1440px] mx-auto md:min-h-screen h-full ">
          <BreadCrumb items={ProgramKonversiBreadcrumb} />
          <div className="mt-10 px-4 md:px-12 lg:px-16">
            <section className="w-full rounded-lg p-6 mb-5 bg-primary-100 font-medium flex flex-col gap-2">
              <p>
                1. Pastikan Mata kuliah sudah sesuai dengan yang akan di
                Konversi
              </p>
              <p>
                2. Mata Kuliah yang ditampilkan pada tabel adalah mata kuliah
                yang sudah di selesaikan
              </p>
              <p>
                3. Hanya Mata kuliah yang lulus yang dapat di Transfer Konversi
                SKS
              </p>
            </section>
            <section className="bg-white p-5">
              <h1 className="px-1 font-semibold text-2xl">
                Daftar Mata Kuliah
              </h1>
              <p className="px-1 text-neutral-500 font-normal text-sm mt-2">
                Pilih 1 atau lebih Mata kuliah yang akan di Konversi
              </p>
              <div className="w-2/5 my-5">
                <Search placeholder="Cari disini" />
              </div>
              <TableMatkul />
            </section>
          </div>
        </div>
        <FooterCredit />
      </main>
    </BaseLayout>
  );
};

export default DaftarMatkulKonversiModule;
