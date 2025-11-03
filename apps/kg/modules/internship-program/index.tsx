import React from 'react';
import { BaseLayout } from '../../components';
import { BreadCrumb } from '../../components/bread-crumb/index';

import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import {
  DataInternshipProgram,
  InternshipProgramBreadcrimbs,
} from './constant';
const InternshipProgramModule = () => {
  const { announcement, openPositions, requirements, benefits } =
    DataInternshipProgram;

  return (
    <>
      <BaseLayout>
        <BreadCrumb items={InternshipProgramBreadcrimbs} />
        <section>
          <div className="container mx-auto pb-8">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded">
              <h1 className="text-3xl text-center font-bold mb-6">
                M-Knows & Paket-C Gratis HIRING
              </h1>
              <p className="mb-6 text-lg font-medium">
                Kesempatan Magang Bersertifikat dgn KONVERSI 6-20 SKS‼️
              </p>

              <h3 className="text-lg font-bold mb-4">{announcement}</h3>

              {/* Display Open Positions */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Open Positions</h2>
                {Object.entries(openPositions).map(([category, positions]) => (
                  <div key={category} className="mb-4">
                    <p className="text-lg font-bold">{category}</p>
                    <ul className="list-disc pl-4">
                      {positions.map((position) => (
                        <li key={position}>{position}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Display Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Requirements</h2>
                <ul className="list-disc pl-4">
                  {Object.entries(requirements).map(([requirement, value]) => (
                    <li
                      key={requirement}
                      className={value ? '' : 'text-red-600'}
                    >
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Display Benefits */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Benefits</h2>
                <ul className="list-disc pl-4">
                  {Object.entries(benefits).map(([benefit, value]) => (
                    <li key={benefit} className={value ? '' : 'text-red-600'}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Registration Link */}
              <div className="mb-8">
                <p className="mb-4">
                  Jadi, Tunggu apa lagi?🤔 Yuk daftar sekarang, jadi bagian dari
                  Paket-C Gratis. Posisi magang akan ditutup setelah kuota
                  terpenuhi (2-5 orang per posisi).
                </p>
                <a
                  href="https://bit.ly/MagangMandiriKG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Daftar di sini
                </a>
              </div>

              {/* Footer */}
              <div className="text-gray-600">
                <p>www.m-knowsconsulting.com</p>
                <p>KampusGratis.id</p>
                <p>Check our TikTok and IG.</p>
              </div>
            </div>
          </div>
        </section>
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

export default InternshipProgramModule;
