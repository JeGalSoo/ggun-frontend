'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchTransactionNetByDate } from "../service/chart/chart.api";
import { fetchDayVisiter, fetchMonthVisiter, fetchYearVisiter } from "../service/chart/visiter.api";

export const useVisiterYear = (): UseQueryResult<IVisitArray[]> => {
    const queryResult = useQuery<IVisitArray[]>({
        queryKey: ["visiterYear"],
        queryFn:async (): Promise<IVisitArray[]> => {
            const response = await fetchYearVisiter();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useVisiterDay = (): UseQueryResult<IVisit> => {
    const queryResult = useQuery<IVisit>({
        queryKey: ["visiterDay"],
        queryFn:async (): Promise<IVisit> => {
            const response = await fetchDayVisiter();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useVisiterMonth = (): UseQueryResult<IVisit> => {
    const queryResult = useQuery<IVisit>({
        queryKey: ["visiterMonth"],
        queryFn:async (): Promise<IVisit> => {
            const response = await fetchMonthVisiter();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}