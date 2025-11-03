'use client';

import { LoadingButton } from '@kampus-gratis/components/molecules';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader } from './components/Card';
import { Input } from './components/Input';
import { Label } from './components/Label';

export const DonationForm = () => {
  interface DonationFormData {
    full_name: string;
    email: string;
    phone_number: string;
    amount: string;
    proof_image: File | null;
  }

  const [formData, setFormData] = useState<DonationFormData>({
    full_name: '',
    email: '',
    phone_number: '',
    amount: '',
    proof_image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [step, setStep] = useState(1);
  const [randomizedAmount, setRandomizedAmount] = useState('');
  const [copied, setCopied] = useState<{
    amount: boolean;
    accountNumber: boolean;
  }>({
    amount: false,
    accountNumber: false,
  });

  // Bank account details
  const bankDetails = {
    bank: 'Bank Syariah Indonesia',
    accountNumber: '5511515159',
    accountName: 'Yayasan Menara Indonesia Mulia',
  };

  // Predefined donation amounts
  const donationOptions = [
    { label: 'Rp5.000', value: '5000' },
    { label: 'Rp10.000', value: '10000' },
    { label: 'Rp20.000', value: '20000' },
    { label: 'Rp50.000', value: '50000' },
    { label: 'Rp100.000', value: '100000' },
    { label: 'Rp200.000', value: '200000' },
    { label: 'Rp500.000', value: '500000' },
    { label: 'Rp1.000.000', value: '1000000' },
  ];

  // Generate random amount by adding random 3 digits at the end
  useEffect(() => {
    if (formData.amount && step === 2) {
      const baseAmount = parseInt(formData.amount);
      const randomDigits = Math.floor(Math.random() * 900) + 100; // Random 3 digits (100-999)
      const randomizedTotal = baseAmount + randomDigits;
      setRandomizedAmount(randomizedTotal.toString());
    }
  }, [formData.amount, step]);

  const handleInputChange = (e: any) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleAmountSelect = (amount: string) => {
    if (amount === 'custom') {
      // Just set the amount to empty for custom input
      setFormData((prev) => ({ ...prev, amount: '' }));
    } else {
      // For predefined amounts, set the amount in the input field
      setFormData((prev) => ({ ...prev, amount }));
    }
  };

  const handleCopy = (text: string, type: 'amount' | 'accountNumber') => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      // Use the randomized amount instead of the original amount
      const dataToSend = { ...formData, amount: randomizedAmount };

      (Object.keys(dataToSend) as (keyof DonationFormData)[]).forEach((key) => {
        const value = dataToSend[key];
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });
      const BASE_URL = 'https://api.kampusgratis.id';

      const response = await fetch(`${BASE_URL}/api/v1/donations/submit`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const result = await response.json();
      setSuccess('Terima kasih! Donasi Anda telah berhasil dikirim.');
      toast.success('Terima kasih! Donasi Anda telah berhasil dikirim.');
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        amount: '',
        proof_image: null,
      });
      setStep(1);
      setSuccess('');
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Choose donation amount
  const renderStep1 = () => (
    <Card className="mt-12" gradient>
      <CardHeader className="border-b border-blue-100/20">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-base bg-clip-text text-transparent">
          Pilih Nominal Donasi
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Pilih nominal donasi atau masukkan nominal lainnya
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {donationOptions.map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="default"
              onClick={() => handleAmountSelect(option.value)}
              className={`py-4 ${
                formData.amount === option.value && option.value !== 'custom'
                  ? 'bg-blue-700 text-white'
                  : option.value === 'custom'
                  ? 'bg-white text-black border border-gray-300'
                  : 'bg-white text-black border border-gray-300'
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          <Label htmlFor="custom_amount">Masukkan Nominal Donasi</Label>
          <Input
            id="custom_amount"
            name="amount"
            type="number"
            min="5000"
            placeholder="Minimal Rp5.000"
            value={formData.amount}
            onChange={handleInputChange}
            className="mb-4"
          />
          <Button
            type="button"
            onClick={() =>
              formData.amount && parseInt(formData.amount) >= 5000
                ? setStep(2)
                : null
            }
            disabled={!formData.amount || parseInt(formData.amount) < 10000}
            className="w-full bg-gradient-to-r from-primary-base to-blue-700 text-white hover:from-blue-700 hover:to-blue-base py-4"
          >
            Lanjutkan <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  // Step 2: Payment details
  const renderStep2 = () => (
    <Card className="mt-12" gradient>
      <CardHeader className="border-b border-blue-100/20">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-base bg-clip-text text-transparent">
          Detail Pembayaran
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Silakan transfer sesuai nominal yang tertera
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Nominal Transfer</p>
                <p className="text-xl font-bold text-blue-700">
                  Rp{parseInt(randomizedAmount).toLocaleString('id-ID')}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleCopy(randomizedAmount, 'amount')}
                className="flex items-center gap-2 border border-blue-300"
              >
                {copied.amount ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied.amount ? 'Tersalin' : 'Salin'}
              </Button>
            </div>
            <p className="text-xs text-red-500 mt-2">
              *Mohon transfer sesuai nominal untuk memudahkan verifikasi
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Informasi Rekening</h4>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Bank:</span> {bankDetails.bank}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  <span className="text-gray-600">No. Rekening:</span>{' '}
                  {bankDetails.accountNumber}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    handleCopy(bankDetails.accountNumber, 'accountNumber')
                  }
                  className="flex items-center gap-2 border border-gray-300 text-xs py-1"
                >
                  {copied.accountNumber ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied.accountNumber ? 'Tersalin' : 'Salin'}
                </Button>
              </div>
              <p className="text-sm">
                <span className="text-gray-600">Atas Nama:</span>{' '}
                {bankDetails.accountName}
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="flex-1 border border-blue-300"
            >
              Kembali
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 bg-gradient-to-r from-primary-base to-blue-700 text-white hover:from-blue-700 hover:to-blue-base"
            >
              Konfirmasi Donasi <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Step 3: Confirmation form
  const renderStep3 = () => (
    <Card className="mt-12" gradient>
      <CardHeader className="border-b border-blue-100/20">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-base to-blue-base bg-clip-text text-transparent">
          Konfirmasi Donasi
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Bantu kami untuk memverifikasi bantuan dari anda!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="p-4 bg-green-50 text-green-600 rounded-lg text-sm">
              {success}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full_name">Nama Lengkap</Label>
              <Input
                id="full_name"
                name="full_name"
                placeholder="Masukkan nama lengkap"
                value={formData.full_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone_number">Nomor Telepon</Label>
              <Input
                id="phone_number"
                name="phone_number"
                placeholder="Contoh: +6282282838447"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Jumlah Donasi</Label>
              <Input
                id="amount"
                name="amount"
                type="text"
                value={`Rp${parseInt(randomizedAmount).toLocaleString(
                  'id-ID'
                )}`}
                disabled
                className="bg-gray-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="proof_image">Bukti Transfer</Label>
            <Input
              id="proof_image"
              name="proof_image"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              required
              className="!h-14 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                  file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 
                  hover:file:bg-blue-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Format yang didukung: JPG, PNG, JPEG (Max: 2MB)
            </p>
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              className="flex-1 border border-blue-300"
            >
              Kembali
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-primary-base to-blue-700 
                text-white hover:from-blue-700 hover:to-blue-base py-4"
            >
              {loading ? <LoadingButton /> : 'Kirim Donasi'}
              {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  // Render the appropriate step
  return (
    <>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </>
  );
};
