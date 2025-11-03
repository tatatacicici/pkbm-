import { MEETING, MEETING_STUDENT_HISTORY } from "@kampus-gratis/utils";
import {api} from "../../config/api/apiConfig";
import { TSimulationHistoryResponse, TSimulationResponse } from "../../types/drillSimulasi";

export const SimulationService = async (): Promise<TSimulationResponse> => {
  const { data } = await api.get(MEETING);
  return data;
};

export const HistoryService = async (): Promise<TSimulationHistoryResponse> => {
  const { data } = await api.get(MEETING_STUDENT_HISTORY);
  return data;
};
