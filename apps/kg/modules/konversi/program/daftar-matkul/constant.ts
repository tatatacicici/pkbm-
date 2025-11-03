export const TableHeader = [
  'No',
  'Mata Kuliah',
  'Jumlah Pertemuan',
  'Semester',
  'Total SKS',
  'Status',
  'Nilai Akhir',
  'Detail',
];

export const TableBody = [
  ...Array.from({ length: 15 }, (_, i) => ({
    no: i + 1,
    mata_kuliah: `Mata Kuliah ${i + 1}`,
    jumlah_pertemuan: 16,
    semester: 1,
    total_sks: 20,
    status: i < 7 ? 'Lulus' : 'Mengulang',
    nilai_akhir: 'A',
  })),
];
