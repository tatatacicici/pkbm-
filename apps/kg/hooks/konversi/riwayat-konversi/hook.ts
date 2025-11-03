import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TRiwayatKonversiResponse } from "../../../types/riwayat-konversi";
import { riwayatKonversiGetRequest } from "./request";

export const useGetRiwayatKonversi = (): UseQueryResult<
  TRiwayatKonversiResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-history-simulation"],
    queryFn: async () => await riwayatKonversiGetRequest(),
  });