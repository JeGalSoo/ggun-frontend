'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchNews } from "../service/news/news.api";

export const useNews = (): UseQueryResult<INews[]> => {
    const queryResult = useQuery<INews[]>({
        queryKey: ["news"],
        queryFn:async (): Promise<INews[]> => {
            const response = await fetchNews();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}