'use server'

import { cookies } from "next/headers";
import { userHeaders } from "../header/userHeader";
import { stockCommunDummy } from "@/app/common/dummy/chat.dummy";


export async function fetchStockAticleTop(): Promise<IStockArticle[] | { status: number }> {
    try {
        console.log("token : ", cookies().get('accessToken'))
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/stockArticle/listTop`,{
            method: 'GET',
            headers: userHeaders,
        });

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IStockArticle[] = await response.json();
        if (data.length === 0) { 
            return stockCommunDummy
            // return { status: 404 }; 
        }

        // console.log("fetchStockAticleTop : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.error("fetchStockAticleTop err : " + error);
        return stockCommunDummy;
        // return { status: 500 };
    }
}