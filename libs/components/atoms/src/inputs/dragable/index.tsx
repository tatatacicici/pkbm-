'use client';

import Image from 'next/image';
import { ReactElement, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FieldValues, useController } from 'react-hook-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import IconFile from './ic-file';
import { TUploadFieldProps } from './types';

export const UploadDragbleField = <T extends FieldValues>(
  props: TUploadFieldProps<T>
): ReactElement => {
  const { field } = useController(props);
  const [fileList, setFileList] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      field.onChange(acceptedFiles);
      setFileList(acceptedFiles);
    },
    [field]
  );

  const { getRootProps, getInputProps } = useDropzone({ ...props, onDrop });
  const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/png',
  ];

  const ACCEPTED_VIDEO_TYPES = ['video/ogg', 'video/webm', 'video/mp4'];

  const handleRemoveFile = (index: number) => {
    const updatedList = [...fileList];
    updatedList.splice(index, 1);
    setFileList(updatedList);
    field.onChange(updatedList);
  };

  return (
    <div
      {...getRootProps(props)}
      className={`flex items-center min-h-[300px] bg-neutral-100 justify-center relative w-full p-2 border-2 rounded-lg border-neutral-300 ${props.className}`}
    >
      {field.value === null ||
      field.value === undefined ||
      fileList.length === 0 ? (
        <div className="flex flex-col items-center w-full px-4 py-6 bg-[#F5F5F5] dark:bg-transparent rounded-lg cursor-pointer">
          <IconFile />
          {/* <span className="mt-2 text-xs md:text-sm lg:text-sm text-center text-black font-semibold dark:text-white">
            Seret, taruh dan <span className="text-blue-base">pilih file</span>{' '}
            untuk mengunggah
          </span> */}
          <span className="mt-2 text-xs md:text-sm lg:text-sm text-center text-black font-semibold dark:text-white">
            Seret, taruh dan <span className="text-sky-base">pilih file</span>{' '}
            untuk mengunggah
          </span>
          <span className="flex justify-center items-center text-xs md:text-sm lg:text-sm mt-2 rounded-lg border overflow-hidden">
            <p className="bg-neutral-300 font-semibold p-3">Pilih File</p>
            <p className="px-5">Belum memilih tugas</p>
          </span>
          <input
            {...getInputProps(props)}
            {...props}
            onChange={(event) => {
              if (event.target.files) {
                const filesArray = Array.from(event.target.files);
                field.onChange(filesArray);
                setFileList(filesArray);
              }
            }}
            className="hidden"
            type="file"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full h-full">
          {fileList &&
            fileList.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-neutral-300 p-2 rounded-lg border-dashed h-full"
              >
                <div className="flex gap-2 items-center">
                  {file.type.includes('image') ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      width={150}
                      height={150}
                      alt="image"
                    />
                  ) : file.type.includes('video') ? (
                    <video
                      src={URL.createObjectURL(file)}
                      width={150}
                      height={150}
                      controls
                    />
                  ) : (
                    <IconFile />
                  )}
                  <span className="text-black break-all text-sm">
                    {file.name}
                  </span>
                </div>
                <div
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveFile(index)}
                >
                  <AiOutlineCloseCircle color="#e63a3a" size={20} />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
