'use server'

import Today from "@/app/common/date/today";
import { transWonDummy } from "@/app/common/dummy/account.dummy";

export async function fetchExchange() : Promise<IExchange[] | { status: number }> {
    const code = ['USD', 'CNH', 'EUR', 'JPY(100)'];
    const data: IExchange[] = [];
    const url = `${process.env.EXCHANGE_API_URL}?authkey=${process.env.EXCHANGE_API_KEY}&searchdate=${Today()}&data=AP01`;

    console.log("fetchExchange URL!!!", url);
    
    try {
        const response = await fetch(url);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IExchange[] = await response.json();
        if (res.length === 0 ) { return transWonDummy }
        
        res.forEach((v: IExchange) => {
            if (code.includes(v.cur_unit)) {
                data.push(v);
            }
        });

        console.log("fetchExchange data : ", data);


        return data;
    } catch (error) {
        console.error("fetchExchange err : " + error);
        return { status: 500 };
    }
}