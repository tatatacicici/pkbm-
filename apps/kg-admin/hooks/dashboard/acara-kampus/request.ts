import { TEventResponse } from '../../../types/leaderboard';
import { api } from '../../../config/apiConfig';

export const eventGetRequest = async (): Promise<TEventResponse> => {
    const { data } = await api.get('v1/event');
    return data;
  };