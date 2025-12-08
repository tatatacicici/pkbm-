export const TableHeader = [
  'No',
  'Kode Mata Kuliah',
  'Nama Mata Kuliah',
  'SKS',
  'Ajukan Konversi',
  'Nama Mata Kuliah Asal',
  'SKS Asal',
  'Nilai Akhir',
];

export const TableBody = [
  //generate 5 row
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    kode: 'KU001',
    nama_matkul: 'Bahasa Indonesia',
    sks: 2,
    nama_matkul_asal: 'Bahasa Indonesia',
    ajukan_konversi: false,
    sks_asal: 2,
    nilai_akhir: 'A',
  })),
];
