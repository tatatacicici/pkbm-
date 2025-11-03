import { TDashboardResponse } from '../../types';
import { api } from '../../config/api/apiConfig';
import { useDashboardData } from './hook';
import { DASHBOARD } from '@kampus-gratis/utils';

export const dashboardGetRequest = async (): Promise<TDashboardResponse> => {
  const { data } = await api.get(DASHBOARD);
  // const {setDashboardData} = useDashboardData()
  return data;
};
