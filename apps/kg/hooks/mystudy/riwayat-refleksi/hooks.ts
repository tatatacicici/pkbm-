import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TRiwayatRefleksiSingleResponse } from "../../../types/riwayat-refleksi";
import { getRiwayatRefleksi } from "./request";

export const useGetRiwayatRefleksi = (
    sessionId: string
  ): UseQueryResult<TRiwayatRefleksiSingleResponse> => {
    return useQuery({
      queryKey: ['get-riwayat-refleksi', sessionId],
      queryFn: async () => await getRiwayatRefleksi(sessionId),
    });
  };