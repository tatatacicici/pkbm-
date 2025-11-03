export const TesKepemimpinanBreadcrumb = [
  {
    name: 'Beranda',
    link: '/Beranda',
  },
  {
    name: 'Tes Kepemimpinan',
    link: '/tes-kepemimpinan',
  },
];

// UNTUK OSIS

export const quizOsisInfoDummyData = {
  subject: {
    name: 'OSIS',
  },
  session: {
    session_no: 1,
  },
  quiz: {
    title: 'Tes Kepemimpinan',
    categoryQuiz: 'OSIS',
    total_questions: 30,
    question_point: 3.33,
    passing_score: 30 * 3.33 * 0.7, // total_questions x question_point x minimal brp persen
    duration: 3000, // (3000 detik = 50 menit
    remaining_attempts: 3,
  },
};

export const quizOsisTakeDummyData = {
  data: {
    id: 'osis-quiz',
    duration: 3000, // (3000 detik = 50 menit)
    questions_answers: [
      // Soal Mudah
      {
        id: 'q1',
        question:
          'Sebagai ketua OSIS, hal pertama yang harus kamu lakukan saat mulai menjabat adalah...',
        answers: [
          {
            id: 'a1',
            answer: 'Menegur pengurus yang tidak disiplin',
            correct: false,
          },
          { id: 'a2', answer: 'Mengusulkan kegiatan besar', correct: false },
          { id: 'a3', answer: 'Membuat jadwal rapat rutin', correct: true }, // BENAR
          { id: 'a4', answer: 'Membubarkan struktur lama', correct: false },
        ],
      },
      {
        id: 'q2',
        question:
          'Dalam rapat, seorang teman selalu memotong pembicaraan. Sikap kamu sebaiknya...',
        answers: [
          {
            id: 'b1',
            answer: 'Menegurnya dengan sopan di luar rapat',
            correct: true,
          }, // BENAR
          {
            id: 'b2',
            answer: 'Memarahinya langsung di depan umum',
            correct: false,
          },
          {
            id: 'b3',
            answer: 'Diam saja agar rapat selesai cepat',
            correct: false,
          },
          {
            id: 'b4',
            answer: 'Membiarkannya karena dia lebih senior',
            correct: false,
          },
        ],
      },
      {
        id: 'q3',
        question:
          'Jika anggota OSIS datang terlambat terus-menerus, kamu sebagai pemimpin harus...',
        answers: [
          { id: 'c1', answer: 'Mengeluarkannya dari OSIS', correct: false },
          {
            id: 'c2',
            answer: 'Menyuruh teman lain menegurnya',
            correct: false,
          },
          {
            id: 'c3',
            answer: 'Membiarkannya asal kerja selesai',
            correct: false,
          },
          { id: 'c4', answer: 'Memberi peringatan lisan', correct: true }, // BENAR
        ],
      },
      {
        id: 'q4',
        question:
          'Seorang pengurus OSIS tidak hadir tanpa alasan. Langkah terbaik?',
        answers: [
          {
            id: 'd1',
            answer: 'Menghubunginya dan menanyakan alasan',
            correct: true,
          }, // BENAR
          {
            id: 'd2',
            answer: 'Menyebarkan di grup bahwa dia tidak bertanggung jawab',
            correct: false,
          },
          {
            id: 'd3',
            answer: 'Menggantinya dengan orang lain',
            correct: false,
          },
          { id: 'd4', answer: 'Tidak perlu ditindaklanjuti', correct: false },
        ],
      },
      {
        id: 'q5',
        question:
          'OSIS berencana membuat lomba. Hal paling penting sebelum memulai adalah...',
        answers: [
          {
            id: 'e1',
            answer: 'Menentukan siapa yang akan juara',
            correct: false,
          },
          { id: 'e2', answer: 'Memilih MC dan panitia', correct: false },
          {
            id: 'e3',
            answer: 'Membagikan pamflet ke semua siswa',
            correct: false,
          },
          {
            id: 'e4',
            answer: 'Menyusun proposal dan timeline kegiatan',
            correct: true,
          }, // BENAR
        ],
      },
      {
        id: 'q6',
        question: 'Jika ide kamu ditolak mayoritas anggota, kamu akan...',
        answers: [
          { id: 'f1', answer: 'Memaksakan karena kamu ketua', correct: false },
          {
            id: 'f2',
            answer: 'Menyuruh yang lain membuat ide baru',
            correct: false,
          },
          {
            id: 'f3',
            answer: 'Menerima dan mencari jalan tengah',
            correct: true,
          }, // BENAR
          { id: 'f4', answer: 'Marah dan keluar dari rapat', correct: false },
        ],
      },
      {
        id: 'q7',
        question:
          'Seorang siswa ingin mengusulkan kegiatan ke OSIS. Sikap kamu sebaiknya...',
        answers: [
          {
            id: 'g1',
            answer: 'Menerima usul dan membawanya ke rapat',
            correct: true,
          }, // BENAR
          {
            id: 'g2',
            answer: 'Menyuruh dia cari sponsor sendiri',
            correct: false,
          },
          { id: 'g3', answer: 'Mengabaikannya karena sibuk', correct: false },
          {
            id: 'g4',
            answer: 'Menolaknya karena bukan pengurus',
            correct: false,
          },
        ],
      },
      {
        id: 'q8',
        question:
          'Rapat berjalan lama dan tidak efisien. Sebagai pemimpin, kamu...',
        answers: [
          { id: 'h1', answer: 'Mengakhiri tanpa kesimpulan', correct: false },
          {
            id: 'h2',
            answer: 'Mengarahkan kembali ke topik utama',
            correct: true,
          }, // BENAR
          { id: 'h3', answer: 'Diam saja dan membiarkan', correct: false },
          {
            id: 'h4',
            answer: 'Menyuruh orang lain jadi pemimpin',
            correct: false,
          },
        ],
      },
      {
        id: 'q9',
        question:
          'Ketika terjadi konflik antara dua anggota OSIS, kamu harus...',
        answers: [
          {
            id: 'i1',
            answer: 'Menyuruh mereka menyelesaikan sendiri',
            correct: false,
          },
          { id: 'i2', answer: 'Memihak teman dekat', correct: false },
          { id: 'i3', answer: 'Mengusir salah satu dari OSIS', correct: false },
          {
            id: 'i4',
            answer: 'Menengahi dan mencari solusi bersama',
            correct: true,
          }, // BENAR
        ],
      },
      {
        id: 'q10',
        question:
          'Salah satu anggota OSIS menghilangkan dokumen penting. Kamu akan...',
        answers: [
          { id: 'j1', answer: 'Menyalahkannya terus menerus', correct: false },
          {
            id: 'j2',
            answer: 'Mengajak mencari dan memperbaiki bersama',
            correct: true,
          }, // BENAR
          {
            id: 'j3',
            answer: 'Melaporkannya ke kepala sekolah langsung',
            correct: false,
          },
          {
            id: 'j4',
            answer: 'Diamkan saja dan tidak dibahas',
            correct: false,
          },
        ],
      },

      // Soal Sedang
      {
        id: 'q11',
        question:
          'Dalam rapat OSIS, sebagian anggota merasa tidak didengar. Sebagai ketua, apa tindakan terbaik?',
        answers: [
          {
            id: 'k1',
            answer: 'Mengatur waktu bicara agar semua didengar',
            correct: true,
          }, // (BENAR)
          {
            id: 'k2',
            answer: 'Membiarkan mereka berbicara sendiri-sendiri',
            correct: false,
          },
          {
            id: 'k3',
            answer: 'Fokus pada pendapat mayoritas saja',
            correct: false,
          },
          {
            id: 'k4',
            answer: 'Menyuruh mereka berbicara lebih keras',
            correct: false,
          },
          {
            id: 'k5',
            answer: 'Menunda rapat sampai suasana tenang',
            correct: false,
          },
        ],
      },
      {
        id: 'q12',
        question:
          'Seorang anggota OSIS mengusulkan ide kegiatan sosial, tapi tidak sejalan dengan program kerja awal. Sikapmu?',
        answers: [
          {
            id: 'l1',
            answer: 'Menolak karena tidak ada di rencana',
            correct: false,
          },
          {
            id: 'l2',
            answer: 'Menerima karena demi demokrasi',
            correct: false,
          },
          {
            id: 'l3',
            answer: 'Mempertimbangkan dan diskusikan kembali bersama pengurus',
            correct: true,
          }, // (BENAR)
          {
            id: 'l4',
            answer: 'Menjalankan tanpa perlu persetujuan',
            correct: false,
          },
        ],
      },
      {
        id: 'q13',
        question:
          'Saat kamu izin tidak hadir rapat, wakil ketua membuat keputusan penting tanpa diskusi. Reaksi terbaik?',
        answers: [
          { id: 'm1', answer: 'Membatalkan keputusannya', correct: false },
          { id: 'm2', answer: 'Menegurnya di depan umum', correct: false },
          { id: 'm3', answer: 'Menerima karena dia berwenang', correct: false },
          {
            id: 'm4',
            answer: 'Mengevaluasi keputusan dan diskusikan secara internal',
            correct: true,
          }, // (BENAR)
        ],
      },
      {
        id: 'q14',
        question:
          'Kamu melihat beberapa anggota pasif di kegiatan OSIS. Tindakan paling tepat?',
        answers: [
          {
            id: 'n1',
            answer: 'Memindahkan tugas ke orang lain',
            correct: false,
          },
          {
            id: 'n2',
            answer: 'Memberi tugas lebih agar aktif',
            correct: false,
          },
          {
            id: 'n3',
            answer: 'Ajak berdiskusi untuk memahami hambatan mereka',
            correct: true,
          }, // (BENAR)
          {
            id: 'n4',
            answer: 'Umumkan secara terbuka agar mereka malu',
            correct: false,
          },
        ],
      },
      {
        id: 'q15',
        question:
          'Jika OSIS harus memilih kegiatan antara lomba akademik atau seni, dan kamu tahu siswa lebih tertarik pada seni, kamu akan...',
        answers: [
          {
            id: 'o1',
            answer:
              'Diskusikan untuk mencari kombinasi atau prioritas seimbang',
            correct: true,
          }, // (BENAR)
          { id: 'o2', answer: 'Pilih seni karena populer', correct: false },
          { id: 'o3', answer: 'Pilih akademik karena penting', correct: false },
          { id: 'o4', answer: 'Serahkan pada kepala sekolah', correct: false },
        ],
      },
      {
        id: 'q16',
        question:
          'Dalam rapat penting, kamu ditegur guru pembina karena pendapatmu berbeda. Sikapmu sebaiknya...',
        answers: [
          { id: 'p1', answer: 'Mengikuti saja tanpa protes', correct: false },
          {
            id: 'p2',
            answer:
              'Menyampaikan pendapat dengan sopan dan siap menerima masukan',
            correct: true,
          }, // (BENAR)
          { id: 'p3', answer: 'Menarik diri dari diskusi', correct: false },
          {
            id: 'p4',
            answer: 'Tetap mempertahankan argumen secara keras',
            correct: false,
          },
        ],
      },
      {
        id: 'q17',
        question:
          'Seorang anggota OSIS tidak bisa hadir dalam 3 rapat berturut-turut karena urusan keluarga. Apa sikapmu?',
        answers: [
          {
            id: 'q1',
            answer: 'Menanyakan kondisinya dan menyesuaikan peran sementara',
            correct: true,
          }, // (BENAR)
          {
            id: 'q2',
            answer: 'Mengabaikannya demi kelancaran',
            correct: false,
          },
          { id: 'q3', answer: 'Mengeluarkannya dari jabatan', correct: false },
          { id: 'q4', answer: 'Menggantinya diam-diam', correct: false },
        ],
      },
      {
        id: 'q18',
        question:
          'Kamu diberi kepercayaan memegang uang kegiatan OSIS, namun temanmu meminta "pinjam sebentar". Sikapmu?',
        answers: [
          {
            id: 'r1',
            answer: 'Meminjamkan karena dia teman dekat',
            correct: false,
          },
          {
            id: 'r2',
            answer: 'Menyuruhnya buat catatan peminjaman',
            correct: false,
          },
          {
            id: 'r3',
            answer: 'Meminta persetujuan dari pengurus lain baru memberikannya',
            correct: false,
          },
          {
            id: 'r4',
            answer:
              'Menolak dengan tegas karena uang OSIS harus aman dan transparan',
            correct: true,
          },
        ],
      },
      {
        id: 'q19',
        question:
          'Wakilmu sangat populer dan lebih disukai teman-teman. Kamu...',
        answers: [
          {
            id: 's1',
            answer: 'Membatasi perannya agar seimbang',
            correct: false,
          },
          {
            id: 's2',
            answer: 'Membiarkannya memimpin lebih banyak',
            correct: false,
          },
          {
            id: 's3',
            answer: 'Berkolaborasi dan manfaatkan kelebihannya demi OSIS',
            correct: true,
          }, // (BENAR)
          { id: 's4', answer: 'Menyarankan dia pindah divisi', correct: false },
        ],
      },
      {
        id: 'q20',
        question:
          'Kegiatan OSIS harus disiapkan cepat, tapi kamu sedang ada ujian penting. Pilihan terbaik?',
        answers: [
          {
            id: 't1',
            answer: 'Utamakan ujian, tunda kegiatan',
            correct: false,
          },
          {
            id: 't2',
            answer:
              'Delegasikan tugas sementara dan tetap awasi secara proporsional',
            correct: true,
          }, // (BENAR)
          {
            id: 't3',
            answer: 'Fokus ke kegiatan, nilai bukan prioritas',
            correct: false,
          },
          { id: 't4', answer: 'Kerjakan keduanya tanpa tidur', correct: false },
        ],
      },

      // Soal Sulit (update)
      {
        id: 'q21',
        question:
          'Kamu mengetahui bahwa salah satu pengurus OSIS yang sangat aktif ternyata sering menghina siswa lain lewat akun media sosial anonim. Tidak ada yang tahu kecuali kamu. Apa yang kamu lakukan sebagai ketua OSIS?',
        answers: [
          {
            id: 'u1',
            answer:
              'Menasihatinya secara pribadi agar berhenti dan berharap dia tidak mengulanginya karena kamu tidak ingin menurunkan moral tim.',
            correct: false,
          },
          {
            id: 'u2',
            answer:
              'Mengabaikannya karena selama ini dia sangat berjasa untuk OSIS dan kamu tidak ingin tim kehilangan orang penting.',
            correct: false,
          },
          {
            id: 'u3',
            answer:
              'Mengonfirmasi kebenarannya, berbicara pribadi, dan melibatkan pembina OSIS agar penanganan berjalan sesuai aturan tanpa main hakim sendiri.',
            correct: true,
          }, // (BENAR)
          {
            id: 'u4',
            answer:
              'Membawa isu ini ke rapat OSIS agar anggota lain turut menilai dan memberikan tekanan sosial agar dia jera.',
            correct: false,
          },
        ],
      },
      {
        id: 'q22',
        question:
          'OSIS mendapat tawaran sponsor dari perusahaan besar dengan dana bantuan kegiatan yang sangat dibutuhkan, tetapi sebagai imbalannya kalian harus mempromosikan produk makanan yang bertentangan dengan kampanye hidup sehat di sekolah. Tindakanmu?',
        answers: [
          {
            id: 'v1',
            answer:
              'Meninjau ulang tujuan kegiatan, mendiskusikan dengan tim dan pembina, lalu menilai apakah kerja sama bisa diubah tanpa mengorbankan nilai edukatif OSIS.',
            correct: true,
          }, // (BENAR)
          {
            id: 'v2',
            answer:
              'Menerima sponsor tersebut karena OSIS memang butuh dana dan promosinya hanya sebatas logo, tidak terlalu berpengaruh.',
            correct: false,
          },
          {
            id: 'v3',
            answer:
              'Menolak langsung tanpa diskusi karena kamu merasa hal tersebut pasti ditolak sekolah.',
            correct: false,
          },
          {
            id: 'v4',
            answer:
              'Menerima tawaran dengan syarat bahwa OSIS juga membuat kampanye tandingan untuk menyeimbangkan informasi.',
            correct: false,
          },
        ],
      },
      {
        id: 'q23',
        question:
          'Sebuah kegiatan sosial OSIS di luar sekolah tidak berjalan dengan baik. Warga kecewa karena bantuan tidak sesuai janji. Beberapa pengurus menyarankan agar hal ini tidak ditulis dalam laporan untuk menjaga citra OSIS. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'w1',
            answer:
              'Menulis laporan yang lebih positif tapi tetap mencantumkan poin umum sebagai bentuk tanggung jawab.',
            correct: false,
          },
          {
            id: 'w2',
            answer:
              'Menyusun laporan yang jujur dan detail mengenai kekurangan kegiatan, lalu menambahkan solusi dan evaluasi agar ada perbaikan ke depan.',
            correct: true,
          }, // (BENAR)
          {
            id: 'w3',
            answer:
              'Menyerahkan pembuatan laporan ke guru pembina agar kamu tidak dianggap menyalahkan pengurus lain.',
            correct: false,
          },
          {
            id: 'w4',
            answer:
              'Menunda pelaporan sampai suasana reda agar tidak menjadi pembicaraan negatif di sekolah.',
            correct: false,
          },
        ],
      },
      {
        id: 'q24',
        question:
          'Dalam rapat besar, kamu sebagai ketua OSIS mendapat kritik keras dari beberapa anggota. Kritik itu sebagian benar, tapi disampaikan dengan nada emosional. Apa sikap terbaikmu?',
        answers: [
          {
            id: 'x1',
            answer:
              'Menanggapi satu per satu kritik mereka dan menjelaskan alasan dari semua keputusanmu agar mereka mengerti.',
            correct: false,
          },
          {
            id: 'x2',
            answer:
              'Mengklarifikasi bahwa mereka boleh menyampaikan kritik, tapi sebaiknya dengan sopan dan pada waktu yang tepat.',
            correct: false,
          },
          {
            id: 'x3',
            answer:
              'Menerima semua kritik dengan kepala dingin, lalu tanggapi secara terstruktur untuk mencari perbaikan bersama tanpa mempertahankan ego.',
            correct: true,
          }, // (BENAR)
          {
            id: 'x4',
            answer:
              'Mengajak pembina OSIS untuk memberikan penilaian netral agar tidak timbul konflik internal.',
            correct: false,
          },
        ],
      },
      {
        id: 'q25',
        question:
          'Ada tuduhan dari luar bahwa OSIS menyalahgunakan dana dalam sebuah kegiatan. Kamu tahu tidak ada penyelewengan, tapi opini siswa sudah negatif. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'y1',
            answer:
              'Menyampaikan laporan terbuka mengenai dana kegiatan, disertai bukti dan penjelasan, untuk membangun transparansi dan kepercayaan kembali.',
            correct: true,
          }, // (BENAR)
          {
            id: 'y2',
            answer:
              'Membantah dengan tegas melalui media sosial OSIS agar opini publik berubah.',
            correct: false,
          },
          {
            id: 'y3',
            answer:
              'Minta guru pembina menyampaikan klarifikasi secara resmi karena lebih dipercaya siswa.',
            correct: false,
          },
          {
            id: 'y4',
            answer:
              'Membuat sesi tanya-jawab informal di kelas-kelas agar siswa tahu bahwa tuduhan itu tidak benar.',
            correct: false,
          },
        ],
      },
      {
        id: 'q26',
        question:
          'Sebuah spanduk kegiatan OSIS dicetak dengan logo sponsor yang salah dan kegiatan dimulai esok pagi. Dana untuk cetak ulang hampir tidak tersedia dan waktu sangat terbatas. Tindakan terbaik?',
        answers: [
          {
            id: 'z1',
            answer:
              'Tetap gunakan spanduk yang salah, lalu minta maaf setelah acara lewat.',
            correct: false,
          },
          {
            id: 'z2',
            answer:
              'Hapus bagian logo yang salah secara manual karena yang penting acara tetap jalan.',
            correct: false,
          },
          {
            id: 'z3',
            answer:
              'Cetak ulang dengan uang pribadi dulu, lalu minta penggantian nanti setelah kegiatan.',
            correct: false,
          },
          {
            id: 'z4',
            answer:
              'Segera komunikasi dengan sponsor dan pembina untuk mencari solusi terbaik yang tetap menjaga profesionalisme OSIS dan hubungan baik dengan pihak sponsor.',
            correct: true,
          }, // (BENAR)
        ],
      },
      {
        id: 'q27',
        question:
          'Seorang anggota OSIS adalah teman dekatmu, tapi ia sangat jarang hadir rapat dan selalu terlambat mengerjakan tugas. Pengurus lain mulai terganggu. Sikapmu?',
        answers: [
          {
            id: 'aa1',
            answer:
              'Memberi toleransi lebih karena kamu tahu kesulitannya di rumah dan tidak ingin mempermalukannya.',
            correct: false,
          },
          {
            id: 'aa2',
            answer:
              'Memberinya tugas-tugas yang lebih ringan agar tetap terlibat meski minim kontribusi.',
            correct: false,
          },
          {
            id: 'aa3',
            answer:
              'Mengajaknya berbicara empat mata secara jujur dan objektif, lalu mendiskusikan langkah tindak lanjut bersama tim agar adil dan tidak bias.',
            correct: true,
          }, // (BENAR)
          {
            id: 'aa4',
            answer:
              'Membela dia saat dibahas dalam rapat karena kamu tahu dia memang sedang tidak dalam kondisi stabil.',
            correct: false,
          },
        ],
      },
      {
        id: 'q28',
        question:
          'Saat acara sekolah selesai, kepala sekolah menyampaikan pujian atas keberhasilan OSIS. Namun, kamu tahu keberhasilan besar berasal dari panitia luar OSIS. Apa yang sebaiknya kamu lakukan?',
        answers: [
          {
            id: 'bb1',
            answer:
              'Menerima pujian dan nanti menyampaikan terima kasih ke panitia luar secara pribadi.',
            correct: false,
          },
          {
            id: 'bb2',
            answer:
              'Menerima pujian dengan hormat lalu menyampaikan secara terbuka bahwa keberhasilan acara juga sangat dibantu oleh panitia luar, sebagai bentuk penghargaan yang adil.',
            correct: true,
          }, // (BENAR)
          {
            id: 'bb3',
            answer:
              'Memastikan seluruh tim OSIS menyampaikan apresiasi kepada panitia luar tanpa perlu membuatnya formal.',
            correct: false,
          },
          {
            id: 'bb4',
            answer:
              'Biarkan pujian itu jadi motivasi OSIS dan gunakan kesempatan berikutnya untuk melibatkan panitia luar lebih banyak.',
            correct: false,
          },
        ],
      },
      {
        id: 'q29',
        question:
          'Kamu ditunjuk mewakili OSIS dalam forum nasional untuk menyampaikan pandangan organisasi. Kamu merasa belum cukup percaya diri, tapi ini kesempatan langka. Apa keputusan terbaik?',
        answers: [
          {
            id: 'cc1',
            answer:
              'Menolak dan merekomendasikan orang lain yang lebih berpengalaman agar OSIS tetap tampil maksimal.',
            correct: false,
          },
          {
            id: 'cc2',
            answer:
              'Menyampaikan materi seadanya dengan harapan pengurus lain bisa menambahkan saat forum berlangsung.',
            correct: false,
          },
          {
            id: 'cc3',
            answer:
              'Mengajak teman bicara bersama agar bebanmu terbagi dan kamu lebih tenang dalam forum.',
            correct: false,
          },
          {
            id: 'cc4',
            answer:
              'Menerima tugas dengan sungguh-sungguh, mempersiapkan materi, dan meminta pendampingan guru serta latihan agar lebih siap secara mental.',
            correct: true,
          }, // (BENAR)
        ],
      },
      {
        id: 'q30',
        question:
          'Kepala sekolah meminta OSIS membantu menjalankan program literasi yang siswa nilai membosankan. Jika OSIS terlibat penuh, bisa jadi reputasi kalian ikut menurun di mata siswa. Apa sikapmu sebagai ketua?',
        answers: [
          {
            id: 'dd1',
            answer:
              'Menolak dengan alasan program tidak sejalan dengan aspirasi siswa dan bisa menurunkan antusiasme terhadap OSIS.',
            correct: false,
          },
          {
            id: 'dd2',
            answer:
              'Menjalankan program secara kreatif dan membuat pendekatan yang menarik, lalu mengomunikasikan kepada siswa alasan OSIS mendukung program tersebut.',
            correct: true,
          }, // (BENAR)
          {
            id: 'dd3',
            answer:
              'Menjalankan program seadanya, tanpa promosi besar-besaran agar tidak mengundang banyak perhatian.',
            correct: false,
          },
          {
            id: 'dd4',
            answer:
              'Meminta pembina menjalankan program itu saja, karena OSIS sedang fokus pada kegiatan lain yang lebih disukai siswa.',
            correct: false,
          },
        ],
      },
    ],
  },
};

// UNTUK PRAMUKA

export const quizPramukaInfoDummyData = {
  subject: {
    name: 'Pramuka',
  },
  session: {
    session_no: 2,
  },
  quiz: {
    title: 'Tes Kepemimpinan',
    categoryQuiz: 'Pramuka',
    total_questions: 30,
    question_point: 3.33,
    passing_score: 30 * 3.33 * 0.7, // total_questions x question_point x minimal brp persen
    duration: 3000, // (3000 detik = 50 menit
    remaining_attempts: 3,
  },
};

export const quizPramukaTakeDummyData = {
  data: {
    id: 'pramuka-quiz',
    duration: 3000, // (3000 detik = 50 menit)
    questions_answers: [
      // Soal Mudah
      {
        id: 'q1',
        question: 'Apa tujuan utama kegiatan Pramuka?',
        answers: [
          { id: 'a1', answer: 'Mengumpulkan poin untuk lomba', correct: false },
          { id: 'a2', answer: 'Bermain bersama tanpa aturan', correct: false },
          { id: 'a3', answer: 'Hanya jalan-jalan di alam', correct: false },
          {
            id: 'a4',
            answer: 'Melatih kedisiplinan dan kepemimpinan',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q2',
        question: 'Apa sikap terbaik saat mengikuti upacara bendera Pramuka?',
        answers: [
          { id: 'b1', answer: 'Main HP saat upacara', correct: false },
          {
            id: 'b2',
            answer:
              'Berpakaian rapi dan khidmat mengikuti seluruh rangkaian upacara',
            correct: true,
          }, // Benar
          {
            id: 'b3',
            answer: 'Datang terlambat tapi tetap ikut upacara',
            correct: false,
          },
          {
            id: 'b4',
            answer: 'Bicara dan tertawa selama upacara',
            correct: false,
          },
        ],
      },
      {
        id: 'q3',
        question:
          'Saat menjadi pemimpin barisan dalam apel, apa tugas utamamu?',
        answers: [
          {
            id: 'c1',
            answer: 'Memastikan barisan rapi dan anggota mengikuti aba-aba',
            correct: true,
          }, // Benar
          {
            id: 'c2',
            answer: 'Berjalan duluan tanpa memperhatikan anggota',
            correct: false,
          },
          { id: 'c3', answer: 'Bermain-main dengan anggota', correct: false },
          {
            id: 'c4',
            answer: 'Berbicara dengan pembina selama apel',
            correct: false,
          },
        ],
      },
      {
        id: 'q4',
        question: 'Kenapa Pramuka penting untuk remaja?',
        answers: [
          { id: 'd1', answer: 'Untuk jadi juara lomba saja', correct: false },
          { id: 'd2', answer: 'Supaya tidak sekolah', correct: false },
          {
            id: 'd3',
            answer:
              'Untuk membentuk karakter disiplin, tanggung jawab, dan kerja sama',
            correct: true,
          }, // Benar
          {
            id: 'd4',
            answer: 'Agar bisa berlibur dengan teman',
            correct: false,
          },
        ],
      },
      {
        id: 'q5',
        question: 'Apa arti salam Pramuka?',
        answers: [
          { id: 'e1', answer: 'Cara untuk menghindari tugas', correct: false },
          {
            id: 'e2',
            answer: 'Cara untuk bersaing satu sama lain',
            correct: false,
          },
          { id: 'e3', answer: 'Isyarat untuk pulang cepat', correct: false },
          {
            id: 'e4',
            answer: 'Simbol persaudaraan dan penghormatan antar anggota',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q6',
        question:
          'Saat bertugas sebagai pengatur acara kemah, apa yang harus kamu lakukan?',
        answers: [
          { id: 'f1', answer: 'Menunda kegiatan tanpa alasan', correct: false },
          {
            id: 'f2',
            answer:
              'Mengatur waktu dan memastikan semua kegiatan berjalan sesuai jadwal',
            correct: true,
          }, // Benar
          {
            id: 'f3',
            answer: 'Membiarkan anggota bebas melakukan apapun',
            correct: false,
          },
          {
            id: 'f4',
            answer: 'Hanya datang saat kegiatan utama',
            correct: false,
          },
        ],
      },
      {
        id: 'q7',
        question: 'Bagaimana cara menjaga keamanan saat kegiatan outdoor?',
        answers: [
          {
            id: 'g1',
            answer: 'Berlomba-lomba tanpa memikirkan bahaya',
            correct: false,
          },
          {
            id: 'g2',
            answer: 'Tidak memakai perlengkapan karena ribet',
            correct: false,
          },
          {
            id: 'g3',
            answer:
              'Mematuhi aturan, memakai perlengkapan keselamatan, dan waspada terhadap lingkungan',
            correct: true,
          }, // Benar
          {
            id: 'g4',
            answer: 'Membiarkan anggota bertindak bebas tanpa pengawasan',
            correct: false,
          },
        ],
      },
      {
        id: 'q8',
        question:
          'Apa yang harus dilakukan jika ada anggota terluka saat kegiatan?',
        answers: [
          {
            id: 'h1',
            answer: 'Melanjutkan kegiatan tanpa memperhatikan',
            correct: false,
          },
          {
            id: 'h2',
            answer: 'Membiarkan anggota tersebut istirahat sendiri',
            correct: false,
          },
          {
            id: 'h3',
            answer: 'Menunda pertolongan sampai anggota lain datang',
            correct: false,
          },
          {
            id: 'h4',
            answer:
              'Segera memberikan pertolongan pertama dan melaporkan ke pembina',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q9',
        question:
          'Kenapa penting untuk mendengarkan pendapat anggota saat musyawarah regu?',
        answers: [
          {
            id: 'i1',
            answer: 'Agar keputusan diambil bersama dan semua merasa dihargai',
            correct: true,
          }, // Benar
          { id: 'i2', answer: 'Supaya anggota tidak ribut', correct: false },
          { id: 'i3', answer: 'Agar pemimpin selalu menang', correct: false },
          {
            id: 'i4',
            answer: 'Supaya rapat cepat selesai tanpa diskusi',
            correct: false,
          },
        ],
      },
      {
        id: 'q10',
        question: 'Apa sikap yang harus ditunjukkan seorang pemimpin Pramuka?',
        answers: [
          {
            id: 'j1',
            answer: 'Adil, tegas, peduli, dan memberi contoh yang baik',
            correct: true,
          }, // Benar
          {
            id: 'j2',
            answer: 'Suka marah dan memberi hukuman',
            correct: false,
          },
          { id: 'j3', answer: 'Menghindari tanggung jawab', correct: false },
          {
            id: 'j4',
            answer: 'Bersikap acuh dan hanya mengatur dari jauh',
            correct: false,
          },
        ],
      },
      // Soal Sedang
      {
        id: 'q11',
        question:
          'Saat latihan tali temali, ada anggota yang salah melilit simpul sehingga berpotensi membahayakan. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'k1',
            answer:
              'Meminta anggota lain memperbaiki sambil menjelaskan risiko simpul salah kepada seluruh anggota regu secara terbuka.',
            correct: false,
          },
          {
            id: 'k2',
            answer:
              'Segera menghampiri dan memberikan contoh yang benar secara perlahan tanpa memarahi agar tetap semangat belajar.',
            correct: true,
          }, // Benar
          {
            id: 'k3',
            answer:
              'Membiarkan anggota tersebut memperbaiki sendiri kesalahannya agar belajar dari pengalaman tanpa intervensi.',
            correct: false,
          },
          {
            id: 'k4',
            answer:
              'Melaporkan kesalahan tersebut ke pembina untuk mendapatkan arahan yang tepat dan memastikan keselamatan semua anggota.',
            correct: false,
          },
        ],
      },
      {
        id: 'q12',
        question:
          'Dalam kegiatan hiking, salah satu anggota mulai terlihat kelelahan berat di tengah perjalanan. Apa tindakanmu?',
        answers: [
          {
            id: 'l1',
            answer:
              'Menyarankan anggota tersebut beristirahat sejenak dan mengevaluasi kondisi sambil memberitahu pembina agar dapat bantuan bila perlu.',
            correct: true,
          }, // Benar
          {
            id: 'l2',
            answer:
              'Meminta anggota tersebut terus berjalan dengan semangat agar tidak menghambat regu dan mencapai tujuan tepat waktu.',
            correct: false,
          },
          {
            id: 'l3',
            answer:
              'Mengatur ulang posisi regu agar anggota tersebut ditemani dan kondisi keseluruhan regu tetap stabil selama perjalanan.',
            correct: false,
          },
          {
            id: 'l4',
            answer:
              'Membiarkan anggota tersebut berjalan sendiri di belakang agar regu lain tidak terganggu tempo jalannya.',
            correct: false,
          },
        ],
      },
      {
        id: 'q13',
        question:
          'Ada anggota baru yang kurang mengenal aturan dasar Pramuka tapi sangat antusias. Bagaimana kamu membantu?',
        answers: [
          {
            id: 'm1',
            answer:
              'Mengarahkan anggota baru untuk mempelajari sendiri aturan melalui buku dan sumber lain agar mandiri.',
            correct: false,
          },
          {
            id: 'm2',
            answer:
              'Menugaskan anggota baru untuk membantu tugas-tugas sederhana agar belajar sambil praktek secara langsung.',
            correct: false,
          },
          {
            id: 'm3',
            answer:
              'Memberikan bimbingan langsung dengan sabar serta mengajak anggota lain mendukung agar cepat beradaptasi.',
            correct: true,
          }, // Benar
          {
            id: 'm4',
            answer:
              'Menunda kegiatan anggota baru sampai benar-benar paham aturan agar tidak mengganggu jalannya kegiatan.',
            correct: false,
          },
        ],
      },
      {
        id: 'q14',
        question:
          'Saat rapat regu, ada anggota yang tampak tidak setuju tapi enggan menyuarakan pendapatnya. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'n1',
            answer:
              'Mengajak anggota tersebut bicara secara pribadi untuk mendengarkan dan memahami alasan di balik ketidaksepakatannya.',
            correct: true,
          }, // Benar
          {
            id: 'n2',
            answer:
              'Meminta semua anggota menyatakan pendapat secara bergiliran agar tidak ada yang merasa diabaikan.',
            correct: false,
          },
          {
            id: 'n3',
            answer:
              'Menganggap ketidaksepakatan itu biasa dan fokus pada keputusan mayoritas tanpa menekan anggota yang diam.',
            correct: false,
          },
          {
            id: 'n4',
            answer:
              'Mengabaikan pendapat tersebut agar diskusi tidak terhambat dan segera mencapai keputusan.',
            correct: false,
          },
        ],
      },
      {
        id: 'q15',
        question:
          'Saat tugas menjaga kebersihan camp, beberapa anggota kurang serius dan menyebabkan sampah berserakan. Sikapmu?',
        answers: [
          {
            id: 'o1',
            answer:
              'Memberi teguran tegas secara bersama-sama agar anggota memahami pentingnya menjaga lingkungan.',
            correct: false,
          },
          {
            id: 'o2',
            answer:
              'Menunjuk ketua regu untuk mengatur pembagian tugas agar lebih disiplin dan bertanggung jawab.',
            correct: false,
          },
          {
            id: 'o3',
            answer:
              'Mengabaikan situasi tersebut karena kegiatan hampir selesai dan tidak ingin memicu pertengkaran.',
            correct: false,
          },
          {
            id: 'o4',
            answer:
              'Mengajak seluruh anggota untuk membersihkan bersama dengan suasana menyenangkan dan motivasi positif.',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q16',
        question:
          'Ketika mengikuti pelatihan, kamu mendapat kritik dari pelatih yang membuatmu merasa kurang dihargai. Apa sikap terbaik?',
        answers: [
          {
            id: 'p1',
            answer:
              'Menjelaskan alasan di balik tindakanmu agar pelatih mengerti perspektif yang kamu miliki.',
            correct: false,
          },
          {
            id: 'p2',
            answer:
              'Menerima kritik dengan lapang dada, mengevaluasi diri, dan berusaha memperbaiki kekurangan yang ada.',
            correct: true,
          }, // Benar
          {
            id: 'p3',
            answer:
              'Mengabaikan kritik tersebut dan melanjutkan dengan cara yang sudah kamu anggap benar.',
            correct: false,
          },
          {
            id: 'p4',
            answer:
              'Membalas kritik dengan alasan sendiri agar tidak dianggap mudah tersinggung.',
            correct: false,
          },
        ],
      },
      {
        id: 'q17',
        question:
          'Anggota regu kamu sedang berselisih paham soal pembagian tugas yang dianggap tidak adil. Apa solusi yang kamu pilih?',
        answers: [
          {
            id: 'q1',
            answer:
              'Mengajak kedua pihak berdiskusi dan mencari kesepakatan bersama yang mengakomodasi kepentingan kedua belah pihak.',
            correct: true,
          }, // Benar
          {
            id: 'q2',
            answer:
              'Mengambil keputusan sendiri berdasarkan apa yang kamu anggap paling baik demi kelancaran tugas.',
            correct: false,
          },
          {
            id: 'q3',
            answer:
              'Meminta pembina membantu mengambil keputusan agar konflik segera selesai.',
            correct: false,
          },
          {
            id: 'q4',
            answer:
              'Membiarkan anggota menyelesaikan sendiri konflik tersebut tanpa intervensi agar mereka belajar mandiri.',
            correct: false,
          },
        ],
      },
      {
        id: 'q18',
        question:
          'Saat kegiatan malam hari, ada anggota yang takut gelap dan ingin pulang lebih awal. Bagaimana kamu merespon?',
        answers: [
          {
            id: 'r1',
            answer:
              'Mengizinkan anggota tersebut pulang lebih awal sambil memastikan dia kembali dengan aman.',
            correct: false,
          },
          {
            id: 'r2',
            answer:
              'Memberi pengertian bahwa kegiatan harus diikuti sampai selesai demi disiplin dan tanggung jawab.',
            correct: false,
          },
          {
            id: 'r3',
            answer:
              'Menenangkan dan mengajak anggota tersebut tetap ikut kegiatan dengan dukungan regu agar rasa takut berkurang.',
            correct: true,
          }, // Benar
          {
            id: 'r4',
            answer:
              'Menyarankan anggota tersebut duduk di dekat anggota lain yang bisa memberikan rasa aman sepanjang kegiatan.',
            correct: false,
          },
        ],
      },
      {
        id: 'q19',
        question:
          'Dalam persiapan lomba, ada perbedaan pendapat yang cukup serius soal strategi terbaik. Bagaimana kamu bertindak?',
        answers: [
          {
            id: 's1',
            answer:
              'Mengambil keputusan cepat berdasarkan pengalaman supaya persiapan tidak tertunda.',
            correct: false,
          },
          {
            id: 's2',
            answer:
              'Meminta pembina untuk memutuskan strategi agar keputusan lebih objektif dan adil.',
            correct: false,
          },
          {
            id: 's3',
            answer:
              'Mencoba strategi gabungan dari semua ide agar tidak mengecewakan siapa pun dalam regu.',
            correct: false,
          },
          {
            id: 's4',
            answer:
              'Menyelenggarakan musyawarah terbuka dan memastikan semua pendapat didengar sebelum mengambil keputusan.',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q20',
        question:
          'Selama perjalanan kemah, cuaca mendadak buruk dan harus mengambil keputusan cepat. Apa langkahmu?',
        answers: [
          {
            id: 't1',
            answer:
              'Mengumpulkan seluruh anggota dan memberi instruksi jelas untuk mencari tempat berlindung yang aman.',
            correct: true,
          }, // Benar
          {
            id: 't2',
            answer:
              'Segera menginstruksikan seluruh anggota untuk berhenti dan bersiap menghadapi kondisi cuaca tersebut.',
            correct: false,
          },
          {
            id: 't3',
            answer:
              'Menghubungi pembina untuk meminta arahan sambil tetap memantau kondisi anggota.',
            correct: false,
          },
          {
            id: 't4',
            answer:
              'Meminta anggota tetap melanjutkan perjalanan agar tujuan tetap tercapai tanpa gangguan.',
            correct: false,
          },
        ],
      },
      // Soal Sulit
      {
        id: 'q21',
        question:
          'Kamu menjadi pemimpin saat kemah besar. Seorang anggota penting regu terlihat curiga membawa benda terlarang (rokok) tapi belum terbukti. Apa tindakan terbaik?',
        answers: [
          {
            id: 'u1',
            answer:
              'Memperingatkan anggota tersebut secara langsung di depan regu agar memberi efek jera dan mencegah risiko.',
            correct: false,
          },
          {
            id: 'u2',
            answer:
              'Mengawasi lebih ketat tanpa bicara dulu, supaya tidak salah sangka dan menjaga hubungan regu tetap baik.',
            correct: false,
          },
          {
            id: 'u3',
            answer:
              'Mengajak anggota tersebut bicara secara pribadi dan hati-hati, lalu melaporkan pada pembina tanpa membuat tuduhan terbuka.',
            correct: true,
          }, // Benar
          {
            id: 'u4',
            answer:
              'Mengabaikan kecurigaan tersebut karena belum ada bukti kuat agar tidak menimbulkan konflik yang tidak perlu.',
            correct: false,
          },
        ],
      },
      {
        id: 'q22',
        question:
          'Selama persiapan lomba, ada anggota yang mencurangi dengan menggunakan bantuan luar tanpa sepengetahuan regu. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'v1',
            answer:
              'Membiarkan kejadian tersebut agar regu tetap berprestasi dan tidak menimbulkan masalah internal.',
            correct: false,
          },
          {
            id: 'v2',
            answer:
              'Mengajak anggota tersebut berdiskusi serius tentang nilai kejujuran dan konsekuensi, lalu melaporkan kejadian ke pembina.',
            correct: true,
          }, // Benar
          {
            id: 'v3',
            answer:
              'Menegur anggota tersebut di depan regu sebagai bentuk pembelajaran dan memberi peringatan keras.',
            correct: false,
          },
          {
            id: 'v4',
            answer:
              'Mencoba menutupi kejadian itu agar nama baik regu tidak tercemar oleh pihak luar.',
            correct: false,
          },
        ],
      },
      {
        id: 'q23',
        question:
          'Kamu harus memilih antara menyelesaikan tugas sesuai jadwal atau membantu anggota yang terluka saat tugas. Apa pilihanmu?',
        answers: [
          {
            id: 'w1',
            answer:
              'Meminta anggota lain melanjutkan tugas sementara kamu mengurus anggota yang terluka.',
            correct: false,
          },
          {
            id: 'w2',
            answer:
              'Menunda pertolongan agar semua tugas selesai dulu, kemudian baru mengurus anggota yang terluka.',
            correct: false,
          },
          {
            id: 'w3',
            answer:
              'Mengatur ulang jadwal tugas dan meminta pembina mengawasi agar semua aspek terlaksana dengan baik.',
            correct: false,
          },
          {
            id: 'w4',
            answer:
              'Memprioritaskan keselamatan anggota dengan segera memberikan pertolongan walau mengganggu jadwal kegiatan.',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q24',
        question:
          'Ketika anggota regu memintamu mendukung mereka menolak aturan baru dari pembina yang menurut mereka kurang adil. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'x1',
            answer:
              'Mendengarkan keluhan anggota, menyampaikan ke pembina, dan mencari solusi kompromi yang terbaik.',
            correct: true,
          }, // Benar
          {
            id: 'x2',
            answer:
              'Mengajak anggota untuk mematuhi aturan sambil mencoba memahami alasan pembina secara terbuka.',
            correct: false,
          },
          {
            id: 'x3',
            answer:
              'Mengabaikan keluhan agar tidak menghambat jalannya kegiatan dan menjaga hubungan dengan pembina.',
            correct: false,
          },
          {
            id: 'x4',
            answer:
              'Mendukung anggota menolak aturan secara terbuka dan memimpin aksi protes agar pendapat mereka didengar.',
            correct: false,
          },
        ],
      },
      {
        id: 'q25',
        question:
          'Dalam rapat, kamu mendapat kritik pedas dari anggota yang merasa dipinggirkan dalam pengambilan keputusan. Apa langkahmu?',
        answers: [
          {
            id: 'y1',
            answer:
              'Menjelaskan alasan pengambilan keputusan secara rinci agar anggota mengerti proses dan tujuan.',
            correct: false,
          },
          {
            id: 'y2',
            answer:
              'Mengabaikan kritik karena tidak semua pendapat harus dipenuhi demi kelancaran regu.',
            correct: false,
          },
          {
            id: 'y3',
            answer:
              'Mengakui kesalahan, meminta maaf, dan membuka ruang dialog agar anggota merasa dihargai dan masalah selesai.',
            correct: true,
          }, // Benar
          {
            id: 'y4',
            answer:
              'Mengajak pembina untuk memberikan penilaian objektif dan membantu memperbaiki komunikasi dalam regu.',
            correct: false,
          },
        ],
      },
      {
        id: 'q26',
        question:
          'Kamu harus memilih antara menyampaikan hasil evaluasi yang jujur tapi bisa mengecewakan anggota atau memperhalusnya agar tidak menurunkan motivasi. Apa sikapmu?',
        answers: [
          {
            id: 'z1',
            answer:
              'Memperhalus hasil evaluasi dan menekankan hal-hal positif agar semangat anggota tetap terjaga.',
            correct: false,
          },
          {
            id: 'z2',
            answer:
              'Menggabungkan kedua cara dengan menekankan kejujuran tapi tetap memberi motivasi agar tidak putus asa.',
            correct: false,
          },
          {
            id: 'z3',
            answer:
              'Menunda penyampaian hasil evaluasi agar waktu yang tepat ditemukan untuk membicarakannya.',
            correct: false,
          },
          {
            id: 'z4',
            answer:
              'Menyampaikan hasil secara jujur lengkap dengan solusi perbaikan agar menjadi bahan pembelajaran bersama.',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q27',
        question:
          'Seorang anggota yang juga teman dekat mulai menunjukkan perilaku kurang disiplin dan mempengaruhi anggota lain. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'aa1',
            answer:
              'Membiarkan saja karena takut merusak hubungan pertemanan dan berharap dia sadar sendiri.',
            correct: false,
          },
          {
            id: 'aa2',
            answer:
              'Memberikan teguran terbuka di depan anggota lain agar menjadi contoh dan memperbaiki sikap.',
            correct: false,
          },
          {
            id: 'aa3',
            answer:
              'Mengajak bicara empat mata dengan pendekatan empati dan memberi peringatan tegas secara pribadi.',
            correct: true,
          }, // Benar
          {
            id: 'aa4',
            answer:
              'Melibatkan pembina untuk menindaklanjuti masalah secara formal agar mendapat solusi tepat.',
            correct: false,
          },
        ],
      },
      {
        id: 'q28',
        question:
          'Saat kegiatan kelompok, kamu mengetahui ada anggota yang sering curang dalam tugas tapi tidak ada bukti kuat. Apa langkahmu?',
        answers: [
          {
            id: 'ab1',
            answer:
              'Membicarakan kecurigaan tersebut dengan pembina tanpa mengumumkannya ke regu.',
            correct: false,
          },
          {
            id: 'ab2',
            answer:
              'Memantau dan mengumpulkan bukti terlebih dahulu sambil tetap mengajak anggota tersebut berperilaku jujur.',
            correct: true,
          }, // Benar
          {
            id: 'ab3',
            answer:
              'Mengabaikan kecurigaan agar tidak menimbulkan suasana tidak nyaman dalam regu.',
            correct: false,
          },
          {
            id: 'ab4',
            answer:
              'Mengingatkan seluruh anggota tentang pentingnya kejujuran tanpa menunjuk anggota tertentu.',
            correct: false,
          },
        ],
      },
      {
        id: 'q29',
        question:
          'Kamu diminta mengambil keputusan sulit yang bisa membuat sebagian anggota kecewa tapi penting demi kelangsungan regu. Apa yang kamu lakukan?',
        answers: [
          {
            id: 'ac1',
            answer:
              'Mengambil keputusan sendiri tanpa diskusi demi menjaga kelancaran kegiatan regu.',
            correct: false,
          },
          {
            id: 'ac2',
            answer:
              'Mencari jalan tengah agar semua pihak merasa diuntungkan meski keputusan kurang maksimal.',
            correct: false,
          },
          {
            id: 'ac3',
            answer:
              'Menunda keputusan agar mendapat persetujuan dari pembina terlebih dahulu.',
            correct: false,
          },
          {
            id: 'ac4',
            answer:
              'Menjelaskan alasan keputusan secara terbuka dan memberikan kesempatan anggota mengajukan masukan sebelum dilaksanakan.',
            correct: true,
          }, // Benar
        ],
      },
      {
        id: 'q30',
        question:
          'Ketika kegiatan berakhir, kamu tahu ada anggota yang belum mendapat pengakuan tapi kontribusinya besar. Apa tindakanmu?',
        answers: [
          {
            id: 'ad1',
            answer:
              'Mengusulkan penghargaan khusus agar anggota tersebut mendapatkan apresiasi yang layak di depan regu.',
            correct: true,
          }, // Benar
          {
            id: 'ad2',
            answer:
              'Memberi pujian secara pribadi tanpa membuat perhatian berlebih agar tidak menimbulkan kecemburuan.',
            correct: false,
          },
          {
            id: 'ad3',
            answer:
              'Mengabaikan karena fokus pada keberhasilan regu secara keseluruhan dan bukan individu.',
            correct: false,
          },
          {
            id: 'ad4',
            answer:
              'Menyampaikan terima kasih secara umum tanpa menyebut nama agar semua anggota merasa dihargai.',
            correct: false,
          },
        ],
      },
    ],
  },
};
