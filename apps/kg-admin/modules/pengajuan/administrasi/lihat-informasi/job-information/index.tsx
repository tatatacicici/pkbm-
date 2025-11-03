'use client';
import Image from 'next/image';
import { Accordion } from '../../../../../components/accordion/index';

import {
  optionOccupation,
  optionCollegeFeesPaid,
  optionLiveWith,
  optionSalary,
} from '../../constant';
const JobInformation = ({ dataPekerjaan }: any) => {
  //Equates to constant value

  //Occupation
  const matchedOptionFatherOccupation = optionOccupation.find(
    (option) => option.value === dataPekerjaan?.father_occupation
  );
  const matchedOptionMotherOccupation = optionOccupation.find(
    (option) => option.value === dataPekerjaan?.mother_occupation
  );
  const matchedOptionSelfOccupation = optionOccupation.find(
    (option) => option.value === dataPekerjaan?.self_occupation
  );

  //Salary
  const matchedOptionFatherSalary = optionSalary.find(
    (option) => option.value === dataPekerjaan?.father_salary
  );
  const matchedOptionMotherSalary = optionSalary.find(
    (option) => option.value === dataPekerjaan?.mother_salary
  );
  const matchedOptionSelfSalary = optionSalary.find(
    (option) => option.value === dataPekerjaan?.self_salary
  );

  //LiveWith
  const matchedOptionLiveWith = optionLiveWith.find(
    (option) => option.value === dataPekerjaan?.live_with
  );

  //CollegeFeesPaid
  const matchedOptionCollegeFeesPaid = optionCollegeFeesPaid.find(
    (option) => option.value === dataPekerjaan?.tuition_payer
  );

  return (
    <div>
      <Accordion idAccordion="job-information" title="Informasi Pekerjaan">
        <div className="bg-white shadow-lg rounded-lg mt-5 w-full p-5">
          {dataPekerjaan ? (
            <div>
              <div className="w-full grid grid-cols-3 gap-5">
                <div className="cols-left">
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Nama Ayah{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {dataPekerjaan?.father_name}
                      </div>
                    </div>
                  </div>
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Nama Ibu{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {dataPekerjaan?.mother_name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cols-middle">
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Pekerjaan Ayah{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionFatherOccupation
                          ? matchedOptionFatherOccupation.label
                          : 'Occupation Not Found'}
                      </div>
                    </div>
                  </div>
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Pekerjaan Ibu{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionMotherOccupation
                          ? matchedOptionMotherOccupation.label
                          : 'Occupation Not Found'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cols-right">
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Penghasilan Ayah{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionFatherSalary
                          ? matchedOptionFatherSalary.label
                          : 'Salary Not Found'}
                      </div>
                    </div>
                  </div>
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Penghasilan Ibu{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionMotherSalary
                          ? matchedOptionMotherSalary.label
                          : 'Salary Not Found'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-5">
                <div className="cols-left">
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Pekerjaan Pribadi{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionSelfOccupation
                          ? matchedOptionSelfOccupation.label
                          : 'Occupation Not Found'}
                      </div>
                    </div>
                  </div>
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Tinggal Dengan{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionLiveWith
                          ? matchedOptionLiveWith.label
                          : 'Live With Not Found'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cols-right">
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Penghasilan Pribadi{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionSelfSalary
                          ? matchedOptionSelfSalary.label
                          : 'Salary Not Found'}
                      </div>
                    </div>
                  </div>
                  <div className="form-label mb-3">
                    <label className="text-neutral-700 text-[16px] font-semibold">
                      Biaya Hidup Selama Kuliah Ditanggung Oleh{' '}
                      <span className="ml-1 font-semibold text-error-600">
                        *
                      </span>
                    </label>
                    <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                      <div className="ml-4 text-neutral-700">
                        {matchedOptionCollegeFeesPaid
                          ? matchedOptionCollegeFeesPaid.label
                          : 'CollegeFeesPaid Not Found'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid place-content-center">
              <Image
                src="/assets/ic-data-null.svg"
                alt="image-null"
                width={300}
                height={300}
              />
              <p className="text-center text-neutral-900 text-[18px] font-[500]">
                Tidak Ada Data
              </p>
            </div>
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default JobInformation;
