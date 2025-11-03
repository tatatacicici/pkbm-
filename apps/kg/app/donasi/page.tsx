import { CheckCircle, Clock, Users } from 'lucide-react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { BaseLayout } from '../../components';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader } from './components/Card';
import { DonationForm } from './donation-form';

const inter = Inter({
  subsets: ['latin', 'cyrillic-ext', 'greek'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Statistics = ({ value, label, className = '' }: any) => {
  return (
    <div
      className={`text-center transform hover:scale-105 transition-transform duration-200 ${className}`}
    >
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
        {value}
      </div>
      <div className="text-sm text-blue-100 font-medium">{label}</div>
    </div>
  );
};

const ImpactItem = ({ icon: Icon, title, description }: any) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
      <Icon className="mt-1 h-6 w-6 text-emerald-500 flex-shrink-0" />
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// DonationPage.jsx
export default function DonationPage() {
  const impactItems = [
    {
      title: 'Akses Pendidikan',
      description: 'Memberikan akses pendidikan kepada mereka yang membutuhkan',
      icon: CheckCircle,
    },
    {
      title: 'Kurikulum Berkualitas',
      description: 'Mendukung pengembangan kurikulum berkualitas',
      icon: CheckCircle,
    },
    {
      title: 'Inovasi Pembelajaran',
      description: 'Memfasilitasi kegiatan belajar yang inovatif dan inklusif',
      icon: CheckCircle,
    },
  ];

  return (
    <BaseLayout>
      <div
        className={`min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 ${inter.className}`}
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-base to-blue-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Dukung Kami Membuka Akses Pendidikan
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Bersama menciptakan dampak nyata untuk pendidikan Indonesia yang
                lebih baik
              </p>
              <div className="flex justify-center items-center gap-12">
                <Statistics value={719} label="Mahasiswa" />
                <div className="text-4xl font-light text-blue-200">|</div>
                <Statistics value={33} label="Provinsi" />
              </div>
              <div className="flex gap-4 justify-center">
                <Link href="#donasi">
                  <Button
                    className="bg-white text-primary-base hover:bg-blue-50 shadow-lg"
                    size="lg"
                  >
                    Dukung Sekarang
                  </Button>
                </Link>
                <Link
                  href="https://sharinghappiness.org/berjuangdemipendidikan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-yellow-500 text-white hover:bg-yellow-base shadow-lg"
                    size="lg"
                  >
                    Sharing Happiness
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Impact Card */}
            <Card gradient>
              <CardHeader className="border-b border-blue-100/20">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-800 bg-clip-text text-transparent">
                  Program Kami
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Apa yang kami lakukan dengan donasi Anda
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {impactItems.map((item, index) => (
                  <ImpactItem key={index} {...item} />
                ))}
              </CardContent>
            </Card>

            {/* Statistics Card */}
            <Card gradient>
              <CardHeader className="border-b border-blue-100/20">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-800 bg-clip-text text-transparent">
                  Pencapaian Kami
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Data per September 2024
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-base to-blue-800 bg-clip-text text-transparent">
                      72.5%
                    </h2>
                    <p className="text-sm text-gray-600">
                      berasal dari keluarga dengan penghasilan rentan dan
                      miskin, dengan rentang umur mulai 18 tahun hingga
                      mendekati 60 tahun
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-lg bg-blue-50/50">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary-base" />
                      <span className="text-sm font-medium text-blue-800 whitespace-nowrap">
                        Mahasiswa Aktif
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-blue-900">719</p>
                    <p className="text-xs text-primary-base">
                      Dari 33 provinsi
                    </p>
                  </div>
                  <div className="space-y-3 p-4 rounded-lg bg-purple-50/50">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">
                        Rentang Usia
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-purple-900">
                      18 - 60
                    </p>
                    <p className="text-xs text-purple-600">tahun</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Transfer Card */}
            <Card gradient>
              <CardHeader className="border-b border-blue-100/20">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-800 bg-clip-text text-transparent">
                  Informasi Transfer
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Bank Syariah Indonesia
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-inner">
                  <p className="text-sm font-medium text-gray-700">
                    Nomor Rekening
                  </p>
                  <p className="text-2xl font-mono font-bold text-blue-800">
                    5511515159
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    a.n. Yayasan Menara Indonesia Mulia
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Setelah melakukan transfer, mohon konfirmasi melalui form di
                  bawah
                </p>
              </CardContent>
            </Card>
          </div>

          <div id="donasi">
            {/* Donation Form */}
            <DonationForm />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
