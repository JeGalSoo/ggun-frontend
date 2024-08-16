'use client'

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { allAdmins, findAdminById } from "../service/admin/admin.api";

export const useAdminAllList = (): UseQueryResult<IAdmin[]> => {
    const queryResult = useQuery<IAdmin[]>({
        queryKey: ["adminAllList"],
        queryFn: async (): Promise<IAdmin[]> => {
            const response = await allAdmins();
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}

export const useAdminDetail = (id:string): UseQueryResult<IAdmin> => {
    const queryResult = useQuery<IAdmin>({
        queryKey: ["adminDetail",id],
        queryFn: async (): Promise<IAdmin> => {
            const response = await findAdminById(id)
            if ('status' in response) {
                throw new Error(`Error: ${response.status}`);
            }
            return response;
        },
    });

    return queryResult;
}
