'use client';

import React from 'react';
import {
  careerRecommendations,
  riasecCharacteristics,
  RIASECType,
} from '../../modules/tes-minat-bakat/constant';

interface CareerRecommendationsProps {
  dominantCode: string;
  dominantTypes: RIASECType[];
}

export const CareerRecommendations: React.FC<CareerRecommendationsProps> = ({
  dominantCode,
  dominantTypes,
}) => {
  const recommendation =
    careerRecommendations[dominantCode as keyof typeof careerRecommendations];

  const getFallbackRecommendation = () => {
    const primaryType = dominantTypes[0];
    const secondaryType = dominantTypes[1];
    const tertiaryType = dominantTypes[2];

    const primaryChar = riasecCharacteristics[primaryType];
    const secondaryChar = riasecCharacteristics[secondaryType];
    const tertiaryChar = riasecCharacteristics[tertiaryType];

    return {
      title: `${primaryChar.name} & ${secondaryChar.name}`,
      careers: [
        `${primaryChar.name} Specialist`,
        `${secondaryChar.name} Professional`,
        `${primaryChar.name} ${secondaryChar.name} Coordinator`,
        `${tertiaryChar.name} Assistant`,
      ],
      majors: [
        `${primaryChar.name} Studies`,
        `${secondaryChar.name} Management`,
        `${primaryChar.name} ${secondaryChar.name} Program`,
        `${tertiaryChar.name} Studies`,
      ],
    };
  };

  const finalRecommendation = recommendation || getFallbackRecommendation();

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Rekomendasi Karier & Jurusan
        </h3>
        <p className="text-gray-700">
          Berdasarkan hasil Tes Minat (Holland RIASEC) Anda dengan kode dominan{' '}
          <span className="font-bold text-sky-base">{dominantCode}</span>
        </p>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Tipe Kepribadian Dominan Anda
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {dominantTypes.map((type, index) => {
            const characteristic = riasecCharacteristics[type];
            return (
              <div
                key={type}
                className="p-4 rounded-lg border-2 transition-all"
                style={{
                  borderColor: characteristic.color,
                  backgroundColor: `${characteristic.color}10`,
                }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{characteristic.icon}</span>
                  <div>
                    <h5
                      className="font-bold text-md"
                      style={{ color: characteristic.color }}
                    >
                      {characteristic.fullName}
                    </h5>
                    <span className="text-md text-gray-500">
                      Peringkat {index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-md text-gray-600">
                  {characteristic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          {/* Rekomendasi Karier: {finalRecommendation.title} */}
          Rekomendasi Karier
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {finalRecommendation.careers.map((career, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">💼</span>
                <span className="font-medium text-gray-800">{career}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Rekomendasi Jurusan / Program Studi
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {finalRecommendation.majors.map((major, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center">
                <span className="text-green-600 mr-2">🎓</span>
                <span className="font-medium text-gray-800">{major}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          💡 Tips Pengembangan Diri
        </h4>
        <ul className="text-md text-gray-700 space-y-1">
          <li>
            • Fokus pada pengembangan keterampilan sesuai tipe dominan Anda
          </li>
          <li>• Cari pengalaman magang atau kerja di bidang yang sesuai</li>
          <li>• Ikuti pelatihan atau sertifikasi yang relevan</li>
          <li>• Bangun jaringan dengan profesional di bidang yang diminati</li>
          <li>• Terus belajar dan beradaptasi dengan perkembangan industri</li>
        </ul>
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-md text-red-600 ">
          <strong>Catatan</strong> <br />
          Hasil tes ini hanya sebagai panduan. Keputusan akhir dalam memilih
          karier dan jurusan tetap ada di tangan Anda. Pertimbangkan juga faktor
          lain seperti minat pribadi, kemampuan, dan peluang pasar kerja.
        </p>
      </div>
    </div>
  );
};
