import Avatar from 'react-avatar';

export default function TakeSimulasi({
  setIsTake = () => {},
  setIsModalOpen = () => {},
}: {
  setIsTake?: (value: boolean) => void;
  setIsModalOpen: (value: boolean) => void;
}) {
  return (
    <>
      <div className="bg-white rounded-md p-8 w-full shadow-sm">
        <h2 className="text-2xl font-bold">Simulasi Matkul 1</h2>
      </div>
      <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Daftar Anggota</h3>
            <div className="rounded-md [&>*]:p-4 border">
              <div className="bg-gray-100 text-gray-500 font-bold uppercase">
                Daftar Anggota
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="flex items-center gap-4 border-b border-gray-300"
                  key={i}
                >
                  <Avatar
                    name="Erifa Ramadhani"
                    size="40"
                    round={true}
                    textSizeRatio={1.75}
                  />
                  <div className="">
                    <h4 className="font-semibold">Erifa Ramadhani</h4>
                    <p className="text-gray-600">201910370311</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Penyerahan Berkas</h3>
          <div className="space-y-4">
            <label htmlFor="url-simulasi" className="block">
              URL Simulasi
              <input
                type="text"
                name="url-simulasi"
                id="url-simulasi"
                placeholder="https://docs.google.com/spreadsheets"
                className="p-2 w-full border border-gray-300 rounded-md font-normal text-sm mt-2"
              />
            </label>
            <label htmlFor="catatan-tambahan" className="block">
              Catatan Tambahan
              <textarea
                name="catatan-tambahan"
                id="catatan-tambahan"
                placeholder="Catatan tambahan"
                rows={4}
                className="p-2 w-full border border-gray-300 rounded-md font-normal text-sm mt-2"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md"
            onClick={() => setIsTake(false)}
          >
            Batal
          </button>
          <button
            className="bg-primary-500 text-white px-6 py-2 rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
}
