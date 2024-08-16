'use client'

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchChatroomList, fetchChatting } from "../service/chat/chat.api";

export const useChatRoom = (): UseQueryResult<IChat[]> => {
    const queryResult = useQuery<IChat[]>({
        queryKey: ["chatRoom"],
        queryFn: async (): Promise<IChat[]> => {
            const response = await fetchChatroomList();
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useChatting = (roomId:number): UseQueryResult<IChat[]> => {
    const queryResult = useQuery<IChat[]>({
        queryKey: ["chatting",roomId],
        queryFn: async (): Promise<IChat[]> => {
            const response = await fetchChatting(roomId);
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
