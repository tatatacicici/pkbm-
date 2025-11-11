export const TableHeader = [
  'No',
  'Kode Mata Kuliah',
  'Nama Mata Kuliah',
  'SKS',
  'Nama Mata Kuliah Asal',
  'SKS Asal',
  'Nilai Akhir',
  'Form Evaluasi Diri',
  'Status Evaluasi Diri',
  'Action',
];

export const TableBody = [
  //generate 5 row
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    kode: 'KU001',
    nama_matkul: 'Bahasa Indonesia',
    sks: 2,
    nama_matkul_asal: 'Bahasa Indonesia',
    sks_asal: 2,
    nilai_akhir: 'A',
    //local image path from apps/kg/modules/konversi/evaluasi/table/icons/index.ts (imported above)
    form_evaluasi_diri: '/icons/konversi/eye.svg',
    //randomize status sudah atau belum
    status_evaluasi_diri: Math.random() >= 0.5 ? 'sudah' : 'belum',
    action: '/icons/konversi/delete.svg',
  })),
];
