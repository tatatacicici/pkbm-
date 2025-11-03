import { STUDI_KU_MODULE, STUDI_KU_MODULE_SESSION } from "@kampus-gratis/utils";
import { api } from '../../../config/api/apiConfig';
import { TModuleContentResponse, TModuleResponse, TModuleResumePayload, TModuleResumeResponse, TWatchedVideoProgressReponse } from "../../../types/module-content";

export const moduleGetRequest = async (
  subject_id: string | number,
  session_id: string | number,
): Promise<TModuleResponse> => {
  const { data } = await api.get(`/v2/my-study/subjects/${subject_id}/sessions/${session_id}/modules`);
  return data;
};

export const moduleContentGetRequest = async (
  subject_id: string | number,
  session_id: string | number,
  module_id: string | number,
): Promise<TModuleContentResponse> => {
  const { data } = await api.get(`/v2/my-study/subjects/${subject_id}/sessions/${session_id}/modules/${module_id}`);
  return data;
};

export const watchedVideoProgressRequest = async (
  id: string,
): Promise<TWatchedVideoProgressReponse> => {
  const { data } = await api.post(`/v1/watched-video-progress/video/${id}/taken`);
  return data;
};

export const moduleResumeSubmitRequest = async (
  payload: TModuleResumePayload,
): Promise<TModuleResumeResponse> => {
  const { data } = await api.post(
    `${STUDI_KU_MODULE}/${payload.id}/resume`,
    payload.req
  );
  return data;
};


