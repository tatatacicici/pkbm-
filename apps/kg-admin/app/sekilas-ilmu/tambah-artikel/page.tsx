import Button from '../../../components/button/Button';
import InputJPG from '../../../components/input/jpg/InputJPG';
import InputText from '../../../components/input/text/InputText';
import BaseLayout from '../../../modules/base/BaseLayout';

export default function TambahArtikelPage() {
  return (
    <BaseLayout>
      <div className="flex justify-between mb-10">
        <p className="flex justify-center place-items-center font-semibold">
          Tahukah Kamu
        </p>
      </div>
      <form>
        <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
          <div className="inline-block w-full">
            <label htmlFor="judul-artikel">Judul Artikel</label>
            <input
              type="text"
              id="judul-artikel"
              className="w-full pl-2 border-2 border-[#e5e5e5] py-2 rounded-md"
              placeholder="Masukkan Judul Artikel"
            />
            <div className="flex justify-evenly w-full pt-4 space-x-4">
              <div className="inline-block w-full">
                {/* <InputText placeholder="ex : #tags1" id="tags" title="Tags" /> */}
              </div>
              <div className="inline-block w-full">
                {/* <InputText
                  placeholder="Masukkan judul artikel"
                  title="Penulis"
                  id="tags"
                /> */}
              </div>
            </div>
            <div className="rounded-lg">
              <InputJPG id="img" title="Blog Image" htmlfor="tags" />
            </div>
            <div className="flex justify-end pt-3 gap-2">
              <Button
                plus={false}
                buttonStyle="bg-transparent border border-primary-base rounded-lg px-3 py-2 text-primary-base"
              >
                Batal
              </Button>
              <Button
                plus={false}
                buttonStyle="bg-primary-base rounded-lg px-3 py-2 text-white"
              >
                Unggah
              </Button>
            </div>
          </div>
        </div>
      </form>
    </BaseLayout>
  );
}
