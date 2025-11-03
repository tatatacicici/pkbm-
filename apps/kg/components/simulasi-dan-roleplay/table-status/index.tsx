export default function TableStatus() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Status Penyerahan</h3>
      <table className="w-full text-sm border-collapse mx-auto [&>tr>*]:p-6 [&>*]:border-b [&>*]:border-gray-300 [&>tr>*:last-child]:w-[70%] [&>tr>*:first-child]:font-semibold">
        <tr>
          <td>Status Penyerahan</td>
          <td>Belum Mengumpulkan</td>
        </tr>
        <tr>
          <td>Status Penilaian</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Tenggat Waktu</td>
          <td>10 Agustus 2021</td>
        </tr>
        <tr>
          <td>Waktu Tersisa</td>
          <td>10 Hari</td>
        </tr>
        <tr>
          <td>Terakhir Diubah</td>
          <td>10 Agustus 2021</td>
        </tr>
        <tr>
          <td>Deskripsi</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Penyerahan Tugas</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  );
}
