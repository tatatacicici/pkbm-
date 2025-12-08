import { useRecoilState } from "recoil";
import {
  CategorySimulationTypes,
  ScheduleTypes,
  ChooseSimulationTypes,
  ReturnTypesPopupScheduleStatus,
  ChooseTimeSimulasiTypes,
} from "../../../types/drillSimulasi";
import {
  categorySimulationState,
  chooseScheduleState,
  chooseSimulasiState,
  PopupModalScheduleOpen,
  ChooseTimeSimulasiState,
} from "../../../recoil/atoms/drill-simulasi";

export const useCategorySimulation = (): CategorySimulationTypes => {
  const [getCategory, setCategory] = useRecoilState(categorySimulationState);
  return {
    setCategorySimulation: (val: string) => setCategory(val),
    getCategorySimulation: getCategory,
  };
};

export const useScheduleSimulation = (): ScheduleTypes => {
  const [getSchedule, setSchedule] = useRecoilState(chooseScheduleState);
  return {
    setScheduleSimulation: (val: boolean) => setSchedule(val),
    getScheduleSimulation: getSchedule,
  };
};

export const useChooseSimulation = (): ChooseSimulationTypes => {
  const [getChoose, setChoose] = useRecoilState(chooseSimulasiState);
  return {
    setChooseSimulation: (val: string) => setChoose(val),
    getChooseSimulation: getChoose,
  };
};

export const usePopupScheduleStatus = (): ReturnTypesPopupScheduleStatus => {
  const [get, set] = useRecoilState(PopupModalScheduleOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

export const useChooseTimeSimulation = (): ChooseTimeSimulasiTypes => {
  const [getTimeReschedule, setTimeReschedule] = useRecoilState(ChooseTimeSimulasiState);
  return {
    setChooseTimeSimulation: (val: string) => setTimeReschedule(val),
    getChooseTimeSimulation: getTimeReschedule,
  };
};
