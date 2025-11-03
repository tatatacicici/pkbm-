import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';

export const LaporanDanBantuanSection: FC = () => {
  return (
    <main className="bg-white px-8 pt-8 pb-14 rounded-md shadow-sm min-h-[60vh]">
      <div className="pb-4 mb-8 border-b-2 border-b-neutral-200 flex items-center justify-between">
        <span className="text-xl font-bold text-neutral-800 flex items-center">
          <FaTicket className="mr-2" />
          Bantuan dan Laporan
        </span>
        <button className="bg-blue-base text-white px-4 py-2 rounded-md flex items-center hover:bg-opacity-90 transition-colors duration-200">
          <FaPlus className="mr-2" />
          Buat Bantuan atau Laporan
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="border shadow-sm rounded-lg overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm caption-bottom">
              <thead className="bg-gray-50">
                <tr className="border-b transition-colors hover:bg-gray-100">
                  <th className="h-12 px-4 text-left font-medium text-gray-600">
                    Isu
                  </th>
                  <th className="h-12 px-4 text-left font-medium text-gray-600">
                    Subjek
                  </th>
                  <th className="h-12 px-4 text-left font-medium text-gray-600 hidden md:table-cell">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left font-medium text-gray-600">
                    Dibuat
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr:last-child]:border-0">
                {[
                  {
                    issue: '#3210',
                    subject: 'Website tidak dapat dimuat',
                    status: 'Dilaporkan',
                    created: '2024-04-15',
                  },
                  {
                    issue: '#3209',
                    subject: 'Proses checkout tidak berfungsi',
                    status: 'Fixed',
                    created: '2024-04-12',
                  },
                  {
                    issue: '#3204',
                    subject: 'Harga produk tidak tepat',
                    status: 'Dilaporkan',
                    created: '2024-04-05',
                  },
                  {
                    issue: '#3203',
                    subject: 'Alamat pengiriman tidak tersimpan',
                    status: 'Fixed',
                    created: '2024-03-30',
                  },
                  {
                    issue: '#3202',
                    subject: 'Kode kupon tidak berfungsi',
                    status: 'Fixed',
                    created: '2024-03-25',
                  },
                  {
                    issue: '#3201',
                    subject: 'Tidak dapat masuk',
                    status: 'Dilaporkan',
                    created: '2024-03-20',
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b transition-colors hover:bg-gray-100 cursor-pointer"
                  >
                    <td className="p-4 font-medium">{row.issue}</td>
                    <td className="p-4">{row.subject}</td>
                    <td className="p-4 hidden md:table-cell">
                      <div
                        className={`inline-flex w-full items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          row.status === 'Dilaporkan'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-green-500 text-white'
                        } transition-colors`}
                      >
                        <p className="text-center w-full">{row.status}</p>
                      </div>
                    </td>
                    <td className="p-4 text-left">{row.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
