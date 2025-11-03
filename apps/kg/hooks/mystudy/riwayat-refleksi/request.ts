import { TRiwayatRefleksiSingleResponse } from '../../../types/riwayat-refleksi';
import { api } from '../../../config';

export const getRiwayatRefleksi = async (sessionId:string ): Promise<TRiwayatRefleksiSingleResponse> => {
    const { data } = await api.get(`v1/my-study/sessions/${sessionId}/reflection`);
    
    return data;
  };
