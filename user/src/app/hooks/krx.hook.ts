'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchKrxJisu } from "../service/krxJisu/krx.api";

export const useKrxJisu = (): UseQueryResult<IKrx[]> => {
    const queryResult = useQuery<IKrx[]>({
        queryKey: ["krxJisu"],
        queryFn: async (): Promise<IKrx[]> => {
            const response = await fetchKrxJisu();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}