'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchTransactionProductByDate, fetchTransactionNetByDate, fetchTransactionQuantityByDate, fetchTransactionColorByCount, fetchTransactionColorByDate, fetchTransactionTotalBydDate } from "../service/chart/chart.api";
import { NetProfitByDateData } from "../common/enums/netProfitByDate";

export const useNetProfitByDate = (): UseQueryResult<IChart[]> => {
    const queryResult = useQuery<IChart[]>({
        queryKey: ["netProfitByDate"],
        queryFn:async (): Promise<IChart[]> => {
            const response = await fetchTransactionNetByDate();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useQuantityByDate = (): UseQueryResult<IChart[]> => {
    const queryResult = useQuery<IChart[]>({
        queryKey: ["quantityByDate"],
        queryFn:async (): Promise<IChart[]> => {
            const response = await fetchTransactionQuantityByDate();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useProductByDate = (): UseQueryResult<any> => {
    const queryResult = useQuery<any>({
        queryKey: ["productByDate"],
        queryFn:async (): Promise<any> => {
            const response = await fetchTransactionProductByDate();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useTotalBydDate = (): UseQueryResult<any> => {
    const queryResult = useQuery<any>({
        queryKey: ["totalBydDate"],
        queryFn:async (): Promise<any> => {
            const response = await fetchTransactionTotalBydDate();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useColorByDate = (): UseQueryResult<any> => {
    const queryResult = useQuery<any>({
        queryKey: ["colorByDate"],
        queryFn:async (): Promise<any> => {
            const response = await fetchTransactionColorByDate();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useColorByCount = (): UseQueryResult<IColorChart[]> => {
    const queryResult = useQuery<IColorChart[]>({
        queryKey: ["colorByCount"],
        queryFn:async (): Promise<IColorChart[]> => {
            const response = await fetchTransactionColorByCount();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}