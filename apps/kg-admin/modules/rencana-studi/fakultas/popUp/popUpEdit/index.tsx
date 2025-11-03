"use client"

import React,{useState} from "react";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, UploadField } from "@kampus-gratis/components/atoms";
import { validationAddFaculty } from "../../../../../config/validation/rencana-studi";
import { usePutFaculty } from "../../../../../hooks/rencana-studi/hook";
import { modalBerhasil, modalEdit, modalEditSuccess } from "../../../../../recoil/atoms/rencana-studi";
import { TAddFacultyPayload, TFacultyItem, TUpdateFacultyPayload } from "../../../../../types/rencatastudi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineZoomInMap } from 'react-icons/md';
import { MdOutlineZoomOutMap } from 'react-icons/md';


interface ModalPopUpEditProps {
  facultyData: TFacultyItem;
}

export const ModalPopUpEdit: FC<ModalPopUpEditProps> = ({ facultyData }) => {
  // console.log(facultyData);
  const [selectedFile, setSelectedFile] = useState<string | null>(String(facultyData.thumbnail));
  const [filePreview, setFilePreview] = useState<string | null>(String(facultyData.thumbnail));
  const [fullSize, setFullSize] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(modalEdit);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] = useRecoilState(modalBerhasil);
  const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] =
  useRecoilState(modalEditSuccess);
  const { mutate } = usePutFaculty(String(facultyData.id));
const { control, handleSubmit, formState: { isValid, errors }, reset } = useForm({
    resolver: zodResolver(validationAddFaculty),
    mode: "all",
    defaultValues: {
      faculty_name: facultyData.name,
      faculty_image: undefined, // Set to undefined initially
    },
  });

  const onSubmit = handleSubmit((data) => {
    
    const formData = new FormData();
    formData.append('name', data.faculty_name);
  
    if (data.faculty_image) {
      formData.append('thumbnail', data.faculty_image[0]);
    }
  
    try {
      mutate(
        formData as unknown as TUpdateFacultyPayload,
        {
          onSuccess: () => {
            setIsModalEditOpen(false);
            queryClient.invalidateQueries(['get-faculty-pagination']);
            setIsModalEditSuccessOpen(true);
          },
        }
      );
  
      // Invalidasi query di luar try-catch
      queryClient.invalidateQueries(['get-faculty-pagination']);
    } catch (err) {
      console.log(err);
    }
  });

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
  };

  const handleFullSize = (event:any) => {
    event.preventDefault()
    setFullSize(!fullSize);
  };
  

  return (
    <>
   
      <form action="" onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
        <div className="w-full pb-3 flex flex-col gap-y-4 font">
          <TextField
            label="Nama Fakultas"
            name="faculty_name"
            placeholder="Nama Fakultas"
            required
            variant="md"
            control={control}
          />
 {!selectedFile ? (
          <UploadField
            name="faculty_image"
            variant="md"
            control={control}
            accepted=".jpg"
            label="Gambar"
            message={errors?.faculty_image?.message?.toString()}
            status={errors.faculty_image ? 'error' : 'none'}
          />
          ):(
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
      
              <div className="absolute top-[18px] right-16 ">
                <button
                  className="rounded-full p-2 bg-neutral-300"
                  onClick={handleRemoveFile}
                >
                  <RiCloseLine color="white" size={20} />
                </button>
              </div>
              {/* <div className="absolute top-5 left-5 ">
                <div className="bg-neutral-300 text-white rounded-md px-4 py-3">
                  {originalFileName}
                </div>
              </div> */}
              <div className="absolute top-5 right-5">
                {fullSize ? (
                  <button
                    className="rounded-md p-2 bg-neutral-300 "
                    onClick={handleFullSize}
                  >
                    <MdOutlineZoomInMap size={15} color="white" />
                  </button>
                ) : (
                  <button
                    className="rounded-md p-2 bg-neutral-300"
                    onClick={handleFullSize}
                  >
                    {' '}
                    <MdOutlineZoomOutMap color="white" size={15} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full"></div>
        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300 flex items-center justify-center gap-2 bg-blue-base text-white hover:border-version2-300"
          >
            Ubah
          </Button>
          <Button
            type="button"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-white text-blue-base  hover:border-version2-300 border-2 border-blue-base"
            onClick={() => setIsModalEditOpen(false)}
          >
            Kembali
          </Button>
        </div>
      </div>
    </form>
    
 
    </>
    
  );
};
