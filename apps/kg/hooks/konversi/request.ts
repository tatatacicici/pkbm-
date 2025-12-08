import { CONVERSIONS_SUBJECTS } from '@kampus-gratis/utils';
import { api } from '../../config';
import { TConversionDetailMatkul } from '../../types/konversi';

export const detailMatkulConversionRequest = async (
  id: string
): Promise<TConversionDetailMatkul> => {
  const { data } = await api.get(`${CONVERSIONS_SUBJECTS}/${id}/details`);

  return data;
};
