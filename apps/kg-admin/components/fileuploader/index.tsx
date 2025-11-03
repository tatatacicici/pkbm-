import React, { useState, FC } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineZoomInMap } from 'react-icons/md';
import { MdOutlineZoomOutMap } from 'react-icons/md';

interface FileUploaderProps {
  accept?: string;
}

export const FileUploader: FC<FileUploaderProps> = ({ accept }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fullSize, setFullSize] = useState<boolean>(false);
  const [originalFileName, setOriginalFileName] = useState<string | null>('');
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const originalFileName = file.name;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgSrc = e.target.result;
        setFilePreview(imgSrc);
      };
      reader.readAsDataURL(file);
    } else if (file.type === 'application/pdf') {
      // Jika tipe file adalah PDF, tampilkan pratinjau sebagai objek PDF
      setFilePreview(URL.createObjectURL(file));
    } else {
      // Untuk tipe file lainnya, tampilkan pesan teks
      setFilePreview('Tidak ada pratinjau untuk tipe file ini');
    }

    setOriginalFileName(originalFileName);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
  };

  const handleFullSize = () => {
    setFullSize(!fullSize);
  };

  return (
    <div>
      {!selectedFile ? (
        <div className="w-full overflow h-[40px] relative flex justify-center items-center">
          <div className="bg-primary-600 text-white h-full w-[20%] rounded-l-md flex justify-center items-center">
            Pilih File
          </div>
          <div className="h-full w-[80%] border-2 border-gray text-neutral-500 pl-10 flex items-center">
            Tidak Ada File Yang Dipilih
          </div>
          <div className="bg-[#E9F6FD] h-full w-[10%] rounded-r-md flex justify-center items-center">
            {accept}
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            accept={accept || '.pdf, .png, .jpg, .jpeg, .gif, .doc, .docx'}
            className="flex-1 w-full p-2 opacity-0 absolute"
          />
        </div>
      ) : (
        <div className="w-full relative" style={{ height: '100%' }}>
          {filePreview && (
            <div className="w-full h-full overflow-hidden rounded-md">
              <img
                src={filePreview}
                alt="Pratinjau"
                className={`w-full ${
                  fullSize ? 'h-[100%]' : 'h-[100px]'
                }  object-cover `}
              />
            </div>
          )}

          <div className="absolute top-5 right-20 ">
            <button
              className="rounded-full p-2 bg-neutral-300"
              onClick={handleRemoveFile}
            >
              <RiCloseLine color="white" size={30} />
            </button>
          </div>
          <div className="absolute top-5 left-5 ">
            <div className="bg-neutral-300 text-white rounded-md px-4 py-3">
              {originalFileName}
            </div>
          </div>
          <div className="absolute top-5 right-5">
            {fullSize ? (
              <button
                className="rounded-md p-3 bg-neutral-300 "
                onClick={handleFullSize}
              >
                <MdOutlineZoomInMap size={20} color="white" />
              </button>
            ) : (
              <button
                className="rounded-md p-3 bg-neutral-300"
                onClick={handleFullSize}
              >
                {' '}
                <MdOutlineZoomOutMap color="white" size={20} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
