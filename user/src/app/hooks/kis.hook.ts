'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchKisAskingprice, fetchKisSection } from "../service/kis/kis.api";

export const useKixSection = (id:number): UseQueryResult<IKisSection> => {
    const queryResult = useQuery<IKisSection>({
        queryKey: ["kisSection", id],
        queryFn:async (): Promise<IKisSection> => {
            const response = await fetchKisSection(id);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useKixPrice = (stockCode:string): UseQueryResult<IKisAskPrice> => {
    console.log("useKixPrice input : ", stockCode)
    const queryResult = useQuery<IKisAskPrice>({
        queryKey: ["kisAskPrice",stockCode],
        queryFn:async (): Promise<IKisAskPrice> => {
            const response = await fetchKisAskingprice(stockCode);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
        staleTime : 1000,
    });

    return queryResult;
}
