export const TryOutBreadcrumb = [
  {
    name: 'Beranda',
    link: '/Beranda',
  },
  {
    name: 'Try Out',
    link: '/try-out',
  },
];

// Data Dummy untuk List Try Out
export const dummyDataListTryOut = [
  // TPS (Tes Potensi Skolastik)
  {
    id: '1',
    subject_code: 'TPS1625',
    name: 'Kemampuan Penalaran Umum',
    category: 'Tes Potensi Skolastik',
    thumbnail: '/images/try-out/tps-kemampuan-penalaran-umum.png',
    teacher_name: 'Bu Siti Aminah',
    current_session: 1,
    student_count: 172,
    session_count: 10,
    progress_percentage: 20,
  },
  {
    id: '2',
    subject_code: 'TPS2625',
    name: 'Pengetahuan & Pemahaman Umum',
    category: 'Mata Pelajaran',
    thumbnail: '/images/try-out/tps-pengetahuan-pemahaman-umum.png',
    teacher_name: 'Pak Budi Santoso',
    current_session: 1,
    student_count: 163,
    session_count: 10,
    progress_percentage: 40,
  },
  {
    id: '3',
    subject_code: 'TPS3625',
    name: 'Kemampuan Memahami Bacaan & Menulis',
    category: 'Mata Pelajaran',
    thumbnail: '/images/try-out/tps-kemampuan-memahami-bacaan-menulis.png',
    teacher_name: 'Bu Rina Wati',
    current_session: 1,
    student_count: 157,
    session_count: 10,
    progress_percentage: 60,
  },
  {
    id: '4',
    subject_code: 'TPS4625',
    name: 'Pengetahuan Kuantitatif',
    category: 'Mata Pelajaran',
    thumbnail: '/images/try-out/tps-pengetahuan-kuantitatif.png',
    teacher_name: 'Bu Mega Lestari',
    current_session: 1,
    student_count: 169,
    session_count: 10,
    progress_percentage: 80,
  },

  // TL (Tes Literasi)
  {
    id: '5',
    subject_code: 'TL5625',
    name: 'Literasi Bahasa Indonesia',
    category: 'Tes Literasi',
    thumbnail: '/images/try-out/tl-literasi-bahasa-indonesia.png',
    teacher_name: 'Pak Dimas Hartono',
    current_session: 1,
    student_count: 178,
    session_count: 10,
    progress_percentage: 100,
  },
  {
    id: '6',
    subject_code: 'TL6625',
    name: 'Literasi Bahasa Inggris',
    category: 'Tes Literasi',
    thumbnail: '/images/try-out/tl-literasi-bahasa-inggris.png',
    teacher_name: 'Bu Ratna Prameswari',
    current_session: 1,
    student_count: 143,
    session_count: 10,
    progress_percentage: 100,
  },
  {
    id: '7',
    subject_code: 'TL7625',
    name: 'Penalaran Matematika',
    category: 'Tes Literasi',
    thumbnail: '/images/try-out/tl-penalaran-matematika.png',
    teacher_name: 'Pak Fajar Nugroho',
    current_session: 1,
    student_count: 165,
    session_count: 10,
    progress_percentage: 100,
  },
];

export const quizTryoutInfoDummyData = [
  {
    id: 1,
    display_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    session_no: 1,
    display_session_no: '550e8400-e29b-41d4-a716-446655440000',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Kemampuan Penalaran Umum',
      total_questions: 30,
      question_point: 3.33,
      passing_score: 30 * 3.33 * 0.7,
      duration: 1800,
      remaining_attempts: 3,
    },
  },
  {
    id: 2,
    display_id: '7f9c2ba0-0b55-4f12-871d-27b5b1e4d2f3',
    session_no: 1,
    display_session_no: 'a1e81cb6-c2be-48cb-bf37-01d3f1222cfa',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Pengetahuan & Pemahaman Umum',
      total_questions: 20,
      question_point: 5,
      passing_score: 20 * 5 * 0.7,
      duration: 900,
      remaining_attempts: 3,
    },
  },
  {
    id: 3,
    display_id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
    session_no: 1,
    display_session_no: '2a3d2b21-6bd7-49a4-9f4b-78123cf7d66e',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Kemampuan Memahami Bacaan & Menulis',
      total_questions: 20,
      question_point: 5,
      passing_score: 20 * 5 * 0.7,
      duration: 1500,
      remaining_attempts: 3,
    },
  },
  {
    id: 4,
    display_id: '1b4e28ba-2fa1-11d2-883f-0016d3cca427',
    session_no: 1,
    display_session_no: '42f10771-e430-4e16-8d3d-4c26436b2f6e',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Pengetahuan Kuantitatif',
      total_questions: 20,
      question_point: 5,
      passing_score: 20 * 5 * 0.7,
      duration: 1200,
      remaining_attempts: 3,
    },
  },
  {
    id: 5,
    display_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    session_no: 1,
    display_session_no: '3b1c90f1-c963-496e-b5a7-5a7f88843731',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Literasi Bahasa Indonesia',
      total_questions: 30,
      question_point: 3.33,
      passing_score: 30 * 3.33 * 0.7,
      duration: 2700,
      remaining_attempts: 3,
    },
  },
  {
    id: 6,
    display_id: '16fd2706-8baf-433b-82eb-8c7fada847da',
    session_no: 1,
    display_session_no: 'b234d51c-8725-4b56-a8e7-fc1b6a5e470e',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Literasi Bahasa Inggris',
      total_questions: 20,
      question_point: 5,
      passing_score: 20 * 5 * 0.7,
      duration: 1800,
      remaining_attempts: 3,
    },
  },
  {
    id: 7,
    display_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    session_no: 1,
    display_session_no: 'fa0b6d8e-7c60-464f-9c83-3b4d2b2d1ae2',
    quiz: {
      title: 'Try Out',
      categoryQuiz: 'Penalaran Matematika',
      total_questions: 20,
      question_point: 5,
      passing_score: 20 * 5 * 0.7,
      duration: 1800,
      remaining_attempts: 3,
    },
  },
];

export const quizTryoutTakeDummyData = [
  // 1. Soal Quiz Try Out TPS - Kemampuan Penalaran Umum
  {
    id: 1,
    display_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    data: {
      id: 'tryout-quiz',
      duration: 1800,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Dalam sebuah studi, peningkatan suhu rata-rata global sebesar 1,5°C selama 50 tahun terakhir menyebabkan peningkatan frekuensi bencana alam seperti banjir dan kekeringan di berbagai wilayah. Dampak ini mengakibatkan kerugian ekonomi dan mengganggu ketahanan pangan. Jika tren ini berlanjut, apa akibat yang paling mungkin terjadi?',
          answers: [
            {
              id: 'a1',
              answer:
                'Frekuensi bencana alam menurun dan ketahanan pangan membaik.',
              correct: false,
            },
            {
              id: 'a2',
              answer:
                'Dampak negatif terhadap ekonomi dan pangan semakin meluas.',
              correct: true,
            }, // Benar
            {
              id: 'a3',
              answer: 'Suhu global tidak berpengaruh pada bencana alam.',
              correct: false,
            },
            {
              id: 'a4',
              answer: 'Kerugian ekonomi menjadi lebih kecil akibat adaptasi.',
              correct: false,
            },
            {
              id: 'a5',
              answer: 'Frekuensi bencana tetap stabil meskipun suhu naik.',
              correct: false,
            },
          ],
        },
        {
          id: 'q2',
          question:
            'Survei nasional menemukan bahwa anak-anak yang rutin melakukan aktivitas fisik minimal 30 menit per hari memiliki indeks massa tubuh (IMT) lebih sehat daripada yang jarang berolahraga, meskipun pola makan dan genetik juga berperan. Pernyataan mana yang paling tepat?',
          answers: [
            {
              id: 'b1',
              answer: 'Aktivitas fisik tidak berhubungan dengan IMT.',
              correct: false,
            },
            {
              id: 'b2',
              answer: 'Pola makan lebih penting daripada aktivitas fisik.',
              correct: false,
            },
            {
              id: 'b3',
              answer:
                'Aktivitas fisik signifikan berkontribusi pada IMT sehat meski faktor lain juga berperan.',
              correct: true,
            }, // Benar
            {
              id: 'b4',
              answer: 'Anak yang jarang olahraga pasti sehat.',
              correct: false,
            },
            {
              id: 'b5',
              answer: 'Genetik tidak mempengaruhi IMT.',
              correct: false,
            },
          ],
        },
        {
          id: 'q3',
          question:
            'Perusahaan teknologi yang menerapkan kerja fleksibel selama pandemi mencatat peningkatan produktivitas karyawan sebesar 20%, tetapi juga adanya tantangan komunikasi antar tim. Apa implikasi kebijakan ini?',
          answers: [
            {
              id: 'c1',
              answer: 'Produktivitas menurun dan komunikasi membaik.',
              correct: false,
            },
            {
              id: 'c2',
              answer:
                'Produktivitas meningkat tapi komunikasi mengalami tantangan.',
              correct: true,
            }, // Benar
            {
              id: 'c3',
              answer: 'Produktivitas dan komunikasi sama-sama memburuk.',
              correct: false,
            },
            {
              id: 'c4',
              answer: 'Produktivitas dan komunikasi tidak terpengaruh.',
              correct: false,
            },
            {
              id: 'c5',
              answer: 'Komunikasi lebih baik tanpa mempengaruhi produktivitas.',
              correct: false,
            },
          ],
        },
        {
          id: 'q4',
          question:
            'Data menunjukkan daerah dengan akses pendidikan lebih baik cenderung memiliki pengangguran rendah dan ekonomi stabil, sedangkan daerah dengan akses pendidikan terbatas menghadapi kemiskinan. Apa hubungan utama antara akses pendidikan dan kondisi ekonomi?',
          answers: [
            {
              id: 'd1',
              answer: 'Akses pendidikan tidak berpengaruh pada ekonomi.',
              correct: false,
            },
            {
              id: 'd2',
              answer:
                'Pendidikan berperan penting dalam menurunkan pengangguran dan stabilitas ekonomi.',
              correct: true,
            }, // Benar
            {
              id: 'd3',
              answer: 'Kemiskinan tidak terkait pendidikan.',
              correct: false,
            },
            {
              id: 'd4',
              answer: 'Daerah tanpa pendidikan bagus justru lebih makmur.',
              correct: false,
            },
            {
              id: 'd5',
              answer: 'Pertumbuhan ekonomi tidak bergantung pada pendidikan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q5',
          question:
            'Penelitian menunjukkan bahwa penggunaan plastik sekali pakai berlebihan berkontribusi pada pencemaran laut, dan negara yang mengurangi penggunaan plastik mengalami penurunan volume sampah laut. Kesimpulan yang tepat dari penelitian ini adalah?',
          answers: [
            {
              id: 'e1',
              answer: 'Pengurangan plastik tidak mempengaruhi pencemaran laut.',
              correct: false,
            },
            {
              id: 'e2',
              answer: 'Pengurangan plastik efektif menurunkan pencemaran laut.',
              correct: true,
            }, // Benar
            {
              id: 'e3',
              answer: 'Sampah laut tidak terkait plastik.',
              correct: false,
            },
            {
              id: 'e4',
              answer: 'Pengurangan plastik meningkatkan pencemaran.',
              correct: false,
            },
            {
              id: 'e5',
              answer: 'Sampah laut bertambah walau plastik dikurangi.',
              correct: false,
            },
          ],
        },
        {
          id: 'q6',
          question:
            'Sebuah riset medis menunjukkan vaksin X meningkatkan tingkat kekebalan sebesar 85% pada populasi dewasa. Meski demikian, ada sebagian kecil yang mengalami efek samping ringan. Apa pernyataan paling tepat terkait vaksin ini?',
          answers: [
            {
              id: 'f1',
              answer: 'Vaksin X tidak efektif meningkatkan kekebalan.',
              correct: false,
            },
            {
              id: 'f2',
              answer:
                'Sebagian besar dewasa memperoleh kekebalan dengan risiko efek samping ringan.',
              correct: true,
            }, // Benar
            {
              id: 'f3',
              answer: 'Semua orang mengalami efek samping parah.',
              correct: false,
            },
            {
              id: 'f4',
              answer: 'Vaksin X tidak direkomendasikan.',
              correct: false,
            },
            {
              id: 'f5',
              answer: 'Efek samping vaksin lebih besar daripada manfaatnya.',
              correct: false,
            },
          ],
        },
        {
          id: 'q7',
          question:
            'Statistik menunjukkan bahwa penggunaan transportasi umum selama 5 tahun terakhir menurun, namun tingkat kemacetan di kota meningkat. Apa kemungkinan sebab-akibat yang benar?',
          answers: [
            {
              id: 'g1',
              answer:
                'Penurunan transportasi umum menyebabkan kemacetan meningkat.',
              correct: true,
            }, // Benar
            {
              id: 'g2',
              answer: 'Transportasi umum dan kemacetan tidak terkait.',
              correct: false,
            },
            {
              id: 'g3',
              answer: 'Kemacetan menurun karena transportasi umum menurun.',
              correct: false,
            },
            {
              id: 'g4',
              answer: 'Transportasi umum meningkat menyebabkan kemacetan.',
              correct: false,
            },
            {
              id: 'g5',
              answer: 'Kemacetan tidak dipengaruhi oleh transportasi.',
              correct: false,
            },
          ],
        },
        {
          id: 'q8',
          question:
            'Penelitian menunjukkan bahwa sekolah dengan fasilitas olahraga lengkap memiliki tingkat prestasi akademik lebih tinggi dibandingkan sekolah tanpa fasilitas tersebut. Apa hubungan paling tepat?',
          answers: [
            {
              id: 'h1',
              answer:
                'Fasilitas olahraga tidak berpengaruh pada prestasi akademik.',
              correct: false,
            },
            {
              id: 'h2',
              answer:
                'Fasilitas olahraga berkontribusi positif terhadap prestasi akademik.',
              correct: true,
            }, // Benar
            {
              id: 'h3',
              answer: 'Prestasi akademik menurun dengan fasilitas olahraga.',
              correct: false,
            },
            {
              id: 'h4',
              answer: 'Sekolah tanpa fasilitas olahraga lebih unggul.',
              correct: false,
            },
            {
              id: 'h5',
              answer: 'Fasilitas olahraga menyebabkan penurunan fokus belajar.',
              correct: false,
            },
          ],
        },
        {
          id: 'q9',
          question:
            'Sebuah studi mengamati bahwa konsumsi gula berlebih dapat meningkatkan risiko diabetes tipe 2. Namun, faktor genetika dan gaya hidup juga mempengaruhi risiko ini. Pernyataan yang paling tepat?',
          answers: [
            {
              id: 'i1',
              answer: 'Konsumsi gula tidak berpengaruh pada diabetes.',
              correct: false,
            },
            {
              id: 'i2',
              answer: 'Konsumsi gula adalah salah satu faktor risiko diabetes.',
              correct: true,
            }, // Benar
            {
              id: 'i3',
              answer: 'Genetika tidak mempengaruhi diabetes.',
              correct: false,
            },
            {
              id: 'i4',
              answer: 'Gaya hidup tidak terkait risiko diabetes.',
              correct: false,
            },
            {
              id: 'i5',
              answer: 'Diabetes tidak berhubungan dengan faktor apapun.',
              correct: false,
            },
          ],
        },
        {
          id: 'q10',
          question:
            'Sebuah survei menunjukkan bahwa orang yang membaca minimal 30 menit per hari memiliki kemampuan berpikir kritis lebih baik. Apa kesimpulan yang logis?',
          answers: [
            {
              id: 'j1',
              answer: 'Membaca tidak ada hubungannya dengan berpikir kritis.',
              correct: false,
            },
            {
              id: 'j2',
              answer:
                'Membaca membantu meningkatkan kemampuan berpikir kritis.',
              correct: true,
            }, // Benar
            {
              id: 'j3',
              answer: 'Berpikir kritis tidak penting.',
              correct: false,
            },
            {
              id: 'j4',
              answer: 'Orang yang tidak membaca pasti kritis.',
              correct: false,
            },
            {
              id: 'j5',
              answer: 'Kemampuan berpikir kritis menurun dengan membaca.',
              correct: false,
            },
          ],
        },
        {
          id: 'q11',
          question:
            'Premis: Semua makhluk hidup membutuhkan air untuk bertahan hidup. Kucing adalah makhluk hidup. Berdasarkan premis tersebut, mana pernyataan yang paling tepat?',
          answers: [
            {
              id: 'k1',
              answer: 'Kucing tidak memerlukan air untuk hidup.',
              correct: false,
            },
            {
              id: 'k2',
              answer: 'Hanya sebagian kucing membutuhkan air.',
              correct: false,
            },
            { id: 'k3', answer: 'Kucing bukan makhluk hidup.', correct: false },
            {
              id: 'k4',
              answer: 'Air tidak berpengaruh pada kucing.',
              correct: false,
            },
            {
              id: 'k5',
              answer: 'Kucing membutuhkan air untuk bertahan hidup.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q12',
          question:
            'Premis: Jika seorang siswa mengikuti semua ujian, maka siswa tersebut berhak mendapatkan sertifikat kelulusan. Deni tidak mengikuti salah satu ujian. Apa simpulan yang dapat diambil?',
          answers: [
            {
              id: 'l1',
              answer: 'Deni tidak berhak mendapatkan sertifikat.',
              correct: true,
            }, // Benar
            {
              id: 'l2',
              answer: 'Deni berhak mendapatkan sertifikat.',
              correct: false,
            },
            { id: 'l3', answer: 'Deni sudah lulus.', correct: false },
            {
              id: 'l4',
              answer: 'Semua siswa yang tidak ikut ujian lulus.',
              correct: false,
            },
            {
              id: 'l5',
              answer: 'Sertifikat diberikan tanpa ujian.',
              correct: false,
            },
          ],
        },
        {
          id: 'q13',
          question:
            'Premis: Semua burung memiliki sayap. Beberapa burung tidak bisa terbang. Mana pernyataan yang benar?',
          answers: [
            { id: 'm1', answer: 'Semua burung bisa terbang.', correct: false },
            {
              id: 'm2',
              answer: 'Semua burung tidak punya sayap.',
              correct: false,
            },
            {
              id: 'm3',
              answer: 'Beberapa burung memiliki sayap tapi tidak bisa terbang.',
              correct: true,
            }, // Benar
            {
              id: 'm4',
              answer: 'Tidak ada burung yang memiliki sayap.',
              correct: false,
            },
            {
              id: 'm5',
              answer: 'Semua burung tidak bisa terbang.',
              correct: false,
            },
          ],
        },
        {
          id: 'q14',
          question:
            'Premis: Jika sebuah kendaraan adalah mobil listrik, maka kendaraan tersebut ramah lingkungan. Sedan A adalah kendaraan listrik. Apa yang dapat disimpulkan?',
          answers: [
            {
              id: 'n1',
              answer: 'Sedan A tidak ramah lingkungan.',
              correct: false,
            },
            {
              id: 'n2',
              answer: 'Semua kendaraan tidak ramah lingkungan.',
              correct: false,
            },
            {
              id: 'n3',
              answer: 'Sedan A bukan kendaraan listrik.',
              correct: false,
            },
            {
              id: 'n4',
              answer: 'Sedan A adalah kendaraan ramah lingkungan.',
              correct: true,
            }, // Benar
            { id: 'n5', answer: 'Sedan A tidak bergerak.', correct: false },
          ],
        },
        {
          id: 'q15',
          question:
            'Premis: Semua mahasiswa yang lulus ujian akhir berhak mengikuti wisuda. Budi adalah mahasiswa yang tidak mengikuti ujian akhir. Apa simpulan yang tepat?',
          answers: [
            {
              id: 'o1',
              answer: 'Budi berhak mengikuti wisuda.',
              correct: false,
            },
            {
              id: 'o2',
              answer: 'Budi tidak berhak mengikuti wisuda.',
              correct: true,
            }, // Benar
            { id: 'o3', answer: 'Budi sudah lulus.', correct: false },
            {
              id: 'o4',
              answer: 'Semua mahasiswa yang tidak ikut ujian lulus.',
              correct: false,
            },
            {
              id: 'o5',
              answer: 'Wisuda tidak berhubungan dengan ujian.',
              correct: false,
            },
          ],
        },
        {
          id: 'q16',
          question:
            'Premis: Semua pohon berfotosintesis. Pohon mangga adalah pohon. Apa yang bisa disimpulkan?',
          answers: [
            {
              id: 'p1',
              answer: 'Pohon mangga tidak berfotosintesis.',
              correct: false,
            },
            {
              id: 'p2',
              answer: 'Semua pohon mangga tidak pohon.',
              correct: false,
            },
            {
              id: 'p3',
              answer: 'Pohon mangga bukan makhluk hidup.',
              correct: false,
            },
            {
              id: 'p4',
              answer: 'Pohon mangga berfotosintesis.',
              correct: true,
            }, // Benar
            {
              id: 'p5',
              answer: 'Pohon mangga tidak berhubungan dengan fotosintesis.',
              correct: false,
            },
          ],
        },
        {
          id: 'q17',
          question:
            'Premis: Jika seseorang rajin belajar, maka dia akan mendapat nilai baik. Ani rajin belajar. Apa kesimpulannya?',
          answers: [
            {
              id: 'q1',
              answer: 'Ani tidak akan mendapat nilai baik.',
              correct: false,
            },
            { id: 'q3', answer: 'Ani tidak rajin belajar.', correct: false },
            {
              id: 'q4',
              answer: 'Semua orang mendapat nilai baik.',
              correct: false,
            },
            {
              id: 'q5',
              answer: 'Rajin belajar tidak berpengaruh pada nilai.',
              correct: false,
            },
            { id: 'q2', answer: 'Ani mendapat nilai baik.', correct: true }, // Benar
          ],
        },
        {
          id: 'q18',
          question:
            'Premis: Semua ikan hidup di air. Ikan paus adalah ikan. Apa yang dapat disimpulkan?',
          answers: [
            { id: 'r1', answer: 'Ikan paus hidup di air.', correct: true }, // Benar
            {
              id: 'r2',
              answer: 'Ikan paus tidak hidup di air.',
              correct: false,
            },
            { id: 'r3', answer: 'Ikan paus bukan ikan.', correct: false },
            {
              id: 'r4',
              answer: 'Semua ikan tidak hidup di air.',
              correct: false,
            },
            { id: 'r5', answer: 'Ikan paus adalah mamalia.', correct: false },
          ],
        },
        {
          id: 'q19',
          question:
            'Premis: Jika hujan turun, maka jalan menjadi basah. Hujan turun hari ini. Apa yang terjadi?',
          answers: [
            { id: 's1', answer: 'Jalan tetap kering.', correct: false },
            { id: 's2', answer: 'Tidak hujan hari ini.', correct: false },
            { id: 's3', answer: 'Jalan basah tanpa hujan.', correct: false },
            { id: 's4', answer: 'Jalan menjadi basah.', correct: true }, // Benar
            {
              id: 's5',
              answer: 'Hujan tidak mempengaruhi jalan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q20',
          question:
            'Premis: Semua burung bisa terbang. Elang adalah burung. Apa yang bisa disimpulkan?',
          answers: [
            { id: 't1', answer: 'Elang tidak bisa terbang.', correct: false },
            { id: 't2', answer: 'Elang bukan burung.', correct: false },
            { id: 't3', answer: 'Elang bisa terbang.', correct: true }, // Benar
            {
              id: 't4',
              answer: 'Semua burung tidak bisa terbang.',
              correct: false,
            },
            { id: 't5', answer: 'Elang adalah ikan.', correct: false },
          ],
        },
        {
          id: 'q21',
          question:
            'Premis: Jika kendaraan memiliki empat roda, maka itu mobil. Kendaraan ini memiliki empat roda. Apa kesimpulannya?',
          answers: [
            { id: 'u1', answer: 'Kendaraan ini bukan mobil.', correct: false },
            {
              id: 'u2',
              answer: 'Kendaraan ini tidak memiliki roda.',
              correct: false,
            },
            {
              id: 'u3',
              answer: 'Semua kendaraan memiliki empat roda.',
              correct: false,
            },
            { id: 'u4', answer: 'Kendaraan ini adalah mobil.', correct: true }, // Benar
            { id: 'u5', answer: 'Mobil tidak memiliki roda.', correct: false },
          ],
        },
        {
          id: 'q22',
          question:
            'Premis: Semua siswa yang lulus ujian dapat mengikuti lomba. Beni lulus ujian. Apa yang bisa disimpulkan?',
          answers: [
            {
              id: 'v1',
              answer: 'Beni tidak dapat mengikuti lomba.',
              correct: false,
            },
            { id: 'v2', answer: 'Beni tidak lulus ujian.', correct: false },
            {
              id: 'v3',
              answer: 'Semua siswa tidak lulus ujian.',
              correct: false,
            },
            { id: 'v4', answer: 'Beni dapat mengikuti lomba.', correct: true }, // Benar
            {
              id: 'v5',
              answer: 'Lomba tidak berhubungan dengan ujian.',
              correct: false,
            },
          ],
        },
        {
          id: 'q23',
          question:
            'Premis: Jika seseorang bekerja keras, maka dia akan sukses. Rina tidak bekerja keras. Apa simpulan yang tepat?',
          answers: [
            { id: 'w1', answer: 'Rina pasti sukses.', correct: false },
            { id: 'w2', answer: 'Rina tidak akan sukses.', correct: false },
            {
              id: 'w4',
              answer: 'Semua yang tidak bekerja keras gagal.',
              correct: false,
            },
            {
              id: 'w5',
              answer: 'Kerja keras tidak berpengaruh pada sukses.',
              correct: false,
            },
            {
              id: 'w3',
              answer: 'Tidak bisa dipastikan Rina sukses atau tidak.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q24',
          question:
            'Premis: Semua bunga berwarna merah. Mawar adalah bunga. Apa yang bisa disimpulkan?',
          answers: [
            { id: 'x1', answer: 'Mawar tidak berwarna merah.', correct: false },
            { id: 'x2', answer: 'Mawar bukan bunga.', correct: false },
            { id: 'x3', answer: 'Mawar berwarna merah.', correct: true }, // Benar
            {
              id: 'x4',
              answer: 'Semua bunga tidak berwarna merah.',
              correct: false,
            },
            { id: 'x5', answer: 'Bunga berwarna biru.', correct: false },
          ],
        },
        {
          id: 'q25',
          question:
            'Premis: Jika ada petir, maka listrik padam. Ada petir malam ini. Apa yang terjadi?',
          answers: [
            { id: 'y1', answer: 'Listrik menyala.', correct: false },
            { id: 'y2', answer: 'Tidak ada petir.', correct: false },
            { id: 'y3', answer: 'Listrik padam tanpa petir.', correct: false },
            {
              id: 'y4',
              answer: 'Petir tidak berpengaruh pada listrik.',
              correct: false,
            },
            { id: 'y5', answer: 'Listrik padam.', correct: true }, // Benar
          ],
        },
        {
          id: 'q26',
          question:
            'Premis: Semua kucing memiliki cakar. Kucing hitam adalah kucing. Apa yang dapat disimpulkan?',
          answers: [
            {
              id: 'z1',
              answer: 'Kucing hitam tidak memiliki cakar.',
              correct: false,
            },
            { id: 'z2', answer: 'Kucing hitam bukan kucing.', correct: false },
            {
              id: 'z3',
              answer: 'Semua kucing tidak memiliki cakar.',
              correct: false,
            },
            { id: 'z4', answer: 'Kucing hitam memiliki cakar.', correct: true }, // Benar
            { id: 'z5', answer: 'Kucing hitam adalah anjing.', correct: false },
          ],
        },
        {
          id: 'q27',
          question:
            'Premis: Jika suhu udara turun, maka es akan mencair. Suhu udara turun. Apa yang dapat disimpulkan?',
          answers: [
            { id: 'aa1', answer: 'Es akan mencair.', correct: false },
            { id: 'aa2', answer: 'Es tetap beku.', correct: true }, // Benar
            { id: 'aa3', answer: 'Suhu udara naik.', correct: false },
            {
              id: 'aa4',
              answer: 'Es mencair tanpa suhu turun.',
              correct: false,
            },
            {
              id: 'aa5',
              answer: 'Suhu udara tidak berpengaruh pada es.',
              correct: false,
            },
          ],
        },
        {
          id: 'q28',
          question:
            'Premis: Semua manusia adalah makhluk hidup. Budi adalah manusia. Apa simpulan yang benar?',
          answers: [
            { id: 'bb1', answer: 'Budi bukan makhluk hidup.', correct: false },
            {
              id: 'bb2',
              answer: 'Semua manusia bukan makhluk hidup.',
              correct: false,
            },
            { id: 'bb3', answer: 'Budi adalah makhluk hidup.', correct: true }, // Benar
            {
              id: 'bb4',
              answer: 'Makhluk hidup bukan manusia.',
              correct: false,
            },
            { id: 'bb5', answer: 'Budi adalah hewan.', correct: false },
          ],
        },
        {
          id: 'q29',
          question:
            'Premis: Jika seseorang sehat, maka ia dapat berolahraga. Ani sehat. Apa kesimpulannya?',
          answers: [
            {
              id: 'cc1',
              answer: 'Ani tidak dapat berolahraga.',
              correct: false,
            },
            { id: 'cc2', answer: 'Ani tidak sehat.', correct: false },
            { id: 'cc3', answer: 'Semua orang tidak sehat.', correct: false },
            { id: 'cc4', answer: 'Ani dapat berolahraga.', correct: true }, // Benar
            {
              id: 'cc5',
              answer: 'Berolahraga tidak berhubungan dengan kesehatan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q30',
          question:
            'Premis: Semua ikan hidup di air. Paus adalah mamalia. Apa yang bisa disimpulkan?',
          answers: [
            { id: 'dd1', answer: 'Paus adalah ikan.', correct: false },
            { id: 'dd2', answer: 'Paus tidak hidup di air.', correct: false },
            {
              id: 'dd3',
              answer: 'Semua mamalia hidup di air.',
              correct: false,
            },
            {
              id: 'dd4',
              answer: 'Paus hidup di air tetapi bukan ikan.',
              correct: true,
            }, // Benar
            { id: 'dd5', answer: 'Paus bukan mamalia.', correct: false },
          ],
        },
      ],
    },
  },

  // 2. Soal Quiz Try Out TPS - Pengetahuan & Pemahaman Umum
  {
    id: 2,
    display_id: '7f9c2ba0-0b55-4f12-871d-27b5b1e4d2f3',
    data: {
      id: 'tryout-quiz',
      duration: 900,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Apa ide utama paragraf berikut?\n\n"Literasi media bertujuan agar generasi muda dapat melek teknologi. Dengan literasi media, generasi muda bisa memahami pemanfaatan media digital. Literasi media juga membantu mereka mengendalikan pengaruh media dalam kehidupan sehari-hari. Adanya internet dan media sosial menyebabkan penyebaran hoaks sangat mudah."',
          answers: [
            {
              id: 'ee1',
              answer: 'Fungsi literasi media bagi generasi muda',
              correct: false,
            },
            {
              id: 'ee2',
              answer: 'Literasi media melepaskan generasi muda dari hoaks',
              correct: false,
            },
            {
              id: 'ee3',
              answer: 'Literasi media membantu memahami media digital',
              correct: false,
            },
            {
              id: 'ee4',
              answer: 'Literasi media dan peran orang tua',
              correct: true,
            }, // Benar
            { id: 'ee5', answer: 'Adanya hoaks di internet', correct: false },
          ],
        },
        {
          id: 'q2',
          question:
            'Kata "mengendalikan" dalam kalimat "Literasi media juga membantu mereka mengendalikan pengaruh media" memiliki makna yang paling dekat dengan...',
          answers: [
            { id: 'ff1', answer: 'Mengawasi', correct: true }, // Benar
            { id: 'ff2', answer: 'Menguasai', correct: false },
            { id: 'ff3', answer: 'Menekan', correct: false },
            { id: 'ff4', answer: 'Menyaring', correct: false },
            { id: 'ff5', answer: 'Menolak', correct: false },
          ],
        },
        {
          id: 'q3',
          question:
            'Judul yang paling sesuai untuk paragraf tentang literasi media adalah...',
          answers: [
            { id: 'gg1', answer: 'Peran Literasi Media', correct: false },
            { id: 'gg2', answer: 'Fungsi Media Sosial', correct: false },
            {
              id: 'gg3',
              answer: 'Pentingnya Literasi Media bagi Anak',
              correct: true,
            }, // Benar
            { id: 'gg4', answer: 'Hoaks dan Generasi Muda', correct: false },
            {
              id: 'gg5',
              answer: 'Etika dalam Bermedia Sosial',
              correct: false,
            },
          ],
        },
        {
          id: 'q4',
          question:
            'Kalimat "Adanya internet dan media sosial menyebabkan penyebaran hoaks sangat mudah" menunjukkan hubungan antaride...',
          answers: [
            { id: 'hh1', answer: 'Penambahan', correct: false },
            { id: 'hh2', answer: 'Kontras', correct: false },
            { id: 'hh3', answer: 'Contoh', correct: false },
            { id: 'hh4', answer: 'Sebab-akibat', correct: true }, // Benar
            { id: 'hh5', answer: 'Penegasan', correct: false },
          ],
        },
        {
          id: 'q5',
          question:
            'Perhatikan kutipan berikut:\n\n"Seiring perkembangan teknologi, transaksi keuangan kini dapat dilakukan secara digital, tanpa perlu kehadiran fisik di bank. Meski efisien, ancaman kejahatan siber menjadi tantangan yang harus diantisipasi."\n\nGagasan utama paragraf tersebut adalah...',
          answers: [
            {
              id: 'ii1',
              answer: 'Perkembangan teknologi digital semakin pesat',
              correct: false,
            },
            {
              id: 'ii2',
              answer: 'Kemudahan dan risiko transaksi keuangan digital',
              correct: true,
            }, // Benar
            {
              id: 'ii3',
              answer: 'Kejahatan siber semakin meningkat',
              correct: false,
            },
            {
              id: 'ii4',
              answer: 'Bank mulai ditinggalkan masyarakat',
              correct: false,
            },
            {
              id: 'ii5',
              answer: 'Keuangan digital sulit digunakan',
              correct: false,
            },
          ],
        },
        {
          id: 'q6',
          question:
            'Makna kata "diantisipasi" pada kalimat "ancaman kejahatan siber menjadi tantangan yang harus diantisipasi" adalah...',
          answers: [
            { id: 'jj1', answer: 'Dihindari', correct: false },
            { id: 'jj2', answer: 'Diketahui', correct: false },
            { id: 'jj3', answer: 'Dipersiapkan sebelumnya', correct: true }, // Benar
            { id: 'jj4', answer: 'Diperhatikan', correct: false },
            { id: 'jj5', answer: 'Dilaksanakan', correct: false },
          ],
        },
        {
          id: 'q7',
          question: 'Judul yang paling sesuai untuk kutipan tersebut adalah...',
          answers: [
            {
              id: 'k1',
              answer: 'Transaksi Digital dan Ancaman Siber',
              correct: true,
            }, // Benar
            {
              id: 'kk2',
              answer: 'Bank Digital dan Layanan Fisik',
              correct: false,
            },
            {
              id: 'kk3',
              answer: 'Keunggulan Bank Konvensional',
              correct: false,
            },
            { id: 'kk4', answer: 'Transaksi di Masa Pandemi', correct: false },
            {
              id: 'kk5',
              answer: 'Pengaruh Teknologi terhadap Masyarakat',
              correct: false,
            },
          ],
        },
        {
          id: 'q8',
          question:
            'Hubungan antara dua kalimat pada paragraf tersebut menunjukkan...',
          answers: [
            { id: 'll1', answer: 'Sebab dan akibat', correct: false },
            { id: 'll2', answer: 'Perbandingan', correct: false },
            { id: 'll3', answer: 'Penegasan', correct: false },
            { id: 'll4', answer: 'Perulangan', correct: false },
            { id: 'll5', answer: 'Pertentangan', correct: true }, // Benar
          ],
        },
        {
          id: 'q9',
          question:
            'Perhatikan paragraf berikut:\n\n"Isu perubahan iklim semakin mendapat perhatian dunia. Berbagai negara telah menyepakati pengurangan emisi karbon sebagai langkah mitigasi. Namun, pelaksanaan kebijakan sering terhambat kepentingan ekonomi jangka pendek."\n\nIde pokok paragraf tersebut adalah...',
          answers: [
            {
              id: 'mm1',
              answer: 'Negara-negara fokus pada ekonomi jangka pendek',
              correct: false,
            },
            {
              id: 'mm2',
              answer: 'Perhatian dunia terhadap perubahan iklim',
              correct: true,
            }, // Benar
            {
              id: 'mm3',
              answer: 'Kesepakatan pengurangan emisi karbon',
              correct: false,
            },
            {
              id: 'mm4',
              answer: 'Kesulitan pelaksanaan kebijakan iklim',
              correct: false,
            },
            {
              id: 'mm5',
              answer: 'Emisi karbon terus meningkat',
              correct: false,
            },
          ],
        },
        {
          id: 'q10',
          question:
            'Makna kata "mitigasi" dalam konteks paragraf tersebut adalah...',
          answers: [
            { id: 'nn1', answer: 'Penghapusan', correct: false },
            { id: 'nn2', answer: 'Pencegahan', correct: false },
            { id: 'nn3', answer: 'Pemberantasan', correct: false },
            { id: 'nn4', answer: 'Peningkatan', correct: false },
            { id: 'nn5', answer: 'Peringanan', correct: true }, // Benar
          ],
        },
        {
          id: 'q11',
          question:
            'Simpulan yang paling tepat dari paragraf tersebut adalah...',
          answers: [
            {
              id: 'oo1',
              answer: 'Ekonomi lebih penting dari lingkungan',
              correct: false,
            },
            {
              id: 'oo2',
              answer: 'Negara gagal mengurangi emisi karbon',
              correct: false,
            },
            {
              id: 'oo3',
              answer: 'Kebijakan lingkungan belum diterapkan',
              correct: false,
            },
            {
              id: 'oo4',
              answer: 'Perubahan iklim menjadi isu global penting',
              correct: true,
            }, // Benar
            {
              id: 'oo5',
              answer: 'Semua negara menolak emisi karbon',
              correct: false,
            },
          ],
        },
        {
          id: 'q12',
          question:
            'Kalimat "pelaksanaan kebijakan sering terhambat kepentingan ekonomi jangka pendek" menunjukkan hubungan antaride...',
          answers: [
            { id: 'pp1', answer: 'Pertentangan', correct: true }, // Benar
            { id: 'pp2', answer: 'Penegasan', correct: false },
            { id: 'pp3', answer: 'Perulangan', correct: false },
            { id: 'pp4', answer: 'Perbandingan', correct: false },
            { id: 'pp5', answer: 'Klarifikasi', correct: false },
          ],
        },
        {
          id: 'q13',
          question:
            'Judul yang tepat untuk paragraf berikut:\n\n"Minat baca masyarakat Indonesia tergolong rendah. Berdasarkan data UNESCO, hanya satu dari seribu orang Indonesia yang gemar membaca. Hal ini berdampak pada rendahnya kemampuan literasi secara umum."',
          answers: [
            {
              id: 'qq1',
              answer: 'Pentingnya Perpustakaan Nasional',
              correct: false,
            },
            {
              id: 'qq2',
              answer: 'Data UNESCO tentang Pendidikan',
              correct: false,
            },
            {
              id: 'qq3',
              answer: 'Literasi di Negara Berkembang',
              correct: false,
            },
            {
              id: 'qq4',
              answer: 'Minat Baca dan Kemampuan Literasi',
              correct: true,
            }, // Benar
            {
              id: 'qq5',
              answer: 'Dampak Teknologi terhadap Literasi',
              correct: false,
            },
          ],
        },
        {
          id: 'q14',
          question:
            'Kata yang memiliki makna paling dekat dengan "gemar" dalam paragraf tersebut adalah...',
          answers: [
            { id: 'rr1', answer: 'Terpaksa', correct: false },
            { id: 'rr2', answer: 'Suka', correct: true }, // Benar
            { id: 'rr3', answer: 'Menolak', correct: false },
            { id: 'rr4', answer: 'Biasa saja', correct: false },
            { id: 'rr5', answer: 'Lalai', correct: false },
          ],
        },
        {
          id: 'q15',
          question: 'Simpulan terbaik dari paragraf tersebut adalah...',
          answers: [
            {
              id: 'ss1',
              answer: 'Orang Indonesia membaca buku karena terpaksa',
              correct: false,
            },
            {
              id: 'ss2',
              answer: 'UNESCO tidak mendukung pendidikan Indonesia',
              correct: false,
            },
            {
              id: 'ss3',
              answer: 'Masyarakat tidak suka buku pelajaran',
              correct: false,
            },
            {
              id: 'ss4',
              answer: 'Kemampuan literasi masyarakat Indonesia rendah',
              correct: true,
            }, // Benar
            {
              id: 'ss5',
              answer: 'Membaca bukan budaya Indonesia',
              correct: false,
            },
          ],
        },
        {
          id: 'q16',
          question:
            'Kalimat "hanya satu dari seribu orang Indonesia yang gemar membaca" menunjukkan hubungan ide...',
          answers: [
            { id: 'tt1', answer: 'Perbandingan', correct: false },
            { id: 'tt2', answer: 'Kuantifikasi', correct: true }, // Benar
            { id: 'tt3', answer: 'Pengulangan', correct: false },
            { id: 'tt4', answer: 'Pertentangan', correct: false },
            { id: 'tt5', answer: 'Penjelasan', correct: false },
          ],
        },
        {
          id: 'q17',
          question:
            'Gagasan utama paragraf berikut:\n\n"Pendidikan karakter menjadi sorotan utama dalam kurikulum merdeka. Tujuannya agar peserta didik tidak hanya unggul secara akademik, tetapi juga memiliki nilai moral yang baik."',
          answers: [
            {
              id: 'uu1',
              answer: 'Pendidikan karakter dalam kurikulum merdeka',
              correct: true,
            }, // Benar
            {
              id: 'uu2',
              answer: 'Kurikulum Merdeka berfokus pada akademik',
              correct: false,
            },
            {
              id: 'uu3',
              answer: 'Moral siswa harus diprioritaskan',
              correct: false,
            },
            {
              id: 'uu4',
              answer: 'Kurikulum baru mempersulit siswa',
              correct: false,
            },
            {
              id: 'uu5',
              answer: 'Nilai akademik lebih penting',
              correct: false,
            },
          ],
        },
        {
          id: 'q18',
          question: 'Makna kata "sorotan" dalam paragraf tersebut adalah...',
          answers: [
            { id: 'vv1', answer: 'Cacian', correct: false },
            { id: 'vv2', answer: 'Teguran', correct: false },
            { id: 'vv3', answer: 'Perhatian', correct: true }, // Benar
            { id: 'vv4', answer: 'Tekanan', correct: false },
            { id: 'vv5', answer: 'Kritikan', correct: false },
          ],
        },
        {
          id: 'q19',
          question: 'Judul paragraf di atas yang paling tepat adalah...',
          answers: [
            { id: 'ww1', answer: 'Pentingnya Nilai Akademik', correct: false },
            { id: 'ww2', answer: 'Karakter Siswa Menurun', correct: false },
            {
              id: 'ww4',
              answer: 'Kurikulum Lama Ditinggalkan',
              correct: false,
            },
            {
              id: 'ww3',
              answer: 'Kurikulum Merdeka dan Pendidikan Karakter',
              correct: true,
            }, // Benar
            { id: 'ww5', answer: 'Sekolah Berbasis Moral', correct: false },
          ],
        },
        {
          id: 'q20',
          question:
            'Kesimpulan dari paragraf tentang pendidikan karakter adalah...',
          answers: [
            {
              id: 'xx1',
              answer: 'Kurikulum merdeka hanya fokus akademik',
              correct: false,
            },
            {
              id: 'xx2',
              answer: 'Siswa tidak lagi belajar nilai-nilai moral',
              correct: false,
            },
            {
              id: 'xx3',
              answer: 'Kurikulum baru tidak efektif',
              correct: false,
            },
            {
              id: 'xx4',
              answer: 'Akademik tidak perlu diajarkan',
              correct: false,
            },
            {
              id: 'xx5',
              answer: 'Pendidikan karakter memperbaiki moral siswa',
              correct: true,
            }, // Benar
          ],
        },
      ],
    },
  },

  // 3. Soal Quiz Try Out TPS - Kemampuan Memahami Bacaan & Menulis
  {
    id: 3,
    display_id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
    data: {
      id: 'tryout-quiz',
      duration: 1500,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Apa gagasan utama paragraf berikut?\n\n“Teknologi digital telah membawa perubahan signifikan dalam pola komunikasi masyarakat modern. Berbagai platform media sosial memungkinkan interaksi yang cepat dan luas, namun juga memunculkan tantangan seperti penyebaran informasi palsu.”',
          answers: [
            {
              id: 'ma1',
              answer: 'Teknologi digital mempermudah komunikasi masyarakat.',
              correct: false,
            },
            {
              id: 'ma2',
              answer: 'Media sosial memiliki kelebihan dan tantangan.',
              correct: false,
            },
            {
              id: 'ma3',
              answer: 'Informasi palsu menjadi masalah dalam teknologi.',
              correct: false,
            },
            {
              id: 'ma4',
              answer:
                'Perubahan pola komunikasi disebabkan oleh teknologi digital.',
              correct: true,
            }, //Benar
            {
              id: 'ma5',
              answer: 'Platform media sosial meningkatkan interaksi cepat.',
              correct: false,
            },
          ],
        },
        {
          id: 'q2',
          question:
            'Perhatikan kalimat berikut:\n"Walaupun harga barang meningkat, permintaan pasar tetap stabil." \nKalimat tersebut menunjukkan hubungan ide...?',
          answers: [
            { id: 'mb1', answer: 'Sebab-akibat', correct: false },
            { id: 'mb2', answer: 'Perbandingan', correct: false },
            { id: 'mb3', answer: 'Kontras', correct: true }, //Benar
            { id: 'mb4', answer: 'Penjelasan', correct: false },
            { id: 'mb5', answer: 'Kesimpulan', correct: false },
          ],
        },
        {
          id: 'q3',
          question:
            'Teks berikut mengandung informasi tentang…\n\n“Pemanasan global disebabkan oleh peningkatan gas rumah kaca, yang memicu perubahan iklim drastis di berbagai wilayah.”\nApa informasi utama teks tersebut?',
          answers: [
            {
              id: 'mc1',
              answer: 'Pemanasan global menyebabkan perubahan iklim.',
              correct: false,
            },
            {
              id: 'mc2',
              answer: 'Gas rumah kaca adalah penyebab pemanasan global.',
              correct: true,
            }, //Benar
            {
              id: 'mc3',
              answer: 'Perubahan iklim terjadi di berbagai wilayah.',
              correct: false,
            },
            {
              id: 'mc4',
              answer: 'Peningkatan gas rumah kaca berdampak besar.',
              correct: false,
            },
            {
              id: 'mc5',
              answer: 'Pemanasan global adalah masalah lingkungan utama.',
              correct: false,
            },
          ],
        },
        {
          id: 'q4',
          question:
            'Kalimat manakah yang menggunakan tanda baca koma dengan tepat?',
          answers: [
            {
              id: 'md1',
              answer: 'Dia membeli buah apel, jeruk dan pisang.',
              correct: false,
            },
            {
              id: 'md2',
              answer: 'Buku itu tebal dan, sangat menarik.',
              correct: false,
            },
            {
              id: 'md3',
              answer: 'Mereka, berangkat pagi-pagi sekali.',
              correct: false,
            },
            {
              id: 'md4',
              answer: 'Saya suka kucing anjing dan kelinci.',
              correct: false,
            },
            {
              id: 'md5',
              answer: 'Saat hujan, saya tetap pergi ke sekolah.',
              correct: true,
            }, //Benar
          ],
        },
        {
          id: 'q5',
          question:
            'Kalimat berikut perlu diperbaiki tanda bacanya, pilih kalimat yang benar:\n“Kita harus belajar rajin,” ujar ibu.',
          answers: [
            {
              id: 'me1',
              answer: '“Kita harus belajar rajin,” ujar ibu.',
              correct: true,
            }, //Benar
            {
              id: 'me2',
              answer: '“Kita harus belajar rajin” ujar ibu.',
              correct: false,
            },
            {
              id: 'me3',
              answer: '“Kita harus belajar, rajin,” ujar ibu.',
              correct: false,
            },
            {
              id: 'me4',
              answer: '“Kita harus belajar rajin” ujar, ibu.',
              correct: false,
            },
            {
              id: 'me5',
              answer: '“Kita harus belajar rajin.” ujar ibu.',
              correct: false,
            },
          ],
        },
        {
          id: 'q6',
          question:
            'Bacalah kalimat berikut!\n“Dengan mengurangi penggunaan plastik, kita turut menjaga lingkungan.”\nMakna kalimat tersebut adalah...?',
          answers: [
            {
              id: 'mf1',
              answer:
                'Penggunaan plastik harus dihindari agar lingkungan aman.',
              correct: false,
            },
            {
              id: 'mf3',
              answer: 'Lingkungan akan terjaga dengan mengurangi plastik.',
              correct: false,
            },
            {
              id: 'mf4',
              answer: 'Kita wajib mengurangi plastik demi lingkungan.',
              correct: false,
            },
            {
              id: 'mf2',
              answer: 'Mengurangi plastik adalah cara menjaga lingkungan.',
              correct: true,
            }, //Benar
            {
              id: 'mf5',
              answer: 'Plastik berbahaya bagi lingkungan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q7',
          question:
            'Pernyataan berikut yang tepat tentang paragraf narasi adalah…',
          answers: [
            {
              id: 'mg1',
              answer: 'Menguraikan fakta secara objektif.',
              correct: false,
            },
            {
              id: 'mg2',
              answer: 'Menceritakan kejadian atau peristiwa.',
              correct: true,
            }, //Benar
            {
              id: 'mg3',
              answer: 'Menjelaskan prosedur tertentu.',
              correct: false,
            },
            {
              id: 'mg4',
              answer: 'Memberikan argumentasi tentang suatu hal.',
              correct: false,
            },
            {
              id: 'mg5',
              answer: 'Mengajak pembaca melakukan sesuatu.',
              correct: false,
            },
          ],
        },
        {
          id: 'q8',
          question:
            'Kalimat manakah yang paling tepat untuk menggantikan kata “berhasil” pada kalimat berikut:\n“Ia berhasil menyelesaikan tugas dengan cepat.”',
          answers: [
            { id: 'mh1', answer: 'Gagal', correct: false },
            { id: 'mh2', answer: 'Terburu-buru', correct: false },
            { id: 'mh3', answer: 'Tertunda', correct: false },
            { id: 'mh4', answer: 'Lambat', correct: false },
            { id: 'mh5', answer: 'Sukses', correct: true }, //Benar
          ],
        },
        {
          id: 'q9',
          question:
            'Perhatikan kalimat berikut!\n“Guru memberikan tugas, siswa mengerjakan dengan penuh semangat.”\nKalimat tersebut mengandung kesalahan...?',
          answers: [
            { id: 'mi1', answer: 'Penggunaan tanda baca', correct: true }, //Benar
            { id: 'mi2', answer: 'Struktur kalimat', correct: false },
            { id: 'mi3', answer: 'Pilihan kata', correct: false },
            { id: 'mi4', answer: 'Ejaan', correct: false },
            { id: 'mi5', answer: 'Gaya bahasa', correct: false },
          ],
        },
        {
          id: 'q10',
          question:
            'Bacalah kalimat ini!\n“Pembangunan berkelanjutan sangat penting untuk menjaga sumber daya alam.”\nKalimat tersebut menyatakan...?',
          answers: [
            {
              id: 'mj1',
              answer: 'Pembangunan harus dihindari demi alam.',
              correct: false,
            },
            {
              id: 'mj2',
              answer: 'Penting menjaga sumber daya alam melalui pembangunan.',
              correct: true,
            }, //Benar
            {
              id: 'mj3',
              answer: 'Sumber daya alam tidak perlu dijaga.',
              correct: false,
            },
            {
              id: 'mj4',
              answer: 'Pentingnya pembangunan untuk alam.',
              correct: false,
            },
            {
              id: 'mj5',
              answer: 'Pembangunan yang tidak berkelanjutan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q11',
          question:
            'Kalimat efektif yang tepat dari kalimat ini:\n“Dia melakukan pekerjaan itu dengan cara yang sangat baik dan terorganisir.”',
          answers: [
            {
              id: 'mk1',
              answer:
                'Dia mengerjakan tugas dengan sangat terorganisir dan baik.',
              correct: false,
            },
            {
              id: 'mk2',
              answer:
                'Dia melakukan pekerjaan dengan cara yang bagus dan rapi.',
              correct: false,
            },
            {
              id: 'mk3',
              answer: 'Dia melakukan pekerjaan sangat baik dan terorganisir.',
              correct: false,
            },
            {
              id: 'mk4',
              answer:
                'Dia melakukan pekerjaan itu dengan baik dan terorganisir.',
              correct: true,
            }, //Benar
            {
              id: 'mk5',
              answer:
                'Dia melakukan pekerjaan itu dengan baik sekali dan teratur.',
              correct: false,
            },
          ],
        },
        {
          id: 'q12',
          question:
            'Kalimat mana yang tidak tepat penggunaan konjungsi dalam kalimat berikut?',
          answers: [
            {
              id: 'ml1',
              answer: 'Ia datang ke sekolah karena hujan deras.',
              correct: false,
            },
            {
              id: 'ml2',
              answer: 'Saya ingin pergi, tetapi cuaca buruk.',
              correct: false,
            },
            {
              id: 'ml3',
              answer: 'Dia bermain bola dan menang lomba.',
              correct: false,
            },
            {
              id: 'ml4',
              answer: 'Kami belajar serta bermain dengan giat.',
              correct: false,
            },
            {
              id: 'ml5',
              answer: 'Dia terlambat, lalu dia pulang.',
              correct: true,
            }, //Benar
          ],
        },
        {
          id: 'q13',
          question:
            'Makna kata “intensif” dalam kalimat berikut:\n“Pelatihan itu berlangsung secara intensif selama tiga hari.”',
          answers: [
            { id: 'mm13', answer: 'Santai', correct: false },
            { id: 'mm12', answer: 'Singkat', correct: false },
            { id: 'mm13', answer: 'Mendalam', correct: true }, //Benar
            { id: 'mm14', answer: 'Terbatas', correct: false },
            { id: 'mm15', answer: 'Teratur', correct: false },
          ],
        },
        {
          id: 'q14',
          question:
            'Kalimat berikut perlu diperbaiki tanda baca. Pilih yang benar!\n“Aku suka makan, durian rambutan dan mangga.”',
          answers: [
            {
              id: 'mn1',
              answer: 'Aku suka makan durian, rambutan, dan mangga.',
              correct: true,
            }, //Benar
            {
              id: 'mn2',
              answer: 'Aku suka makan durian rambutan dan mangga.',
              correct: false,
            },
            {
              id: 'mn3',
              answer: 'Aku suka makan durian, rambutan dan mangga.',
              correct: false,
            },
            {
              id: 'mn4',
              answer: 'Aku suka makan durian rambutan, dan mangga.',
              correct: false,
            },
            {
              id: 'mn5',
              answer: 'Aku suka makan, durian, rambutan dan mangga.',
              correct: false,
            },
          ],
        },
        {
          id: 'q15',
          question: 'Kalimat berikut yang menggunakan kata baku adalah...',
          answers: [
            {
              id: 'mo1',
              answer: 'Dia menerima hadiah dari pemerintah.',
              correct: false,
            },
            {
              id: 'mo2',
              answer: 'Mereka pergi ke lapangan futsal.',
              correct: false,
            },
            {
              id: 'mo3',
              answer: 'Buku itu ada di perpustakaan.',
              correct: false,
            },
            {
              id: 'mo4',
              answer: 'Siswa akan berkunjung ke laboratorium.',
              correct: true,
            }, //Benar
            {
              id: 'mo5',
              answer: 'Kegiatan itu dilakukan di kampus.',
              correct: false,
            },
          ],
        },
        {
          id: 'q16',
          question:
            'Bacalah paragraf berikut!\n“Indonesia memiliki keanekaragaman hayati yang sangat kaya. Oleh karena itu, perlindungan terhadap flora dan fauna menjadi sangat penting untuk menjaga keseimbangan ekosistem.”\nApa yang menjadi alasan pentingnya perlindungan flora dan fauna?',
          answers: [
            {
              id: 'mp1',
              answer: 'Karena Indonesia memiliki banyak tanaman dan hewan.',
              correct: false,
            },
            {
              id: 'mp3',
              answer: 'Karena flora dan fauna sangat berharga.',
              correct: false,
            },
            {
              id: 'mp4',
              answer: 'Untuk menjaga keanekaragaman hayati.',
              correct: false,
            },
            {
              id: 'mp2',
              answer: 'Agar ekosistem tetap seimbang.',
              correct: true,
            }, //Benar
            {
              id: 'mp5',
              answer: 'Karena flora dan fauna dilindungi negara.',
              correct: false,
            },
          ],
        },
        {
          id: 'q17',
          question:
            'Makna ungkapan “besar kepala” dalam kalimat:\n“Sejak mendapat juara kelas, Andi menjadi besar kepala.” adalah...?',
          answers: [
            { id: 'mq2', answer: 'Menjadi sombong dan angkuh.', correct: true }, //Benar
            {
              id: 'mq1',
              answer: 'Memiliki kepala besar secara fisik.',
              correct: false,
            },
            {
              id: 'mq3',
              answer: 'Memiliki banyak pengetahuan.',
              correct: false,
            },
            { id: 'mq4', answer: 'Mudah tersinggung.', correct: false },
            { id: 'mq5', answer: 'Berpikir dewasa.', correct: false },
          ],
        },
        {
          id: 'q18',
          question: 'Manakah kalimat yang termasuk kalimat imperatif?',
          answers: [
            {
              id: 'mr1',
              answer: 'Dia sedang membaca buku di taman.',
              correct: false,
            },
            { id: 'mr2', answer: 'Apakah kamu sudah makan?', correct: false },
            { id: 'mr4', answer: 'Dia memang sangat rajin.', correct: false },
            {
              id: 'mr5',
              answer: 'Kucing itu tidur sepanjang hari.',
              correct: false,
            },
            { id: 'mr3', answer: 'Ayo kita belajar bersama!', correct: true }, //Benar
          ],
        },
        {
          id: 'q19',
          question:
            'Kalimat berikut menggunakan kata serapan dengan tepat, kecuali...',
          answers: [
            {
              id: 'ms1',
              answer: 'Seminar itu membahas masalah ekonomi global.',
              correct: false,
            },
            {
              id: 'ms2',
              answer: 'Dia sangat expert dalam bidangnya.',
              correct: true,
            }, //Benar
            {
              id: 'ms3',
              answer: 'Dia sedang mengikuti pelatihan intensif.',
              correct: false,
            },
            {
              id: 'ms4',
              answer: 'Pertemuan itu berlangsung secara formal.',
              correct: false,
            },
            {
              id: 'ms5',
              answer: 'Mereka melakukan koordinasi sebelum acara.',
              correct: false,
            },
          ],
        },
        {
          id: 'q20',
          question:
            'Perhatikan kutipan berikut:\n“Banjir yang melanda kota itu disebabkan oleh curah hujan yang tinggi dan sistem drainase yang buruk.”\nApa penyebab utama banjir dalam kutipan tersebut?',
          answers: [
            {
              id: 'mt1',
              answer: 'Banjir terjadi setiap tahun.',
              correct: false,
            },
            { id: 'mt2', answer: 'Curah hujan yang tinggi.', correct: false },
            {
              id: 'mt3',
              answer: 'Sistem drainase yang buruk.',
              correct: false,
            },
            {
              id: 'mt4',
              answer: 'Curah hujan tinggi dan drainase buruk.',
              correct: true,
            }, //Benar
            {
              id: 'mt5',
              answer: 'Kota itu memang rawan banjir.',
              correct: false,
            },
          ],
        },
      ],
    },
  },

  // 4. Soal Quiz Try Out TPS - Pengetahuan Kuantitatif
  {
    id: 4,
    display_id: '1b4e28ba-2fa1-11d2-883f-0016d3cca427',
    data: {
      id: 'tryout-quiz',
      duration: 1200,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Nilai minimum fungsi kuadrat f(x) adalah -8, dan grafiknya melalui titik (-1,0) dan (3,0). Jika grafik juga lewat titik (4,b), maka b = ...',
          answers: [
            { id: 'ku1', answer: '42', correct: false },
            { id: 'ku2', answer: '21', correct: false },
            { id: 'ku3', answer: '10', correct: true }, //Benar
            { id: 'ku4', answer: '5', correct: false },
            { id: 'ku5', answer: '0', correct: false },
          ],
        },
        {
          id: 'q2',
          question:
            'Perbandingan berat P, Q, R, S: P = S + 3; Q = R - 6; S = Q + 2. Jika S = 40 kg, pernyataan yang benar adalah ...',
          answers: [
            { id: 'ku6', answer: 'P > R', correct: false },
            { id: 'ku7', answer: 'S > R', correct: false },
            { id: 'ku8', answer: 'R > P', correct: true }, //Benar
            { id: 'ku9', answer: 'Q > P', correct: false },
            { id: 'ku10', answer: 'S > P', correct: false },
          ],
        },
        {
          id: 'q3',
          question:
            'Kereta menempuh 500 km dalam 10 jam. Agar jarak ini ditempuh dalam 8 jam, kecepatan yang dibutuhkan adalah ...',
          answers: [
            { id: 'ku11', answer: '60,25 km/jam', correct: false },
            { id: 'ku12', answer: '62,50 km/jam', correct: true }, //Benar
            { id: 'ku13', answer: '65,50 km/jam', correct: false },
            { id: 'ku14', answer: '70,25 km/jam', correct: false },
            { id: 'ku15', answer: '73,25 km/jam', correct: false },
          ],
        },
        {
          id: 'q4',
          question:
            'Dari diagram batang bruto-neto 4 minuman, diketahui rata-rata massa kemasan keempat minuman adalah ...',
          answers: [
            { id: 'ku16', answer: '45 g', correct: false },
            { id: 'ku17', answer: '48 g', correct: false },
            { id: 'ku18', answer: '50 g', correct: true }, //Benar
            { id: 'ku19', answer: '54 g', correct: false },
            { id: 'ku20', answer: '60 g', correct: false },
          ],
        },
        {
          id: 'q5',
          question:
            'Pak Frans memiliki sapi dan kambing dengan perbandingan 3:7, jumlah 200 ekor. Banyak sapi adalah ...',
          answers: [
            { id: 'ku21', answer: '30', correct: false },
            { id: 'ku22', answer: '40', correct: false },
            { id: 'ku23', answer: '50', correct: false },
            { id: 'ku24', answer: '60', correct: true }, //Benar
            { id: 'ku25', answer: '90', correct: false },
          ],
        },
        {
          id: 'q6',
          question: 'Hitung jumlah: 9 + 668 × 3 = B. Nilai B adalah ...',
          answers: [
            { id: 'ku26', answer: '2023', correct: true }, //Benar
            { id: 'ku27', answer: '2024', correct: false },
            { id: 'ku28', answer: '2025', correct: false },
            { id: 'ku29', answer: '2026', correct: false },
            { id: 'ku30', answer: '2027', correct: false },
          ],
        },
        {
          id: 'q7',
          question:
            'Di pertemuan 50 orang: 30 saling mengenal, 20 tidak. Yang saling mengenal berpelukan, yang tidak berjabat tangan. Jumlah jabat tangan yang terjadi adalah ...',
          answers: [
            { id: 'ku31', answer: '465', correct: false },
            { id: 'ku32', answer: '600', correct: false },
            { id: 'ku33', answer: '1275', correct: false },
            { id: 'ku34', answer: '810', correct: false },
            { id: 'ku35', answer: '790', correct: true }, //Benar
          ],
        },
        {
          id: 'q8',
          question:
            'Sebuah dadu dilempar dua kali. Peluang muncul dua angka ganjil adalah ...',
          answers: [
            { id: 'ku36', answer: '1/4', correct: false },
            { id: 'ku37', answer: '1/9', correct: false },
            { id: 'ku38', answer: '1/6', correct: false },
            { id: 'ku39', answer: '1/8', correct: false },
            { id: 'ku40', answer: '1/2', correct: true }, //Benar
          ],
        },
        {
          id: 'q9',
          question:
            'Dua bilangan ganjil, p > q, dan p - q = 6. Nilai p + q adalah ...',
          answers: [
            { id: 'ku41', answer: '12', correct: false },
            { id: 'ku42', answer: '15', correct: false },
            { id: 'ku43', answer: '18', correct: true }, //Benar
            { id: 'ku44', answer: '21', correct: false },
            { id: 'ku45', answer: '24', correct: false },
          ],
        },
        {
          id: 'q10',
          question:
            'Tim A menyelesaikan 1/12 proyek per hari, tim B 1/18. Bersama mereka menyelesaikan proyek dalam berapa hari?',
          answers: [
            { id: 'ku46', answer: '4 hari', correct: false },
            { id: 'ku47', answer: '6 hari', correct: false },
            { id: 'ku48', answer: '8 hari', correct: false },
            { id: 'ku49', answer: '9 hari', correct: true }, //Benar
            { id: 'ku50', answer: '10 hari', correct: false },
          ],
        },
        {
          id: 'q11',
          question:
            'Laba tumbuh 15% per tahun dari 500 juta (2020). Laba tahun 2025 adalah ...',
          answers: [
            { id: 'ku51', answer: '781,25 juta', correct: false },
            { id: 'ku52', answer: '847,5 juta', correct: false },
            { id: 'ku53', answer: '925 juta', correct: true }, //Benar
            { id: 'ku54', answer: '1,065 miliar', correct: false },
            { id: 'ku55', answer: '1,21875 miliar', correct: false },
          ],
        },
        {
          id: 'q12',
          question:
            'Pedagang beli 120 kg beras seharga Rp 15.000/kg, dijual dengan margin 25%. Total harga jual adalah ...',
          answers: [
            { id: 'ku56', answer: '2,0 juta', correct: false },
            { id: 'ku57', answer: '2,25 juta', correct: true }, //Benar
            { id: 'ku58', answer: '2,5 juta', correct: false },
            { id: 'ku59', answer: '2,75 juta', correct: false },
            { id: 'ku60', answer: '3 juta', correct: false },
          ],
        },
        {
          id: 'q13',
          question:
            'Jumlah tiga bilangan genap berurutan adalah 150. Nilai bilangan terbesar adalah ...',
          answers: [
            { id: 'ku61', answer: '48', correct: false },
            { id: 'ku62', answer: '50', correct: false },
            { id: 'ku63', answer: '52', correct: true }, //Benar
            { id: 'ku64', answer: '54', correct: false },
            { id: 'ku65', answer: '56', correct: false },
          ],
        },
        {
          id: 'q14',
          question:
            'Sisi segitiga adalah barisan aritmetika: 5 cm, ..., 20 cm. Jika beda = 3 cm, jumlah sisi adalah ...',
          answers: [
            { id: 'ku66', answer: '135 cm', correct: false },
            { id: 'ku67', answer: '150 cm', correct: false },
            { id: 'ku68', answer: '165 cm', correct: false },
            { id: 'ku69', answer: '180 cm', correct: true }, //Benar
            { id: 'ku70', answer: '195 cm', correct: false },
          ],
        },
        {
          id: 'q15',
          question:
            'Investasi memperoleh bunga Rp 4.800 dengan tingkat 8%. Modal awal adalah ...',
          answers: [
            { id: 'ku71', answer: '40.000', correct: false },
            { id: 'ku72', answer: '48.000', correct: false },
            { id: 'ku73', answer: '60.000', correct: true }, //Benar
            { id: 'ku74', answer: '80.000', correct: false },
            { id: 'ku75', answer: '100.000', correct: false },
          ],
        },
        {
          id: 'q16',
          question:
            'Diketahui a = 3b, c = 2a, dan abc = 18. Nilai b adalah ...',
          answers: [
            { id: 'ku76', answer: '3', correct: true }, //Benar
            { id: 'ku77', answer: '2', correct: false },
            { id: 'ku78', answer: '1', correct: false },
            { id: 'ku79', answer: '2/3', correct: false },
            { id: 'ku80', answer: '1/3', correct: false },
          ],
        },
        {
          id: 'q17',
          question:
            'Jika (25^24 × 23)^2 = √(8^2), maka nilai yang benar adalah ...',
          answers: [
            { id: 'ku81', answer: '= 3', correct: false },
            { id: 'ku82', answer: '= 3^(1/3)', correct: true }, //Benar
            { id: 'ku83', answer: '= 3', correct: false },
            { id: 'ku84', answer: '= √2', correct: false },
            { id: 'ku85', answer: '= 3 - 3', correct: false },
          ],
        },
        {
          id: 'q18',
          question:
            'Jika 2^m × 2^n = 144, m = 6, dan n positif memenuhi n = 2^(-n) – 1, maka nilai m^2 + n^6 adalah ...',
          answers: [
            { id: 'ku86', answer: '-1', correct: false },
            { id: 'ku87', answer: '-2', correct: false },
            { id: 'ku88', answer: '-3', correct: false },
            { id: 'ku89', answer: '-4', correct: false },
            { id: 'ku90', answer: '-5', correct: true }, //Benar
          ],
        },
        {
          id: 'q19',
          question: 'Nilai mana yang paling besar: 0.25, 0.1, 0.111̅, 61/6?',
          answers: [
            { id: 'ku91', answer: '0.25', correct: false },
            { id: 'ku92', answer: '0.1', correct: false },
            { id: 'ku93', answer: '0.111̅', correct: false },
            { id: 'ku94', answer: '61/6', correct: true }, //Benar
            { id: 'ku95', answer: 'Semua sama', correct: false },
          ],
        },
        {
          id: 'q20',
          question: 'Jika 3 + x + y = 10, bentuk ekuivalen untuk x adalah ...',
          answers: [
            { id: 'ku96', answer: '(3 - y)/10', correct: true }, //Benar
            { id: 'ku97', answer: '(7 - y)/3', correct: false },
            { id: 'ku98', answer: '10 - y - 3', correct: false },
            { id: 'ku99', answer: 'y - 7', correct: false },
            { id: 'ku100', answer: '(10 - 3)y', correct: false },
          ],
        },
      ],
    },
  },

  // 5. Soal Quiz Try Out TL - Literasi Bahasa Indonesia
  {
    id: 5,
    display_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    data: {
      id: 'tryout-quiz',
      duration: 2700,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Sebuah penelitian menunjukkan bahwa membaca secara intensif dapat meningkatkan kemampuan berpikir kritis. Namun, masih banyak siswa yang kurang tertarik membaca buku nonfiksi. Apa strategi paling efektif untuk meningkatkan minat baca siswa terhadap buku nonfiksi?',
          answers: [
            {
              id: 'q1a1',
              answer: 'Mewajibkan siswa membaca buku nonfiksi setiap hari.',
              correct: false,
            },
            {
              id: 'q1a2',
              answer:
                'Memberikan penghargaan bagi siswa yang membaca buku terbanyak.',
              correct: false,
            },
            {
              id: 'q1a3',
              answer:
                'Mengaitkan topik buku nonfiksi dengan pengalaman nyata siswa.',
              correct: true,
            }, // BENAR
            {
              id: 'q1a4',
              answer: 'Menghapus buku fiksi dari kurikulum sekolah.',
              correct: false,
            },
            {
              id: 'q1a5',
              answer:
                'Menyediakan ringkasan buku agar siswa tidak perlu membaca keseluruhan isi.',
              correct: false,
            },
          ],
        },

        {
          id: 'q2',
          question:
            'Sebuah penelitian menunjukkan bahwa siswa yang memiliki waktu tidur cukup cenderung memiliki performa akademik yang lebih baik. \n\nApa kesimpulan yang dapat ditarik dari hasil penelitian tersebut?',
          answers: [
            {
              id: 'q2a1',
              answer: 'Tidur cukup dapat mendukung kemampuan belajar siswa.',
              correct: true,
            }, // Benar
            {
              id: 'q2a2',
              answer:
                'Semua siswa harus belajar lebih sedikit agar bisa tidur lebih lama.',
              correct: false,
            },
            {
              id: 'q2a3',
              answer: 'Waktu tidur tidak memengaruhi kemampuan akademik siswa.',
              correct: false,
            },
            {
              id: 'q2a4',
              answer: 'Belajar semalaman lebih efektif daripada tidur.',
              correct: false,
            },
            {
              id: 'q2a5',
              answer: 'Siswa yang kurang tidur lebih disiplin.',
              correct: false,
            },
          ],
        },
        {
          id: 'q3',
          question:
            'Sebuah laporan menyebutkan bahwa konsumsi gula berlebihan dapat meningkatkan risiko diabetes pada anak-anak. \n\nApa tindakan preventif yang paling tepat untuk mengatasi masalah ini?',
          answers: [
            {
              id: 'q3a1',
              answer: 'Mewajibkan anak-anak makan makanan cepat saji.',
              correct: false,
            },
            {
              id: 'q3a2',
              answer:
                'Memberikan edukasi gizi sejak dini kepada anak dan orang tua.',
              correct: true,
            }, // Benar
            {
              id: 'q3a3',
              answer: 'Menambah jumlah iklan minuman manis di televisi.',
              correct: false,
            },
            {
              id: 'q3a4',
              answer: 'Menghilangkan semua makanan manis dari pasaran.',
              correct: false,
            },
            {
              id: 'q3a5',
              answer: 'Mengganti gula dengan garam dalam makanan anak.',
              correct: false,
            },
          ],
        },
        {
          id: 'q4',
          question:
            'Dalam sebuah opini disebutkan bahwa penggunaan bahasa daerah yang terus menurun berpotensi menyebabkan punahnya budaya lokal. \n\nApa solusi terbaik untuk menjaga kelestarian bahasa daerah?',
          answers: [
            {
              id: 'q4a1',
              answer: 'Menghapus pelajaran bahasa daerah di sekolah.',
              correct: false,
            },
            {
              id: 'q4a2',
              answer: 'Menggunakan bahasa daerah hanya untuk hiburan.',
              correct: false,
            },
            {
              id: 'q4a3',
              answer: 'Melarang anak muda berbicara bahasa asing.',
              correct: false,
            },
            {
              id: 'q4a4',
              answer:
                'Meningkatkan penggunaan bahasa daerah dalam pendidikan dan media.',
              correct: true,
            }, // Benar
            {
              id: 'q4a5',
              answer: 'Mengganti semua nama tempat dengan bahasa Indonesia.',
              correct: false,
            },
          ],
        },
        {
          id: 'q5',
          question:
            'Dalam hasil survei disebutkan bahwa mayoritas masyarakat perkotaan mengalami stres akibat kemacetan lalu lintas. \n\nApa solusi jangka panjang yang dapat mengatasi permasalahan tersebut?',
          answers: [
            {
              id: 'q5a1',
              answer: 'Meningkatkan jumlah kendaraan pribadi.',
              correct: false,
            },
            {
              id: 'q5a2',
              answer: 'Mengurangi pembangunan jalan tol.',
              correct: false,
            },
            {
              id: 'q5a3',
              answer:
                'Mengembangkan dan memperbaiki sistem transportasi publik.',
              correct: true,
            }, // Benar
            {
              id: 'q5a4',
              answer: 'Menyuruh masyarakat pindah ke desa.',
              correct: false,
            },
            {
              id: 'q5a5',
              answer: 'Menutup akses jalan utama di jam sibuk.',
              correct: false,
            },
          ],
        },
        {
          id: 'q6',
          question:
            'Sebuah artikel menyebutkan bahwa literasi keuangan perlu dikenalkan sejak dini agar generasi muda mampu mengelola pendapatan dan utang secara bijak. \n\nApa tantangan terbesar dalam penerapan pendidikan literasi keuangan pada anak-anak sekolah dasar?',
          answers: [
            {
              id: 'q6a1',
              answer: 'Anak-anak belum memiliki akses terhadap media sosial.',
              correct: false,
            },
            {
              id: 'q6a2',
              answer:
                'Materi keuangan terlalu rumit jika tidak disesuaikan dengan usia.',
              correct: true,
            }, // Benar
            {
              id: 'q6a3',
              answer: 'Sekolah dasar sudah memiliki pelajaran ekonomi.',
              correct: false,
            },
            {
              id: 'q6a4',
              answer: 'Orang tua tidak tertarik mendampingi anak belajar.',
              correct: false,
            },
            {
              id: 'q6a5',
              answer: 'Semua anak-anak tidak memerlukan pengetahuan keuangan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q7',
          question:
            'Dalam artikel ilmiah disebutkan bahwa perubahan iklim berdampak langsung pada ketahanan air di wilayah tropis. \n\nMengapa fenomena ini harus menjadi perhatian utama pemerintah daerah?',
          answers: [
            {
              id: 'q7a1',
              answer:
                'Karena pemerintah daerah bertanggung jawab pada perdagangan internasional.',
              correct: false,
            },
            {
              id: 'q7a2',
              answer:
                'Karena perubahan iklim hanya berdampak pada negara-negara besar.',
              correct: false,
            },
            {
              id: 'q7a3',
              answer: 'Karena perubahan iklim lebih menguntungkan pertanian.',
              correct: false,
            },
            {
              id: 'q7a4',
              answer: 'Karena air hanya digunakan untuk konsumsi rumah tangga.',
              correct: false,
            },
            {
              id: 'q7a5',
              answer:
                'Karena pemerintah daerah memiliki peran langsung dalam manajemen sumber daya lokal.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q8',
          question:
            'Dalam sebuah opini, penulis menyatakan bahwa budaya membaca di Indonesia masih rendah karena faktor akses dan minat. \n\nApa solusi paling strategis yang dapat dilakukan pemerintah untuk meningkatkan budaya membaca di daerah terpencil?',
          answers: [
            {
              id: 'q8a1',
              answer: 'Meningkatkan penggunaan media sosial di sekolah.',
              correct: false,
            },
            {
              id: 'q8a2',
              answer:
                'Menayangkan lebih banyak acara hiburan di televisi lokal.',
              correct: false,
            },
            {
              id: 'q8a3',
              answer: 'Mewajibkan siswa menulis puisi setiap hari.',
              correct: false,
            },
            {
              id: 'q8a4',
              answer: 'Membatasi penggunaan buku digital.',
              correct: false,
            },
            {
              id: 'q8a5',
              answer:
                'Mendistribusikan buku dan membangun perpustakaan keliling.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q9',
          question:
            'Dalam teks berita disebutkan bahwa kebijakan pemindahan ibu kota negara bertujuan mengurangi beban Jakarta. \n\nApa dampak sosial yang paling mungkin timbul dari kebijakan ini?',
          answers: [
            {
              id: 'q9a1',
              answer:
                'Tingginya migrasi penduduk dan tantangan integrasi sosial di wilayah baru.',
              correct: true,
            }, // Benar
            {
              id: 'q9a2',
              answer: 'Menurunnya konsumsi listrik di Jakarta secara drastis.',
              correct: false,
            },
            {
              id: 'q9a3',
              answer: 'Jakarta akan kehilangan status sebagai provinsi.',
              correct: false,
            },
            {
              id: 'q9a4',
              answer: 'Jumlah penduduk Indonesia menurun tajam.',
              correct: false,
            },
            {
              id: 'q9a5',
              answer: 'Semua warga Jakarta pindah ke luar negeri.',
              correct: false,
            },
          ],
        },
        {
          id: 'q10',
          question:
            'Teks biografi menyebutkan bahwa tokoh A sangat aktif dalam kegiatan sosial meskipun memiliki keterbatasan fisik sejak kecil. \n\nApa nilai moral yang dapat dipetik dari kisah tersebut?',
          answers: [
            {
              id: 'q10a1',
              answer:
                'Keterbatasan fisik adalah halangan utama untuk berkontribusi.',
              correct: false,
            },
            {
              id: 'q10a2',
              answer: 'Aktivitas sosial hanya bisa dilakukan oleh orang sehat.',
              correct: false,
            },
            {
              id: 'q10a3',
              answer:
                'Semangat dan keinginan kuat mampu melampaui keterbatasan.',
              correct: true,
            }, // Benar
            {
              id: 'q10a4',
              answer: 'Seseorang sebaiknya fokus pada kelemahannya saja.',
              correct: false,
            },
            {
              id: 'q10a5',
              answer: 'Semua orang harus bekerja di bidang sosial.',
              correct: false,
            },
          ],
        },
        {
          id: 'q11',
          question:
            'Dalam artikel opini disebutkan bahwa urbanisasi yang tidak terkendali menyebabkan peningkatan kawasan kumuh dan ketimpangan sosial di kota besar. \n\nBerdasarkan informasi tersebut, apa kebijakan yang paling relevan untuk diterapkan oleh pemerintah kota?',
          answers: [
            {
              id: 'q11a1',
              answer: 'Meningkatkan promosi wisata di kota besar.',
              correct: false,
            },
            {
              id: 'q11a2',
              answer: 'Membatasi pembangunan gedung tinggi.',
              correct: false,
            },
            {
              id: 'q11a3',
              answer: 'Melarang warga desa pindah ke kota.',
              correct: false,
            },
            {
              id: 'q11a4',
              answer: 'Mewajibkan semua pendatang membayar pajak tinggi.',
              correct: false,
            },
            {
              id: 'q11a5',
              answer:
                'Menyediakan perumahan terjangkau dan pemerataan pembangunan daerah asal migran.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q12',
          question:
            'Sebuah penelitian menunjukkan bahwa siswa yang belajar dengan pendekatan berbasis proyek memiliki pemahaman konsep lebih baik dibandingkan siswa yang hanya mendengarkan ceramah. \n\nApa simpulan paling tepat dari temuan tersebut?',
          answers: [
            {
              id: 'q12a1',
              answer:
                'Ceramah adalah metode paling efektif dalam pembelajaran.',
              correct: false,
            },
            {
              id: 'q12a2',
              answer:
                'Pendekatan proyek membantu siswa memahami materi secara mendalam.',
              correct: true,
            }, // Benar
            {
              id: 'q12a3',
              answer: 'Siswa tidak perlu memahami konsep, cukup menghafal.',
              correct: false,
            },
            {
              id: 'q12a4',
              answer: 'Belajar mandiri tidak diperlukan lagi.',
              correct: false,
            },
            {
              id: 'q12a5',
              answer: 'Semua proyek harus dilakukan tanpa bimbingan guru.',
              correct: false,
            },
          ],
        },
        {
          id: 'q13',
          question:
            'Dalam sebuah laporan disebutkan bahwa polusi udara dapat menyebabkan penurunan fungsi paru-paru pada anak-anak. \n\nMengapa laporan tersebut penting untuk disosialisasikan kepada masyarakat umum?',
          answers: [
            {
              id: 'q13a1',
              answer:
                'Agar masyarakat tahu bahwa anak-anak perlu lebih banyak berada di dalam ruangan.',
              correct: false,
            },
            {
              id: 'q13a2',
              answer:
                'Agar masyarakat tidak membiarkan anak-anak bermain sama sekali.',
              correct: false,
            },
            {
              id: 'q13a3',
              answer: 'Agar masyarakat membeli masker secara massal.',
              correct: false,
            },
            {
              id: 'q13a4',
              answer:
                'Agar masyarakat sadar dan mendukung upaya pengurangan polusi udara.',
              correct: true,
            }, // Benar
            {
              id: 'q13a5',
              answer: 'Agar pemerintah menghentikan semua aktivitas industri.',
              correct: false,
            },
          ],
        },
        {
          id: 'q14',
          question:
            'Dalam teks deskriptif tentang hutan mangrove, disebutkan bahwa vegetasi ini mampu menahan abrasi dan menjadi habitat penting bagi banyak biota laut. \n\nApa dampak ekologis jika hutan mangrove terus ditebangi?',
          answers: [
            {
              id: 'q14a1',
              answer:
                'Ekosistem pesisir menjadi rusak dan keanekaragaman hayati menurun.',
              correct: true,
            }, // Benar
            {
              id: 'q14a2',
              answer: 'Perikanan laut akan meningkat pesat.',
              correct: false,
            },
            {
              id: 'q14a3',
              answer: 'Harga tanah di wilayah pesisir akan meningkat.',
              correct: false,
            },
            {
              id: 'q14a4',
              answer: 'Abrasi akan berkurang karena tidak ada penghalang.',
              correct: false,
            },
            {
              id: 'q14a5',
              answer: 'Banjir rob tidak lagi terjadi.',
              correct: false,
            },
          ],
        },
        {
          id: 'q15',
          question:
            'Dalam teks sejarah disebutkan bahwa Sumpah Pemuda menjadi tonggak penting dalam perjuangan kemerdekaan Indonesia karena menyatukan semangat kebangsaan. \n\nApa pesan utama yang dapat diambil dari peristiwa tersebut?',
          answers: [
            {
              id: 'q15a1',
              answer: 'Perjuangan hanya dapat dilakukan oleh pemuda.',
              correct: false,
            },
            {
              id: 'q15a2',
              answer: 'Perjuangan kemerdekaan lebih efektif tanpa organisasi.',
              correct: false,
            },
            {
              id: 'q15a3',
              answer: 'Bahasa asing lebih penting daripada bahasa persatuan.',
              correct: false,
            },
            {
              id: 'q15a4',
              answer:
                'Kesatuan visi dan semangat kolektif dapat memperkuat perjuangan.',
              correct: true,
            }, // Benar
            {
              id: 'q15a5',
              answer:
                'Setiap daerah harus memperjuangkan kemerdekaan sendiri-sendiri.',
              correct: false,
            },
          ],
        },
        {
          id: 'q16',
          question:
            'Sebuah teks laporan menyebutkan bahwa peningkatan penggunaan gadget pada anak-anak usia dini dapat berdampak negatif terhadap perkembangan bahasa dan sosial mereka. \n\nApa rekomendasi kebijakan yang paling sesuai dengan temuan tersebut?',
          answers: [
            {
              id: 'q16a1',
              answer: 'Melarang semua anak-anak menyentuh gadget.',
              correct: false,
            },
            {
              id: 'q16a2',
              answer:
                'Membatasi waktu penggunaan gadget dan memperbanyak interaksi langsung.',
              correct: true,
            }, // Benar
            {
              id: 'q16a3',
              answer: 'Memberikan gadget sejak bayi agar cepat adaptif.',
              correct: false,
            },
            {
              id: 'q16a4',
              answer: 'Meningkatkan iklan gadget untuk keluarga muda.',
              correct: false,
            },
            {
              id: 'q16a5',
              answer:
                'Menganjurkan anak-anak belajar bahasa melalui YouTube saja.',
              correct: false,
            },
          ],
        },
        {
          id: 'q17',
          question:
            'Dalam sebuah resensi film, dikatakan bahwa film tersebut berhasil menggambarkan konflik sosial melalui karakter yang kompleks dan dialog yang tajam. \n\nApa kelebihan utama dari teknik penyampaian cerita seperti ini?',
          answers: [
            {
              id: 'q17a1',
              answer: 'Cerita menjadi tidak jelas dan membingungkan.',
              correct: false,
            },
            {
              id: 'q17a2',
              answer: 'Penonton tidak perlu berpikir saat menonton.',
              correct: false,
            },
            {
              id: 'q17a3',
              answer: 'Dialog panjang membuat film lebih lambat.',
              correct: false,
            },
            {
              id: 'q17a4',
              answer: 'Konflik sosial tidak perlu disampaikan dalam film.',
              correct: false,
            },
            {
              id: 'q17a5',
              answer:
                'Konflik sosial menjadi lebih mudah dipahami melalui emosi karakter.',
              correct: true,
            }, // Benar
          ],
        },
        {
          id: 'q18',
          question:
            'Dalam teks eksplanasi dijelaskan bahwa banjir di kawasan perkotaan sering kali disebabkan oleh buruknya sistem drainase dan kebiasaan membuang sampah sembarangan. \n\nApa tindakan yang paling logis dilakukan masyarakat berdasarkan teks tersebut?',
          answers: [
            {
              id: 'q18a1',
              answer:
                'Mengandalkan pemerintah sepenuhnya untuk membersihkan drainase.',
              correct: false,
            },
            {
              id: 'q18a2',
              answer: 'Menunggu musim hujan selesai sebelum bertindak.',
              correct: false,
            },
            {
              id: 'q18a3',
              answer:
                'Tidak membuang sampah sembarangan dan ikut menjaga saluran air.',
              correct: true,
            }, // Benar
            {
              id: 'q18a4',
              answer: 'Membangun rumah di atas sungai agar air bisa lewat.',
              correct: false,
            },
            {
              id: 'q18a5',
              answer:
                'Mengabaikan masalah banjir karena hanya terjadi di musim hujan.',
              correct: false,
            },
          ],
        },
        {
          id: 'q19',
          question:
            'Dalam esai ilmiah dikemukakan bahwa keberagaman budaya di Indonesia merupakan aset penting yang dapat menjadi kekuatan sosial bila dikelola dengan baik. \n\nApa makna yang dapat diambil dari pernyataan tersebut?',
          answers: [
            {
              id: 'q19a1',
              answer:
                'Keberagaman budaya bisa memperkuat persatuan jika ada toleransi dan pengelolaan.',
              correct: true,
            }, // Benar
            {
              id: 'q19a2',
              answer:
                'Keberagaman budaya sebaiknya diseragamkan agar tidak terjadi konflik.',
              correct: false,
            },
            {
              id: 'q19a3',
              answer: 'Budaya lokal tidak penting dalam konteks nasional.',
              correct: false,
            },
            {
              id: 'q19a4',
              answer: 'Budaya daerah hanya untuk konsumsi wisatawan.',
              correct: false,
            },
            {
              id: 'q19a5',
              answer: 'Semua budaya harus dikonversi ke budaya modern.',
              correct: false,
            },
          ],
        },
        {
          id: 'q20',
          question:
            'Dalam artikel ilmiah dijelaskan bahwa minat baca yang tinggi berhubungan positif dengan kemampuan berpikir kritis seseorang. \n\nBagaimana hubungan ini dapat dijelaskan?',
          answers: [
            {
              id: 'q20a1',
              answer:
                'Orang yang sering membaca tidak memerlukan pemikiran kritis.',
              correct: false,
            },
            {
              id: 'q20a2',
              answer:
                'Kemampuan berpikir kritis melemah karena terlalu banyak membaca.',
              correct: false,
            },
            {
              id: 'q20a3',
              answer:
                'Semakin sering membaca, semakin banyak informasi dan sudut pandang yang dapat dianalisis.',
              correct: true,
            }, // Benar
            {
              id: 'q20a4',
              answer: 'Minat baca tinggi berarti hafal semua bacaan.',
              correct: false,
            },
            {
              id: 'q20a5',
              answer:
                'Kemampuan berpikir kritis hanya berkembang melalui debat, bukan membaca.',
              correct: false,
            },
          ],
        },
      ],
    },
  },

  // 6. Soal Quiz Try Out TL - Literasi Bahasa Inggris
  {
    id: 6,
    display_id: '16fd2706-8baf-433b-82eb-8c7fada847da',
    data: {
      id: 'tryout-quiz',
      duration: 1800,
      questions_answers: [
        {
          id: 'q1',
          question:
            'The passage describes a study in which students who engaged in extensive reading programs showed significantly improved vocabulary and comprehension levels over time.\n\nWhat can be inferred from this study regarding the role of extensive reading in language development?',
          answers: [
            {
              id: 'q1a1',
              answer:
                'Extensive reading reduces the need for classroom learning.',
              correct: false,
            },
            {
              id: 'q1a2',
              answer: 'Vocabulary growth is unrelated to reading habits.',
              correct: false,
            },
            {
              id: 'q1a3',
              answer:
                'Students improve their language skills through regular reading exposure.',
              correct: true,
            }, // benar
            {
              id: 'q1a4',
              answer:
                'Comprehension is better developed through listening than reading.',
              correct: false,
            },
            {
              id: 'q1a5',
              answer:
                'Grammar lessons are more effective than reading programs.',
              correct: false,
            },
          ],
        },
        {
          id: 'q2',
          question:
            'In a newspaper editorial, the author argues that promoting critical thinking skills in schools is more important than memorizing facts.\n\nWhich of the following statements best supports the author’s opinion?',
          answers: [
            {
              id: 'q2a1',
              answer:
                'Critical thinking enables students to solve real-world problems independently.',
              correct: true,
            }, // benar
            {
              id: 'q2a2',
              answer:
                'Students enjoy memorizing historical dates and formulas.',
              correct: false,
            },
            {
              id: 'q2a3',
              answer:
                'Schools should return to traditional methods of instruction.',
              correct: false,
            },
            {
              id: 'q2a4',
              answer: 'Critical thinking is useful only in universities.',
              correct: false,
            },
            {
              id: 'q2a5',
              answer:
                'Memorization helps students pass standardized tests quickly.',
              correct: false,
            },
          ],
        },
        {
          id: 'q3',
          question:
            'According to a report, social media has increased global communication but also contributed to the spread of misinformation and reduced face-to-face interaction.\n\nWhat is the most balanced conclusion that can be drawn from the report?',
          answers: [
            {
              id: 'q3a1',
              answer: 'Social media should be banned completely.',
              correct: false,
            },
            {
              id: 'q3a2',
              answer: 'Social media is entirely beneficial for society.',
              correct: false,
            },
            {
              id: 'q3a3',
              answer: 'Only traditional communication methods are reliable.',
              correct: false,
            },
            {
              id: 'q3a4',
              answer: 'Social media increases productivity in all fields.',
              correct: false,
            },
            {
              id: 'q3a5',
              answer:
                'While social media has advantages, it also poses serious risks that need regulation.',
              correct: true,
            }, // benar
          ],
        },
        {
          id: 'q4',
          question:
            'The author of a scientific article claims that climate change has led to unpredictable weather patterns, affecting agriculture and water supply globally.\n\nWhich recommendation would be most effective in responding to this issue?',
          answers: [
            {
              id: 'q4a1',
              answer: 'Wait for natural weather patterns to stabilize.',
              correct: false,
            },
            {
              id: 'q4a2',
              answer:
                'Adopt climate-resilient farming methods and water conservation practices.',
              correct: true,
            }, // benar
            {
              id: 'q4a3',
              answer:
                'Focus on industrial development and ignore environmental changes.',
              correct: false,
            },
            {
              id: 'q4a4',
              answer: 'Relocate all agricultural activities to urban areas.',
              correct: false,
            },
            {
              id: 'q4a5',
              answer:
                'Promote the use of plastic in farming for soil protection.',
              correct: false,
            },
          ],
        },
        {
          id: 'q5',
          question:
            'A biography of a well-known entrepreneur highlights how early failures helped shape their later success by teaching resilience and adaptability.\n\nWhat lesson is most likely intended by the author?',
          answers: [
            {
              id: 'q5a1',
              answer: 'Success comes only to those with wealth.',
              correct: false,
            },
            {
              id: 'q5a2',
              answer: 'Failures should be avoided at all costs.',
              correct: false,
            },
            {
              id: 'q5a3',
              answer: 'Learning from failure is essential for future success.',
              correct: true,
            }, // benar
            {
              id: 'q5a4',
              answer: 'Entrepreneurs never fail if they plan carefully.',
              correct: false,
            },
            {
              id: 'q5a5',
              answer: 'Only academic excellence leads to success in life.',
              correct: false,
            },
          ],
        },
        {
          id: 'q6',
          question:
            'An article on urban design argues that cities with more green spaces contribute to better mental health for their residents.\n\nWhich of the following statements best supports this argument?',
          answers: [
            {
              id: 'q6a1',
              answer:
                'Access to green areas reduces stress and anxiety levels.',
              correct: true,
            }, // benar
            {
              id: 'q6a2',
              answer: 'Green spaces reduce the number of buildings in a city.',
              correct: false,
            },
            {
              id: 'q6a3',
              answer: 'Trees and plants improve city aesthetics.',
              correct: false,
            },
            {
              id: 'q6a4',
              answer: 'Green spaces increase property taxes.',
              correct: false,
            },
            {
              id: 'q6a5',
              answer:
                'Urban areas must prioritize industrial zones over parks.',
              correct: false,
            },
          ],
        },
        {
          id: 'q7',
          question:
            'A journal article explains that children who grow up bilingual tend to have stronger problem-solving and multitasking skills.\n\nWhat is the most logical implication of this finding?',
          answers: [
            {
              id: 'q7a1',
              answer:
                'Children should be taught only one language to avoid confusion.',
              correct: false,
            },
            {
              id: 'q7a2',
              answer: 'Being bilingual weakens memory function.',
              correct: false,
            },
            {
              id: 'q7a3',
              answer:
                'Learning multiple languages may support cognitive development.',
              correct: true,
            }, // benar
            {
              id: 'q7a4',
              answer:
                'Bilingual children often struggle with school performance.',
              correct: false,
            },
            {
              id: 'q7a5',
              answer: 'Multitasking has no connection with language ability.',
              correct: false,
            },
          ],
        },
        {
          id: 'q8',
          question:
            'In a letter to the editor, a parent urges schools to adopt more hands-on learning, claiming that students retain information better through experience.\n\nWhich educational method best aligns with this perspective?',
          answers: [
            {
              id: 'q8a1',
              answer: 'Lecturing students without practical examples.',
              correct: false,
            },
            {
              id: 'q8a2',
              answer: 'Using rote memorization for test preparation.',
              correct: false,
            },
            {
              id: 'q8a3',
              answer: 'Focusing on textbook reading and summaries.',
              correct: false,
            },
            {
              id: 'q8a4',
              answer: 'Reducing lab and field trip sessions.',
              correct: false,
            },
            {
              id: 'q8a5',
              answer: 'Incorporating project-based and experiential learning.',
              correct: true,
            }, // benar
          ],
        },
        {
          id: 'q9',
          question:
            'A report on workplace dynamics states that teams with diverse perspectives tend to perform better on complex tasks.\n\nWhich policy would best support this finding?',
          answers: [
            {
              id: 'q9a3',
              answer:
                'Encouraging inclusion of individuals from varied backgrounds and experiences.',
              correct: true,
            }, // benar
            {
              id: 'q9a1',
              answer:
                'Hiring only candidates from the same educational background.',
              correct: false,
            },
            {
              id: 'q9a2',
              answer:
                'Avoiding teams with varying opinions to reduce conflict.',
              correct: false,
            },
            {
              id: 'q9a4',
              answer: 'Grouping employees by age for better communication.',
              correct: false,
            },
            {
              id: 'q9a5',
              answer: 'Focusing on individual rather than team tasks.',
              correct: false,
            },
          ],
        },
        {
          id: 'q10',
          question:
            'In an op-ed, the author emphasizes the value of failure in the learning process, stating that students who are allowed to fail often learn more deeply.\n\nWhich of the following classroom practices reflects this view?',
          answers: [
            {
              id: 'q10a1',
              answer: 'Punishing students for incorrect answers.',
              correct: false,
            },
            {
              id: 'q10a2',
              answer: 'Rewarding only perfect scores.',
              correct: false,
            },
            {
              id: 'q10a3',
              answer:
                'Providing opportunities to reflect and revise after mistakes.',
              correct: true,
            }, // benar
            {
              id: 'q10a4',
              answer: 'Eliminating difficult questions to avoid failure.',
              correct: false,
            },
            {
              id: 'q10a5',
              answer: 'Skipping over errors during feedback.',
              correct: false,
            },
          ],
        },
        {
          id: 'q11',
          question:
            'A research article discusses how remote work has increased productivity for some employees but decreased collaboration and team cohesion for others.\n\nWhat is the most reasonable recommendation based on this information?',
          answers: [
            {
              id: 'q11a1',
              answer: 'Mandate full-time remote work for all employees.',
              correct: false,
            },
            {
              id: 'q11a2',
              answer:
                'Adopt a hybrid work model balancing productivity and collaboration.',
              correct: true,
            }, // benar
            {
              id: 'q11a3',
              answer:
                'Eliminate remote work and return to traditional offices.',
              correct: false,
            },
            {
              id: 'q11a4',
              answer:
                'Discourage all forms of collaboration to increase individual focus.',
              correct: false,
            },
            {
              id: 'q11a5',
              answer: 'Let employees work unsupervised at all times.',
              correct: false,
            },
          ],
        },
        {
          id: 'q12',
          question:
            'In a passage about digital privacy, the author warns that sharing too much personal information online can lead to identity theft and data breaches.\n\nWhat is the most appropriate action individuals should take based on the passage?',
          answers: [
            {
              id: 'q12a1',
              answer:
                'Post personal details regularly to build online presence.',
              correct: false,
            },
            {
              id: 'q12a2',
              answer: 'Avoid using the internet altogether.',
              correct: false,
            },
            {
              id: 'q12a3',
              answer: 'Trust all websites to protect user information.',
              correct: false,
            },
            {
              id: 'q12a4',
              answer: 'Share passwords with close friends for convenience.',
              correct: false,
            },
            {
              id: 'q12a5',
              answer:
                'Limit the sharing of sensitive personal data on public platforms.',
              correct: true,
            }, // benar
          ],
        },
        {
          id: 'q13',
          question:
            'The author of a commentary argues that art education fosters creativity, emotional expression, and critical thinking in students.\n\nWhich of the following would best strengthen the author’s claim?',
          answers: [
            {
              id: 'q13a1',
              answer:
                'Students in art classes show improved problem-solving abilities.',
              correct: true,
            }, // benar
            {
              id: 'q13a2',
              answer: 'Art education increases the cost of school programs.',
              correct: false,
            },
            {
              id: 'q13a3',
              answer: 'Most students prefer sports over art classes.',
              correct: false,
            },
            {
              id: 'q13a4',
              answer: 'Art is primarily a form of entertainment.',
              correct: false,
            },
            {
              id: 'q13a5',
              answer: 'Few students become professional artists.',
              correct: false,
            },
          ],
        },
        {
          id: 'q14',
          question:
            'A case study highlights how companies that embrace sustainable practices not only reduce environmental impact but also attract more customers.\n\nWhat is the most likely reason for this trend?',
          answers: [
            {
              id: 'q14a1',
              answer:
                'Consumers are increasingly aware and value sustainability.',
              correct: true,
            }, // benar
            {
              id: 'q14a2',
              answer:
                'Customers prefer companies that ignore environmental issues.',
              correct: false,
            },
            {
              id: 'q14a3',
              answer: 'Environmental practices reduce product quality.',
              correct: false,
            },
            {
              id: 'q14a4',
              answer: 'Sustainability increases the use of harmful chemicals.',
              correct: false,
            },
            {
              id: 'q14a5',
              answer: 'Eco-friendly businesses tend to have fewer employees.',
              correct: false,
            },
          ],
        },
        {
          id: 'q15',
          question:
            'An article discusses the benefits of reading fiction, including improved empathy and understanding of different perspectives.\n\nWhich conclusion best aligns with the article’s argument?',
          answers: [
            {
              id: 'q15a1',
              answer:
                'Fiction reading should be replaced by technical manuals.',
              correct: false,
            },
            {
              id: 'q15a2',
              answer: 'Fiction has no impact on emotional development.',
              correct: false,
            },
            {
              id: 'q15a3',
              answer:
                'Reading fiction helps individuals connect with others experiences.',
              correct: true,
            }, // benar
            {
              id: 'q15a4',
              answer: 'Non-fiction is the only valuable reading material.',
              correct: false,
            },
            {
              id: 'q15a5',
              answer: 'Reading reduces emotional intelligence.',
              correct: false,
            },
          ],
        },
        {
          id: 'q16',
          question:
            'In an interview, a scientist emphasizes the importance of failure in scientific experiments, stating that failed results often lead to new discoveries.\n\nWhat does this suggest about the role of failure in science?',
          answers: [
            {
              id: 'q16a1',
              answer: 'Failure indicates poor scientific skill.',
              correct: false,
            },
            {
              id: 'q16a2',
              answer: 'Scientific progress depends on avoiding failure.',
              correct: false,
            },
            {
              id: 'q16a3',
              answer: 'Only perfect results are acceptable in research.',
              correct: false,
            },
            {
              id: 'q16a4',
              answer: 'Scientists should publish only successful findings.',
              correct: false,
            },
            {
              id: 'q16a5',
              answer: 'Unexpected results can provide valuable insights.',
              correct: true,
            }, // benar
          ],
        },
        {
          id: 'q17',
          question:
            'A historical analysis shows that societies with free access to information tend to have higher innovation rates.\n\nWhich policy would most likely support this outcome?',
          answers: [
            {
              id: 'q17a1',
              answer: 'Restrict access to libraries and public records.',
              correct: false,
            },
            {
              id: 'q17a2',
              answer:
                'Promote open access to knowledge and research materials.',
              correct: true,
            }, // benar
            {
              id: 'q17a3',
              answer: 'Censor online content to control information flow.',
              correct: false,
            },
            {
              id: 'q17a4',
              answer: 'Discourage internet use in educational institutions.',
              correct: false,
            },
            {
              id: 'q17a5',
              answer: 'Limit media coverage on science and technology topics.',
              correct: false,
            },
          ],
        },
        {
          id: 'q18',
          question:
            'A novel describes a character who overcomes multiple obstacles through perseverance and support from others.\n\nWhat theme is most central to this narrative?',
          answers: [
            { id: 'q18a1', answer: 'Isolation and despair.', correct: false },
            { id: 'q18a2', answer: 'Luck determines success.', correct: false },
            {
              id: 'q18a3',
              answer: 'Success requires betraying others.',
              correct: false,
            },
            {
              id: 'q18a4',
              answer: 'Persistence and community help achieve goals.',
              correct: true,
            }, // benar
            {
              id: 'q18a5',
              answer: 'Obstacles always result in failure.',
              correct: false,
            },
          ],
        },
        {
          id: 'q19',
          question:
            "An op-ed criticizes fast fashion for its environmental impact and promotes slow fashion as a sustainable alternative.\n\nWhat practice aligns best with the op-ed's argument?",
          answers: [
            {
              id: 'q19a1',
              answer:
                'Buying cheap clothes frequently and discarding them quickly.',
              correct: false,
            },
            {
              id: 'q19a2',
              answer: 'Prioritizing brand name over durability.',
              correct: false,
            },
            {
              id: 'q19a3',
              answer: 'Purchasing fewer, higher-quality garments made to last.',
              correct: true,
            }, // benar
            {
              id: 'q19a4',
              answer: 'Supporting mass production to reduce costs.',
              correct: false,
            },
            {
              id: 'q19a5',
              answer: 'Avoiding recycled or secondhand clothing.',
              correct: false,
            },
          ],
        },
        {
          id: 'q20',
          question:
            'In a review of a documentary, the critic notes that it successfully blends personal narratives with scientific research to engage the audience.\n\nWhat makes this combination effective in conveying complex topics?',
          answers: [
            {
              id: 'q20a1',
              answer: 'Personal stories confuse viewers.',
              correct: false,
            },
            {
              id: 'q20a2',
              answer: 'Scientific data is more effective when isolated.',
              correct: false,
            },
            {
              id: 'q20a3',
              answer: 'Documentaries should avoid emotional content.',
              correct: false,
            },
            {
              id: 'q20a4',
              answer: 'Data should replace storytelling entirely.',
              correct: false,
            },
            {
              id: 'q20a5',
              answer:
                'Narratives humanize abstract concepts, making them relatable.',
              correct: true,
            }, // benar
          ],
        },
      ],
    },
  },

  // 7. Soal Quiz Try Out TL - Penalaran Matematika
  {
    id: 7,
    display_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    data: {
      id: 'tryout-quiz',
      duration: 1800,
      questions_answers: [
        {
          id: 'q1',
          question:
            'Pak Dhoni membeli motor di harga Rp 28.000.000. Jika ia ingin mendapat keuntungan 5% dari harga pembeliannya, berapa harga jual motor miliki Pak Dhoni?',
          answers: [
            { id: 'pm1', answer: 'Rp 29.200.000', correct: false },
            { id: 'pm2', answer: 'Rp 29.300.000', correct: false },
            { id: 'pm3', answer: 'Rp 29.400.000', correct: true }, //benar
            { id: 'pm4', answer: 'Rp 29.500.000', correct: false },
            { id: 'pm5', answer: 'Rp 29.600.000', correct: false },
          ],
        },
        {
          id: 'q2',
          question:
            'Target penyelesaian proyek jembatan di desa A adalah 1,5 bulan dengan pekerja 12 orang. Jika terdapat 2 orang yang mengundurkan diri dari proyek tersebut, berapa lama proyek tersebut akan selesai?',
          answers: [
            { id: 'pm6', answer: '54 hari', correct: true }, //benar
            { id: 'pm7', answer: '64 hari', correct: false },
            { id: 'pm8', answer: '74 hari', correct: false },
            { id: 'pm9', answer: '84 hari', correct: false },
            { id: 'pm10', answer: '94 hari', correct: false },
          ],
        },
        {
          id: 'q3',
          question:
            'Aldho membeli sepatu sneakers dengan harga Rp 3.480.000. Kemudian ia menjualnya dengan harga Rp 3.200.000. Berapa persen kerugian Aldho?',
          answers: [
            { id: 'pm11', answer: '7%', correct: false },
            { id: 'pm12', answer: '8%', correct: true }, //benar
            { id: 'pm13', answer: '9%', correct: false },
            { id: 'pm14', answer: '10%', correct: false },
            { id: 'pm15', answer: '11%', correct: false },
          ],
        },
        {
          id: 'q4',
          question:
            'Terdapat dua pesepeda yang sedang berkompetisi balap. Mereka memiliki kecepatan konstan sepanjang kompetisi. Karena jenis sepedanya, pesepeda B memiliki kecepatan 75% dari  pesepeda A. Namun pesepeda B diperbolehkan mulai 5 menit lebih dulu dari pesepeda A. Saat pesepeda A baru mulai, pesepeda B telah menyelesaikan 25% dari track kompetisi tersebut. Berapa menit yang diperlukan pesepeda A untuk menyelesaikan track kompetisi tersebut?',
          answers: [
            { id: 'pm16', answer: '5', correct: false },
            { id: 'pm17', answer: '10', correct: false },
            { id: 'pm18', answer: '15', correct: true }, //benar
            { id: 'pm19', answer: '20', correct: false },
            { id: 'pm20', answer: '25', correct: false },
          ],
        },
        {
          id: 'q5',
          question:
            'Selisih umur Tuti dan Della saat ini adalah 3 tahun. Jika 5 tahun yang lalu perbandingan umur Tuti dan Della adalah adalah 3 : 2. Maka berapa umur Della 10 tahun yang akan datang?',
          answers: [
            { id: 'pm21', answer: '11', correct: false },
            { id: 'pm22', answer: '21', correct: true }, //benar
            { id: 'pm23', answer: '31', correct: false },
            { id: 'pm24', answer: '41', correct: false },
            { id: 'pm25', answer: '51', correct: false },
          ],
        },
        {
          id: 'q6',
          question:
            'Diketahui terdapat penambahan biaya pengemasan sebesar Rp3.000,00 untuk setiap pengiriman. Jika Anggun ingin mengirim dua barang sekaligus dan satu barang terpisah, biaya termurah yang dikeluarkan Anggun adalah..',
          answers: [
            { id: 'pm26', answer: 'Rp44.650,00', correct: false },
            { id: 'pm27', answer: 'Rp43.750,00', correct: false },
            { id: 'pm28', answer: 'Rp37.400,00', correct: false },
            { id: 'pm29', answer: 'Rp32.500,00', correct: true }, //benar
            { id: 'pm30', answer: 'Rp20.150,00', correct: false },
          ],
        },
        {
          id: 'q7',
          question:
            'Dalam suatu gedung museum di Provinsi Jayabaya terdapat 11 baris kursi. Baris pertama berisi 10 kursi, baris kedua berisi 15 kursi, baris ketiga berisi 17 kursi, baris keempat berisi 22 kursi, baris ke lima berisi 24 kursi, dan seterusnya mengikuti pola yang sama. \n\nApabila dalam suatu pertunjukan museum hanya terisi setengah dari total kapasitas gedung, maka banyaknya kursi yang kosong dalam gedung teater tersebut adalah',
          answers: [
            { id: 'pm31', answer: '310', correct: false },
            { id: 'pm32', answer: '255', correct: false },
            { id: 'pm33', answer: '155', correct: true }, //benar
            { id: 'pm34', answer: '85', correct: false },
            { id: 'pm35', answer: '75', correct: false },
          ],
        },
        {
          id: 'q8',
          question:
            'Sebanyak dua orang karyawan swasta telah mendaftar sebagai peserta asuransi kesehatan dengan besar premi yang sama. Guna membayar premi asuransi tersebut, karyawan A yang memiliki gaji Rp6.000.000,00 akan dikenakan potongan gaji sebesar 4%, sedangkan karyawan B dikenakan potongan gaji sebesar 6%. \n\nBerdasarkan informasi tersebut, besar gaji karyawan B adalah',
          answers: [
            { id: 'pm36', answer: 'Rp5.000.000,00', correct: false },
            { id: 'pm37', answer: 'Rp5.500.000,00', correct: false },
            { id: 'pm38', answer: 'Rp4.500.000,00', correct: false },
            { id: 'pm39', answer: 'Rp4.000.000,00', correct: true }, //benar
            { id: 'pm40', answer: 'Rp3.500.000,00', correct: false },
          ],
        },
        {
          id: 'q9',
          question:
            'Suatu kelompok belajar terdiri dari siswa laki-laki dan siswa perempuan. Salah satu siswa laki-laki bernama Edo dan salah satu siswa perempuan bernama Tari. Banyak teman laki-laki Edo di kelompok belajar tersebut sama dengan setengah dari banyak siswa perempuan. Banyak teman perempuan Tari di kelompok belajar tersebut satu lebihnya dari banyak siswa laki-laki.\n\nSelisih banyaknya siswa laki-laki dan perempuan di kelompok belajar tersebut adalah...',
          answers: [
            { id: 'pm41', answer: '0 siswa', correct: false },
            { id: 'pm42', answer: '1 siswa', correct: false },
            { id: 'pm43', answer: '2 siswa', correct: false },
            { id: 'pm44', answer: '3 siswa', correct: true }, //benar
            { id: 'pm45', answer: '4 siswa', correct: false },
          ],
        },
        {
          id: 'q10',
          question:
            'Suatu kelompok belajar terdiri dari siswa laki-laki dan siswa perempuan. Salah satu siswa laki-laki bernama Edo dan salah satu siswa perempuan bernama Tari. Banyak teman laki-laki Edo di kelompok belajar tersebut sama dengan setengah dari banyak siswa perempuan. Banyak teman perempuan Tari di kelompok belajar tersebut satu lebihnya dari banyak siswa laki-laki.\n\nJumlah seluruh siswa di kelompok belajar tersebut adalah...',
          answers: [
            { id: 'pm46', answer: '3 siswa', correct: false },
            { id: 'pm47', answer: '4 siswa', correct: false },
            { id: 'pm48', answer: '6 siswa', correct: false },
            { id: 'pm49', answer: '8 siswa', correct: false },
            { id: 'pm50', answer: '10 siswa', correct: true }, //benar
          ],
        },
        {
          id: 'q11',
          question:
            'Suatu kelompok belajar terdiri dari siswa laki-laki dan siswa perempuan. Salah satu siswa laki-laki bernama Edo dan salah satu siswa perempuan bernama Tari. Banyak teman laki-laki Edo di kelompok belajar tersebut sama dengan setengah dari banyak siswa perempuan. Banyak teman perempuan Tari di kelompok belajar tersebut satu lebihnya dari banyak siswa laki-laki.\n\nJika siswa laki-laki bertambah 1 dan siswa perempuan berkurang 1, perbandingan banyak siswa laki-laki dan perempuan di kelompok tersebut adalah...',
          answers: [
            { id: 'pm51', answer: '1:1', correct: true }, //benar
            { id: 'pm52', answer: '1:2', correct: false },
            { id: 'pm53', answer: '2:1', correct: false },
            { id: 'pm54', answer: '2:3', correct: false },
            { id: 'pm55', answer: '3:4', correct: false },
          ],
        },
        {
          id: 'q12',
          question:
            'Suatu kelompok belajar terdiri dari siswa laki-laki dan siswa perempuan. Salah satu siswa laki-laki bernama Edo dan salah satu siswa perempuan bernama Tari. Banyak teman laki-laki Edo di kelompok belajar tersebut sama dengan setengah dari banyak siswa perempuan. Banyak teman perempuan Tari di kelompok belajar tersebut satu lebihnya dari banyak siswa laki-laki.\n\nBanyak cara memilih 2 orang siswa jika setidaknya terpilih 1 orang siswa laki-laki adalah',
          answers: [
            { id: 'pm56', answer: '6', correct: false },
            { id: 'pm57', answer: '12', correct: false },
            { id: 'pm58', answer: '24', correct: false },
            { id: 'pm59', answer: '30', correct: true }, //benar
            { id: 'pm60', answer: '36', correct: false },
          ],
        },
        {
          id: 'q13',
          question:
            'Pada saat pukul 04.30 sore, seorang anak yang berdiri di tengah lapangan memiliki panjang bayangan 225 cm. Jika tinggi anak tersebut 135 cm, maka panjang bayangan anak lain yang memiliki tinggi 120 cm adalah',
          answers: [
            { id: 'pm61', answer: '180 cm', correct: false },
            { id: 'pm62', answer: '200 cm', correct: true }, //benar
            { id: 'pm63', answer: '240 cm', correct: false },
            { id: 'pm64', answer: '260 cm', correct: false },
            { id: 'pm65', answer: '280 cm', correct: false },
          ],
        },
        {
          id: 'q14',
          question:
            'Pak Dio akan memasang keramik di teras rumah. Keramik yang akan digunakan berukuran 25cm * 25 cm dan diperlukan 40 buah keramik. Jika digunakan keramik yang berukuran 50 cm * 50 cm maka jumlah keramik yang diperlukan adalah...',
          answers: [
            { id: 'pm66', answer: '10 buah', correct: true }, //benar
            { id: 'pm67', answer: '15 buah', correct: false },
            { id: 'pm68', answer: '18 buah', correct: false },
            { id: 'pm69', answer: '20 buah', correct: false },
            { id: 'pm70', answer: '25 buah', correct: false },
          ],
        },
        {
          id: 'q15',
          question:
            'Sebuah kelompok siswa terdiri dari 50 orang. Dalam kelompok tersebut, 28 orang menyukai matematika, 22 orang menyukai fisika, dan 18 orang menyukai keduanya. Jika setiap siswa dalam kelompok ini menyukai setidaknya satu mata pelajaran, berapa jumlah siswa yang hanya menyukai fisika?',
          answers: [
            { id: 'pm71', answer: '4', correct: false },
            { id: 'pm72', answer: '6', correct: true },
            { id: 'pm73', answer: '8', correct: false },
            { id: 'pm74', answer: '10', correct: false },
            { id: 'pm75', answer: '12', correct: false },
          ],
        },
        {
          id: 'q16',
          question:
            'Amir membutuhkan waktu 3,5 jam untuk menempuh perjalanan sejauh 215,5 km. Berapa kecepatan yang dibutuhkan agar Amir bisa tiba 1/2 jam lebih cepat?',
          answers: [
            { id: 'pm76', answer: '83,17 km/jam', correct: false },
            { id: 'pm77', answer: '83,71 km/jam', correct: false },
            { id: 'pm78', answer: '71,38 km/jam', correct: false },
            { id: 'pm79', answer: '71,83 km/jam', correct: true }, //benar
            { id: 'pm80', answer: '61,38 km/jam', correct: false },
          ],
        },
        {
          id: 'q17',
          question:
            'Kecepatan Dewin dalam mengendarai motor adalah 80 km/jam dengan waktu 30 menit. Jika ia menurunkan kecepatan menjadi 60 km/jam, berapa waktu yang dibutuhkan Dewin?',
          answers: [
            { id: 'pm81', answer: '10 menit', correct: false },
            { id: 'pm82', answer: '20 menit', correct: false },
            { id: 'pm83', answer: '30 menit', correct: false },
            { id: 'pm84', answer: '40 menit', correct: true }, //benar
            { id: 'pm85', answer: '50 menit', correct: false },
          ],
        },
        {
          id: 'q18',
          question:
            'Rata-rata nilai IPA Lesti pada lima semester sebagai berikut 81, 89, 78, 80, 82. Jika pada semester keenam Lesti menginginkan rata-ratanya menjadi 84. Berapa nilai yang harus Lesti peroleh pada semester keenam?',
          answers: [
            { id: 'pm86', answer: '94', correct: true }, //benar
            { id: 'pm87', answer: '92', correct: false },
            { id: 'pm88', answer: '90', correct: false },
            { id: 'pm89', answer: '88', correct: false },
            { id: 'pm90', answer: '80', correct: false },
          ],
        },
        {
          id: 'q19',
          question:
            'Desa X terkena wabah penyakit. Desa X terdiri dari 714 keluarga dengan rata-rata jumlah anggota setiap keluarga adalah 3 orang dan jumlah orang dewasa seluruhnya yaitu 1740 orang, serta menyerang 1 ½ dari jumlah anak-anak. Berapa orang anak yang terkena penyakit tersebut?',
          answers: [
            { id: 'pm91', answer: '303', correct: false },
            { id: 'pm92', answer: '403', correct: false },
            { id: 'pm93', answer: '503', correct: false },
            { id: 'pm94', answer: '553', correct: false },
            { id: 'pm95', answer: '603', correct: true }, //benar
          ],
        },
        {
          id: 'q20',
          question:
            'Andreas, Bobi, Candra, dan Dedi membagi 72 buah durian. Andreas menerima 5 buah lebih banyak daripada yang diterima Bobi, 13 buah lebih banyak daripada yang diterima Dedi, dan 16 lebih banyak yang diterima Candra. Jadi banyaknya durian yang diterima Andreas adalah',
          answers: [
            { id: 'pm96', answer: '26', correct: false },
            { id: 'pm97', answer: '26,5', correct: true }, //benar
            { id: 'pm98', answer: '27', correct: false },
            { id: 'pm99', answer: '27,5', correct: false },
            { id: 'pm100', answer: '28', correct: false },
          ],
        },
      ],
    },
  },
];
