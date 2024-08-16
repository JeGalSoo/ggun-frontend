'use server'

import { extractTokenId } from "@/app/component/util/jwtDecode";

export async function getAllAiAccount(): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/getAi?id=${extractTokenId()}`,{
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }   
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        console.log("getAllAiAccount!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("getAllAiAccount err : " + error);
        return { status: 500 };
    }
}

export async function getAllCmaAccount(): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/getCma`,{
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }   
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        console.log("getAllCmaAccount!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("getAllCmaAccount err : " + error);
        return { status: 500 };
    }
}
