import Image from 'next/image';
import { useState } from 'react';
import Avatar from 'react-avatar';
import PaymentTab from './payment-tab';

enum PaymentStep {
  METHOD = 1,
  DETAIL = 2,
}

export default function PaymentDetail({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [selected, setSelected] = useState('');
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-black/50">{description}</p>
      </div>
      <div className="flex gap-4">
        <div className="w-3/5">
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <h2 className="text-2xl font-bold">Rincian Pembayaran</h2>
            <div className="flex items-center gap-4">
              <Avatar
                name="Konselor Siaga"
                size="50"
                round
                className="bg-gray-200"
              />
              <div>
                <h3 className="text-black font-semibold">Konselor Siaga</h3>
                <p className="text-black/50">Konselor Online</p>
              </div>
            </div>
            <div className="border-b border-black/10 my-4"></div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-black/50">
                  Biaya Sesi -<span className="text-black"> 30 Menit</span>
                </p>
                <p className="text-black font-semibold">Rp. 50.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black/50">Biaya Layanan</p>
                <p className="text-black font-semibold">Rp. 1.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black/50">Total Pembayaran</p>
                <p className="text-blue-base font-semibold">Rp. 51.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-6">
            <h2 className="text-2xl font-bold">Bayar</h2>
            {step === PaymentStep.METHOD ? (
              <>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Voucher</h4>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="Masukan kode voucher"
                      className="w-full px-4 py-2 border border-black/10 rounded-md"
                    />
                    <button className="bg-blue-base text-white px-4 py-2 rounded-md">
                      Gunakan
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Pilih Metode Pembayaran</h4>
                  <PaymentTab selected={selected} setSelected={setSelected} />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-base text-white px-12 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!selected}
                    onClick={() => setStep(PaymentStep.DETAIL)}
                  >
                    Bayar
                  </button>
                </div>
              </>
            ) : (
              step === PaymentStep.DETAIL && (
                <>
                  <div className="flex gap-4 items-center">
                    <Image
                      src="/images/payment/BCA.png"
                      alt="BCA"
                      width={60}
                      height={40}
                    />
                    <div>
                      <h4 className="text-lg font-bold">Transfer Bank</h4>
                      <p className="text-black/50">BCA Virtual Account</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">No. Virtual Account</p>
                    <div className="border px-6 py-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <p className="text-blue-base font-mono">
                          128 0831 3421 0877 9
                        </p>
                        <button className="text-blue-base hover:underline cursor-pointer">
                          Salin
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">
                      Petunjuk Transfer M-Banking
                    </p>
                    <ol className="list-decimal list-inside text-gray-500 space-y-1">
                      <li>Buka Aplikasi M-Banking BCA</li>
                      <li>Pilih Menu Transfer</li>
                      <li>Pilih Virtual Account</li>
                      <li>Masukkan No Virtual Account</li>
                      <li>Masukkan PIN</li>
                      <li>Kirim</li>
                    </ol>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
