'use server'

import ThirtyDaysAgo from "@/app/common/date/thirtyDaysAgo";
import Today from "@/app/common/date/today";
import { stocMiniChartDummmy } from "@/app/common/dummy/chart.dummy";
import { stockInfoDummy } from "@/app/common/dummy/stock.dummy";

export async function fetchItemsDetail(search:string): Promise<IItems | { status: number }> {
    console.log("fetchItemsDetail requsetData : search: ", search, " date : ", ThirtyDaysAgo())
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/items/detail`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                search : search,
                sdate : ThirtyDaysAgo(),
                edate : Today(),
            })
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IItems = await response.json();
        // console.log("fetchItemsDetail data : ", res);
        if (res == null) {
            // return { status: 404 };
            return stockInfoDummy;
        }

        return res;
    } catch (error) {
        console.error("fetchItemsDetail api err : " + error);
        return stockInfoDummy;
    }
}
