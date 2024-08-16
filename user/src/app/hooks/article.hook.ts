'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchMyArticleList, findByArticleId } from "../service/articles/articles.api";

export const useArticleDetail = (id:string): UseQueryResult<IArticle> => {
    const queryResult = useQuery<IArticle>({
        queryKey: ["artiDetail", id],
        queryFn:async (): Promise<IArticle> => {
            const response = await findByArticleId(id);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
export const useMyArticleList = (id:string): UseQueryResult<IArticle[]> => {
    const queryResult = useQuery<IArticle[]>({
        queryKey: ["artiMyList", id],
        queryFn:async (): Promise<IArticle[]> => {
            const response = await fetchMyArticleList(id);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
