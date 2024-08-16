'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchStockAticleTop } from "../service/itemArticle/itemArticle";


export const useStockAticleTop = (): UseQueryResult<IStockArticle[]> => {
    const queryResult = useQuery<IStockArticle[]>({
        queryKey: ["stockAticleTop"],
        queryFn: async (): Promise<IStockArticle[]> => {
            const response = await fetchStockAticleTop();
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
