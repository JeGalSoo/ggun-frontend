'use client'

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { accountHistories, allAccount, depositApi, withdrawAPi } from "../service/asset/account.api";
import { extractTokenId } from "../component/util/jwtDecode";
import { getAllAiAccount, getAllCmaAccount } from "../service/asset/ai.api";

const jwtTokenId = extractTokenId();

export const useAccList = (): UseQueryResult<IAccount[]> => {
    const queryResult = useQuery<IAccount[]>({
        queryKey: ["accList"],
        queryFn: async (): Promise<IAccount[]> => {
            const response = await allAccount(jwtTokenId+'');
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        },
    });

    return queryResult; 

}

export const useAccHistory = (acno:string): UseQueryResult<IAccount[]> => {
    const queryResult = useQuery<IAccount[]>({
        queryKey: ["accHistory", acno],
        queryFn: async (): Promise<IAccount[]> => {
            const response = await accountHistories(acno);
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        },
    });

    return queryResult; 
}

export const useAllAiAccount = (): UseQueryResult<IAccount[]> => {
    const queryResult = useQuery<IAccount[]>({
        queryKey: ["myAllAi"],
        queryFn: async (): Promise<IAccount[]> => {
            const response = await getAllAiAccount();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        },
    });

    return queryResult; 
}

export const useAllCmaAccount = (): UseQueryResult<IAccount[]> => {
    const queryResult = useQuery<IAccount[]>({
        queryKey: ["myAllCma"],
        queryFn: async (): Promise<IAccount[]> => {
            const response = await getAllCmaAccount();
            if (typeof response === 'object' && 'status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response as IAccount[];
        },
    });

    return queryResult; 
}
