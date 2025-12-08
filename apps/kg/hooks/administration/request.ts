import {
  ADMINISTRATION,
  ADMINISTRATION_BIODATA,
  ADMINISTRATION_CONSTANTS,
  ADMINISTRATION_FACULTY,
  ADMINISTRATION_FAMILIAL,
  ADMINISTRATION_FILE,
} from '@kampus-gratis/utils';
import { serialize } from 'object-to-formdata';
import { api } from '../../config/api/apiConfig';
import {
  TBiodataAdm,
  TBiodataResponse,
  TConstantsResponse,
  TFacultyAdm,
  TFamilyAdm,
  TFamilyResponse,
  TFileAdm,
  TFileResponse,
  TGetAdmResponse,
  TSocialMediaPayload,
  TTeacherRegistrationPayload,
} from '../../types/administration';

export const getAdmRequest = async (): Promise<TGetAdmResponse> => {
  const { data } = await api.get(ADMINISTRATION);
  return data;
};

export const privateInformationRequest = async (
  payload: TBiodataAdm
): Promise<TBiodataResponse> => {
  const { data } = await api.put(ADMINISTRATION_BIODATA, payload);
  return data;
};

export const familyInformationRequest = async (
  payload: TFamilyAdm
): Promise<TFamilyResponse> => {
  const { data } = await api.post(ADMINISTRATION_FAMILIAL, payload);
  return data;
};

// export const fileInformationRequest = async (payload: TFileAdm): Promise<TFileResponse> => {
//   const { data } = await api.post("/administration/file", serialize(payload));
//   return data;
// };
export const fileInformationRequest = async (
  payload: TFileAdm
): Promise<TFileResponse> => {
  const { data } = await api({
    method: 'post',
    url: ADMINISTRATION_FILE,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const facultyInformationRequest = async (
  payload: TFacultyAdm
): Promise<TFamilyResponse> => {
  const { data } = await api.post(ADMINISTRATION_FACULTY, payload);
  return data;
};

export const constantsRequest = async (): Promise<TConstantsResponse> => {
  const { data } = await api.get(ADMINISTRATION_CONSTANTS);
  return data;
};

export const teacherRegistrationRequest = async (
  payload: TTeacherRegistrationPayload
): Promise<TBiodataResponse> => {
  const { data } = await api.post('v1/teacher/register', payload);
  return data;
}

export const socialMediaRequest = async (
  payload: TSocialMediaPayload
): Promise<TSocialMediaPayload> => {
  const { data } = await api.put('/v1/user/profile/social-media', payload);
  return data;
};