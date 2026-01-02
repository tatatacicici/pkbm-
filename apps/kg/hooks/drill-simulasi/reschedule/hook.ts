import { useAtom } from "jotai";
import {
  CategorySimulationTypes,
  ScheduleTypes,
  ChooseSimulationTypes,
  ReturnTypesPopupScheduleStatus,
  ChooseTimeSimulasiTypes,
} from "../../../types/drillSimulasi";
import {
  categorySimulationStateAtom,
  chooseScheduleStateAtom,
  chooseSimulasiStateAtom,
  PopupModalScheduleOpenAtom,
  ChooseTimeSimulasiStateAtom,
} from "../../../store/drill-simulasi";

export const useCategorySimulation = (): CategorySimulationTypes => {
  const [getCategory, setCategory] = useAtom(categorySimulationStateAtom);
  return {
    setCategorySimulation: (val: string) => setCategory(val),
    getCategorySimulation: getCategory,
  };
};

export const useScheduleSimulation = (): ScheduleTypes => {
  const [getSchedule, setSchedule] = useAtom(chooseScheduleStateAtom);
  return {
    setScheduleSimulation: (val: boolean) => setSchedule(val),
    getScheduleSimulation: getSchedule,
  };
};

export const useChooseSimulation = (): ChooseSimulationTypes => {
  const [getChoose, setChoose] = useAtom(chooseSimulasiStateAtom);
  return {
    setChooseSimulation: (val: string) => setChoose(val),
    getChooseSimulation: getChoose,
  };
};

export const usePopupScheduleStatus = (): ReturnTypesPopupScheduleStatus => {
  const [get, set] = useAtom(PopupModalScheduleOpenAtom);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

export const useChooseTimeSimulation = (): ChooseTimeSimulasiTypes => {
  const [getTimeReschedule, setTimeReschedule] = useAtom(ChooseTimeSimulasiStateAtom);
  return {
    setChooseTimeSimulation: (val: string) => setTimeReschedule(val),
    getChooseTimeSimulation: getTimeReschedule,
  };
};
