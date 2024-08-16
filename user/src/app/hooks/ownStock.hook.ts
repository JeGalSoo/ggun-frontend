'use client'
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchOwnStockList, fetchOwnStockTotalProfit } from "../service/asset/ownStock.api";

export const useOwnStockTotalprofit = (): UseQueryResult<IOwnStock> => {
    const accountList: IAccount[] = [{
        id: 2,
        pdno: "005930",
        avgPrvs: "71390"
    },
    {
        id: 2,
        pdno: "000990",
        avgPrvs: "40000"
    }]

    const queryResult = useQuery<IOwnStock>({
        queryKey: ["ownStockTotalProfit"],
        queryFn: async (): Promise<IOwnStock> => {
            const response = await fetchOwnStockTotalProfit(accountList);
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });
    return queryResult;
}
 
    export const useOwnStockList = (acnoId:string): UseQueryResult<IOwnStock[]> => {
        const queryResult = useQuery<IOwnStock[]>({
            queryKey: ["ownStockList", acnoId],
            queryFn: async (): Promise<IOwnStock[]> => {
                const response = await fetchOwnStockList(acnoId);
                if (typeof response === 'object' && 'status' in response) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response;
            },
        });
        return queryResult;
    }
    