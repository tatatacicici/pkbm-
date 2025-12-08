import { TQuizScoreItem } from '../../types/quiz';

export const TesMinatBakatBreadcrumb = [
  {
    name: 'Beranda',
    link: '/beranda',
  },
  {
    name: 'Tes Minat & Bakat',
    link: '/tes-minat-bakat',
  },
];

// UNTUK TES MINAT HOLLAND RIASEC
// UNTUK TES MINAT HOLLAND RIASEC
// UNTUK TES MINAT HOLLAND RIASEC

export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export const riasecCharacteristics = {
  R: {
    name: 'Realistic',
    fullName: 'Realistic (Realistis)',
    description:
      'Suka bekerja dengan benda, mesin, alat, atau hewan. Lebih suka bekerja di luar ruangan dan menyelesaikan masalah secara praktis.',
    color: '#3B82F6',
    icon: '🔧',
  },
  I: {
    name: 'Investigative',
    fullName: 'Investigative (Investigatif)',
    description:
      'Suka mengamati, belajar, menganalisis, dan memecahkan masalah. Lebih suka bekerja dengan ide dan konsep.',
    color: '#10B981',
    icon: '🔬',
  },
  A: {
    name: 'Artistic',
    fullName: 'Artistic (Artistik)',
    description:
      'Suka bekerja dengan ide, seni, musik, sastra, atau desain. Lebih suka bekerja tanpa aturan yang ketat.',
    color: '#8B5CF6',
    icon: '🎨',
  },
  S: {
    name: 'Social',
    fullName: 'Social (Sosial)',
    description:
      'Suka bekerja dengan orang lain, membantu, mengajar, atau melayani. Lebih suka bekerja dalam tim.',
    color: '#F59E0B',
    icon: '🤝',
  },
  E: {
    name: 'Enterprising',
    fullName: 'Enterprising (Wirausaha)',
    description:
      'Suka memimpin, meyakinkan, atau menjual. Lebih suka bekerja dengan orang lain untuk mencapai tujuan.',
    color: '#EF4444',
    icon: '💼',
  },
  C: {
    name: 'Conventional',
    fullName: 'Conventional (Konvensional)',
    description:
      'Suka bekerja dengan data, angka, atau dokumen. Lebih suka bekerja dengan aturan yang jelas.',
    color: '#6B7280',
    icon: '📊',
  },
};

export const careerRecommendations = {
  RIA: {
    title: 'Teknisi & Peneliti',
    careers: [
      'Teknisi Laboratorium',
      'Peneliti Lapangan',
      'Ahli Geologi',
      'Arkeolog',
    ],
    majors: ['Teknik Geologi', 'Arkeologi', 'Teknik Pertambangan', 'Geofisika'],
  },
  RAS: {
    title: 'Pelatih & Instruktur',
    careers: [
      'Pelatih Olahraga',
      'Instruktur Fitness',
      'Pelatih Hewan',
      'Teknisi Medis',
    ],
    majors: [
      'Ilmu Keolahragaan',
      'Kedokteran Hewan',
      'Teknik Biomedis',
      'Fisioterapi',
    ],
  },
  RAE: {
    title: 'Manajer Teknis',
    careers: [
      'Manajer Konstruksi',
      'Supervisor Pabrik',
      'Manajer Proyek Teknis',
      'Kepala Bengkel',
    ],
    majors: [
      'Teknik Industri',
      'Manajemen Konstruksi',
      'Teknik Mesin',
      'Teknik Sipil',
    ],
  },
  IAC: {
    title: 'Peneliti & Analis',
    careers: ['Peneliti', 'Analis Data', 'Statistikawan', 'Ahli Epidemiologi'],
    majors: ['Statistika', 'Matematika', 'Epidemiologi', 'Bioinformatika'],
  },
  IAS: {
    title: 'Akademisi & Konsultan',
    careers: [
      'Dosen',
      'Konsultan Penelitian',
      'Peneliti Sosial',
      'Psikolog Peneliti',
    ],
    majors: ['Psikologi', 'Sosiologi', 'Antropologi', 'Ilmu Politik'],
  },
  IAE: {
    title: 'Konsultan & Peneliti',
    careers: [
      'Konsultan Bisnis',
      'Peneliti Pasar',
      'Analis Investasi',
      'Konsultan Teknologi',
    ],
    majors: [
      'Manajemen Bisnis',
      'Ekonomi',
      'Teknik Industri',
      'Sistem Informasi',
    ],
  },
  ASC: {
    title: 'Desainer & Kreator',
    careers: ['Desainer Grafis', 'Arsitek', 'Desainer Interior', 'Animator'],
    majors: ['Desain Grafis', 'Arsitektur', 'Desain Interior', 'Animasi'],
  },
  ASE: {
    title: 'Kreator & Wirausaha',
    careers: [
      'Wirausaha Kreatif',
      'Event Organizer',
      'Content Creator',
      'Desainer Produk',
    ],
    majors: ['Desain Produk', 'Manajemen Bisnis', 'Komunikasi', 'Seni Rupa'],
  },
  SEC: {
    title: 'Pendidik & Konselor',
    careers: ['Guru', 'Konselor Sekolah', 'Pelatih SDM', 'Dosen'],
    majors: ['Pendidikan', 'Bimbingan Konseling', 'Psikologi', 'Manajemen SDM'],
  },
  EAC: {
    title: 'Manajer & Wirausaha',
    careers: [
      'Manajer Pemasaran',
      'Wirausaha',
      'Sales Manager',
      'Business Development',
    ],
    majors: ['Manajemen Bisnis', 'Pemasaran', 'Ekonomi', 'Manajemen'],
  },
  CES: {
    title: 'Administrator & Koordinator',
    careers: [
      'Administrator',
      'Koordinator Proyek',
      'Manajer Kantor',
      'Sekretaris Eksekutif',
    ],
    majors: [
      'Administrasi Bisnis',
      'Manajemen',
      'Sistem Informasi',
      'Sekretaris',
    ],
  },
};

export const quizTesMinatInfoDummyData = {
  subject: {
    name: 'Tes Minat',
  },
  session: {
    session_no: 1,
  },
  quiz: {
    title: 'Tes Minat & Bakat',
    categoryQuiz: 'Tes Minat (Holland RIASEC)',
    total_questions: 60, // 10 soal per tipe RIASEC
    question_point: 5, // Skala 1-5
    passing_score: 60 * 5 * 0.6, // 60% dari total poin
    duration: 1800, // 30 menit dalam detik
    remaining_attempts: 3,
  },
};

interface RIASECQuestion {
  id: string;
  question: string;
  type: RIASECType;
  answers: Array<{
    id: string;
    answer: string;
    score: number;
  }>;
}

const generateRIASECQuestions = (): RIASECQuestion[] => {
  const questions: RIASECQuestion[] = [];
  let questionId = 1;

  // Realistic (R) - 10 soal
  const realisticQuestions = [
    'Saya suka bekerja dengan tangan dan menggunakan alat-alat',
    'Saya lebih suka bekerja di luar ruangan daripada di dalam kantor',
    'Saya senang memperbaiki mesin atau peralatan yang rusak',
    'Saya suka bekerja dengan hewan atau tanaman',
    'Saya lebih suka pekerjaan yang membutuhkan keterampilan fisik',
    'Saya senang mengoperasikan kendaraan atau mesin berat',
    'Saya suka bekerja dengan bahan-bahan seperti kayu, logam, atau plastik',
    'Saya lebih suka pekerjaan yang menghasilkan produk nyata',
    'Saya senang bekerja di laboratorium atau bengkel',
    'Saya suka pekerjaan yang membutuhkan ketepatan dan presisi',
  ];

  // Investigative (I) - 10 soal
  const investigativeQuestions = [
    'Saya suka membaca buku-buku ilmiah atau teknis',
    'Saya senang melakukan penelitian atau eksperimen',
    'Saya suka menganalisis data dan informasi',
    'Saya lebih suka bekerja dengan ide dan konsep',
    'Saya senang memecahkan masalah yang rumit',
    'Saya suka belajar hal-hal baru secara mendalam',
    'Saya senang bekerja di laboratorium penelitian',
    'Saya suka menulis laporan atau makalah ilmiah',
    'Saya lebih suka bekerja sendiri daripada dalam tim',
    'Saya senang mengembangkan teori atau hipotesis',
  ];

  // Artistic (A) - 10 soal
  const artisticQuestions = [
    'Saya suka menulis puisi, cerita, atau artikel kreatif',
    'Saya senang menggambar, melukis, atau membuat desain',
    'Saya suka bermain musik atau menciptakan lagu',
    'Saya senang menonton film, teater, atau pertunjukan seni',
    'Saya suka bekerja tanpa aturan yang ketat',
    'Saya senang mengekspresikan diri melalui seni',
    'Saya suka bekerja dengan warna, bentuk, dan tekstur',
    'Saya senang menciptakan sesuatu yang unik dan orisinal',
    'Saya suka bekerja di bidang media atau hiburan',
    'Saya senang mengikuti tren dan gaya yang sedang populer',
  ];

  // Social (S) - 10 soal
  const socialQuestions = [
    'Saya suka membantu orang lain menyelesaikan masalah',
    'Saya senang mengajar atau melatih orang lain',
    'Saya suka bekerja dalam tim atau kelompok',
    'Saya senang memberikan konseling atau nasihat',
    'Saya suka mengorganisir kegiatan sosial',
    'Saya senang bekerja dengan anak-anak atau remaja',
    'Saya suka memberikan presentasi atau berbicara di depan umum',
    'Saya senang mendengarkan dan memahami perasaan orang lain',
    'Saya suka bekerja di bidang kesehatan atau pelayanan',
    'Saya senang menjadi mediator dalam konflik',
  ];

  // Enterprising (E) - 10 soal
  const enterprisingQuestions = [
    'Saya suka memimpin atau mengarahkan orang lain',
    'Saya senang meyakinkan orang lain untuk membeli produk',
    'Saya suka mengambil risiko dalam bisnis',
    'Saya senang bernegosiasi atau berdebat',
    'Saya suka membuat keputusan penting',
    'Saya senang bekerja di bidang penjualan atau pemasaran',
    'Saya suka mengembangkan strategi bisnis',
    'Saya senang menjadi wirausaha atau memiliki bisnis sendiri',
    'Saya suka bekerja di bidang politik atau pemerintahan',
    'Saya senang mengelola proyek atau organisasi',
  ];

  // Conventional (C) - 10 soal
  const conventionalQuestions = [
    'Saya suka bekerja dengan angka dan data',
    'Saya senang mengorganisir dan menyusun dokumen',
    'Saya suka bekerja dengan aturan dan prosedur yang jelas',
    'Saya senang menggunakan komputer untuk analisis data',
    'Saya suka pekerjaan yang membutuhkan ketelitian',
    'Saya senang bekerja di bank atau lembaga keuangan',
    'Saya suka membuat laporan atau catatan yang terperinci',
    'Saya senang bekerja dengan jadwal yang teratur',
    'Saya suka pekerjaan yang membutuhkan akurasi tinggi',
    'Saya senang bekerja di bidang administrasi atau sekretaris',
  ];

  const allQuestions = [
    ...realisticQuestions.map((q) => ({
      question: q,
      type: 'R' as RIASECType,
    })),
    ...investigativeQuestions.map((q) => ({
      question: q,
      type: 'I' as RIASECType,
    })),
    ...artisticQuestions.map((q) => ({ question: q, type: 'A' as RIASECType })),
    ...socialQuestions.map((q) => ({ question: q, type: 'S' as RIASECType })),
    ...enterprisingQuestions.map((q) => ({
      question: q,
      type: 'E' as RIASECType,
    })),
    ...conventionalQuestions.map((q) => ({
      question: q,
      type: 'C' as RIASECType,
    })),
  ];

  const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

  shuffledQuestions.forEach((item) => {
    questions.push({
      id: `q${questionId}`,
      question: item.question,
      type: item.type,
      answers: [
        { id: `q${questionId}_1`, answer: 'Sangat Tidak Setuju', score: 1 },
        { id: `q${questionId}_2`, answer: 'Tidak Setuju', score: 2 },
        { id: `q${questionId}_3`, answer: 'Netral', score: 3 },
        { id: `q${questionId}_4`, answer: 'Setuju', score: 4 },
        { id: `q${questionId}_5`, answer: 'Sangat Setuju', score: 5 },
      ],
    });
    questionId++;
  });

  return questions;
};

export const quizTesMinatTakeDummyData = {
  data: {
    id: 'tes-minat-riasec-quiz',
    duration: 1800, // 30 menit
    questions_answers: generateRIASECQuestions(),
  },
};

export const calculateRIASECScore = (answers: any[]) => {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const questionCounts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  answers.forEach((answer, index) => {
    const question = quizTesMinatTakeDummyData.data.questions_answers[index];
    if (question && answer.score) {
      scores[question.type as RIASECType] += answer.score;
      questionCounts[question.type as RIASECType]++;
    }
  });

  const averageScores = {
    R:
      questionCounts.R > 0 ? Math.round((scores.R / questionCounts.R) * 20) : 0, // Skala 0-100
    I:
      questionCounts.I > 0 ? Math.round((scores.I / questionCounts.I) * 20) : 0,
    A:
      questionCounts.A > 0 ? Math.round((scores.A / questionCounts.A) * 20) : 0,
    S:
      questionCounts.S > 0 ? Math.round((scores.S / questionCounts.S) * 20) : 0,
    E:
      questionCounts.E > 0 ? Math.round((scores.E / questionCounts.E) * 20) : 0,
    C:
      questionCounts.C > 0 ? Math.round((scores.C / questionCounts.C) * 20) : 0,
  };

  const sortedScores = Object.entries(averageScores)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type as RIASECType);

  const dominantCode = sortedScores.slice(0, 3).join('');

  return {
    scores: averageScores,
    dominantCode,
    dominantTypes: sortedScores.slice(0, 3),
    allScores: sortedScores,
  };
};

export const quizTesMinatScoreDummyData = {
  scores: { R: 85, I: 72, A: 45, S: 68, E: 55, C: 38 },
  dominantCode: 'RIS',
  dominantTypes: ['R', 'I', 'S'] as RIASECType[],
  allScores: ['R', 'I', 'S', 'E', 'A', 'C'] as RIASECType[],
  time_elapsed: 25,
  total_question: 60,
  remaining_attempt: 2,
  status: 'completed',
};

// UNTUK TES BAKAT
// UNTUK TES BAKAT
// UNTUK TES BAKAT

export const quizTesBakatInfoDummyData = {
  subject: {
    // name: 'Try Out',
    name: 'Tes Bakat',
  },
  session: {
    session_no: 3,
  },
  quiz: {
    // title: 'Try Out',
    title: 'Tes Minat & Bakat',
    categoryQuiz: 'Tes Bakat',
    total_questions: 4,
    question_point: 10,
    passing_score: 4 * 10 * 0.5, // 50% dari total poin
    duration: 600, // 30 menit dalam detik
    remaining_attempts: 3,
  },
};

export const quizTesBakatTakeDummyData = {
  data: {
    id: 'tes-bakat-quiz',
    duration: 120, // Durasi dalam menit
    questions_answers: [
      {
        id: 'q1',
        question: '/images/tes-minat-bakat/tes-bakat-soal-1.svg',
        answers: [
          { id: 'a1', answer: 'a', correct: true },
          { id: 'a2', answer: 'b', correct: false },
          { id: 'a3', answer: 'c', correct: false },
          { id: 'a4', answer: 'd', correct: false },
          { id: 'a5', answer: 'e', correct: false },
        ],
      },
      {
        id: 'q2',
        question: '/images/tes-minat-bakat/tes-bakat-soal-2.svg',
        answers: [
          { id: 'b1', answer: 'a', correct: false },
          { id: 'b2', answer: 'b', correct: true },
          { id: 'b3', answer: 'c', correct: false },
          { id: 'b4', answer: 'd', correct: false },
          { id: 'b5', answer: 'e', correct: false },
        ],
      },
      {
        id: 'q3',
        question: '/images/tes-minat-bakat/tes-bakat-soal-3.svg',
        answers: [
          { id: 'c1', answer: 'a', correct: false },
          { id: 'c2', answer: 'b', correct: false },
          { id: 'c3', answer: 'c', correct: true },
          { id: 'c4', answer: 'd', correct: false },
          { id: 'c5', answer: 'e', correct: false },
        ],
      },
      {
        id: 'q4',
        question: '/images/tes-minat-bakat/tes-bakat-soal-4.svg',
        answers: [
          { id: 'd1', answer: 'a', correct: false },
          { id: 'd2', answer: 'b', correct: false },
          { id: 'd3', answer: 'c', correct: false },
          { id: 'd4', answer: 'd', correct: true },
          { id: 'd5', answer: 'e', correct: false },
        ],
      },
    ],
  },
};

export const quizTesBakatScoreDummyData: TQuizScoreItem = {
  right: 5,
  wrong: 3,
  time_elapsed: 20,
  total_question: 10,
  remaining_attempt: 2,
  score: 50,
  status: 'completed',
};
