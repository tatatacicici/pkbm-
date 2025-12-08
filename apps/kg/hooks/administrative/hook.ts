import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TProvinceResponse, TReturnStatusProvince } from "../../types";
import { getDistrictRequest, getProvinceRequest, getRegencyRequest, getVillageRequest } from "./request";
import { StatusProvinceState } from "../../recoil/atoms/administrative";
import { useRecoilState } from "recoil";

export const useStatusProvince = (): TReturnStatusProvince => {
    const [get, set] = useRecoilState(StatusProvinceState);
    return {
        getProvinceStatus: get,
        setProvinceStatus: (val) => set(val),
    };
};

export const useGetProvince = (): UseQueryResult<TProvinceResponse> =>
    useQuery({
        queryKey: ['get-all-province'],
        queryFn: async () => await getProvinceRequest(),
    });

export const useGetRegency = (id: string | number): UseQueryResult<TProvinceResponse> =>
    useQuery({
        queryKey: ['get-all-regency', id],
        queryFn: async () => await getRegencyRequest(id),
        enabled: !!id,
    });

export const useGetDistrict = (id: string | number): UseQueryResult<TProvinceResponse> =>
    useQuery({
        queryKey: ['get-all-district', id],
        queryFn: async () => await getDistrictRequest(id),
        enabled: !!id,
    });

export const useGetVillage = (id: string | number): UseQueryResult<TProvinceResponse> =>
    useQuery({
        queryKey: ['get-all-village', id],
        queryFn: async () => await getVillageRequest(id),
        enabled: !!id,
    });