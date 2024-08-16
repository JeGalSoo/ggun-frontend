'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchNews } from "../service/news/news.api";
import { fetchArticleDatail, myArticleList } from "../service/articles/articles.api";

export const useMyArticleList = (boardId:string): UseQueryResult<IArticle[]> => {
    const queryResult = useQuery<IArticle[]>({
        queryKey: ["artiMyList", boardId],
        queryFn:async (): Promise<IArticle[]> => {
            const response = await myArticleList(boardId);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useArticleDatail = (id:string): UseQueryResult<IArticle> => {
    const queryResult = useQuery<IArticle>({
        queryKey: ["artiDetail", id],
        queryFn:async (): Promise<IArticle> => {
            const response = await fetchArticleDatail(id);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}