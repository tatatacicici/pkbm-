'use client';

import { Button } from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { FC, ReactElement, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useDeleteAccount } from '../../../../hooks/profile/hook';

export const DeleteAccountSection: FC = (): ReactElement => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const { mutate, isLoading, error } = useDeleteAccount();

  const handleDelete = () => {
    if (confirmText === 'paketcgratis.id') {
      mutate();
    }
  };

  return (
    <main className="bg-neutral-50 p-8 rounded-md shadow-sm">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 text-red-600 mb-6">
          <FaExclamationTriangle className="text-2xl" />
          <h2 className="text-2xl font-bold">Hapus Akun</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-md">
            <h3 className="text-lg font-semibold text-red-700 mb-3">
              Peringatan: Tindakan ini tidak dapat dibatalkan
            </h3>
            <ul className="text-red-600 space-y-2">
              <li>
                • Semua informasi pribadi Anda akan dihapus secara permanen
              </li>
              <li>• Progres kelas dan penghargaan Anda akan hilang</li>
              <li>• Sertifikat Anda tidak akan lagi tersedia</li>
              <li>• Postingan diskusi dan kontribusi Anda akan dihapus</li>
            </ul>
          </div>

          {!showConfirm ? (
            <div className="flex justify-center">
              <Button
                type="button"
                onClick={() => setShowConfirm(true)}
                className="w-full max-w-md bg-red-500 text-white hover:bg-red-600 rounded-md px-4 py-2"
              >
                Saya mengerti, hapus akun saya
              </Button>
            </div>
          ) : (
            <div className="bg-neutral-100 p-6 rounded-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Masukkan kata kunci{' '}
                  <span className="font-mono bg-neutral-200 px-2 py-1 rounded">
                    paketcgratis.id
                  </span>{' '}
                  untuk konfirmasi:
                </label>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="paketcgratis.id"
                />
                {error && (
                  <p className="mt-2 text-red-500 text-sm">{error.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  disabled={confirmText !== 'paketcgratis.id' || isLoading}
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 text-white hover:bg-red-600 rounded-md px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <LoadingButton /> : 'Hapus akun saya'}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setShowConfirm(false);
                    setConfirmText('');
                  }}
                  className="flex-1 bg-neutral-500 text-white hover:bg-neutral-600 rounded-md px-4 py-2"
                >
                  Batal
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
