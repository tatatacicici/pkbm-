import React from 'react';
import { ContentCardFoundation } from './constant';

const FoundationSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 2xl:px-0 py-16 overflow-visible">
      <h2 className="text-4xl font-bold text-center mb-2 text-sky-base">
        Visi, Misi & <span className="text-orange-base">Tujuan</span>
      </h2>
      <p className="text-center text-gray-600 text-xl mt-5 mb-10 mx-auto">
        Fondasi yang menguatkan komitmen Paket C Gratis dalam menyediakan
        pendidikan setara SMA yang gratis dan berkualitas untuk semua
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start overflow-visible">
        <div className="flex flex-col gap-8 overflow-visible">
          <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 p-8 flex flex-col items-start min-w-0 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 hover:scale-105 box-border overflow-visible">
            <h3
              className="flex items-center text-xl font-bold mb-4"
              style={{ color: ContentCardFoundation[0].color }}
            >
              <span className="text-3xl mr-2 align-middle">
                {ContentCardFoundation[0].icon}
              </span>
              {ContentCardFoundation[0].title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              {ContentCardFoundation[0].content as string}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 p-8 flex flex-col items-start min-w-0 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-green-200 hover:scale-105 box-border overflow-visible">
            <h3
              className="flex items-center text-xl font-bold mb-4"
              style={{ color: ContentCardFoundation[1].color }}
            >
              <span className="text-3xl mr-2 align-middle">
                {ContentCardFoundation[1].icon}
              </span>
              {ContentCardFoundation[1].title}
            </h3>
            <ol className="space-y-4 w-full">
              {(ContentCardFoundation[1].content as string[]).map(
                (point, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 mt-1"
                      style={{
                        background: '#E3FBDA',
                        color: ContentCardFoundation[1].color,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
        <div className="flex flex-col h-full overflow-visible">
          <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 p-8 flex flex-col items-start min-w-0 flex-1 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-orange-200 hover:scale-105 box-border overflow-visible">
            <h3
              className="flex items-center text-xl font-bold mb-4"
              style={{ color: ContentCardFoundation[2].color }}
            >
              <span className="text-3xl mr-2 align-middle">
                {ContentCardFoundation[2].icon}
              </span>
              {ContentCardFoundation[2].title}
            </h3>
            <ol className="space-y-4 w-full">
              {(ContentCardFoundation[2].content as string[]).map(
                (point, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 mt-1"
                      style={{
                        background: '#FEECD0',
                        color: ContentCardFoundation[2].color,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ol>
          </div>
          <div className="hidden md:flex justify-center items-center h-32 mt-20 relative overflow-visible">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#fff5dc] opacity-30 rounded-full z-0"></span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-[#EDF5FA] opacity-40 rounded-full z-0"></span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#DCEEFF] opacity-60 rounded-full z-0"></span>
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-6xl md:text-7xl opacity-50 hover:scale-125 transition-all"
              aria-label="Topi Wisuda"
            >
              🎓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
