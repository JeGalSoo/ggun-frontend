'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchExchange } from "../service/exchange/exchange.api";

export const useExchange = (): UseQueryResult<IExchange[]> => {
    const queryResult = useQuery<IExchange[]>({
        queryKey: ["exchange"],
        queryFn: async (): Promise<IExchange[]> => {
            const response = await fetchExchange();
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
