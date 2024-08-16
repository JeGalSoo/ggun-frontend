'use server'

import Today from "@/app/common/date/today";

export async function fetchYearVisiter(): Promise<IVisitArray[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/visit/year?year=2024`
            , {
                method: 'GET',
                // headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IVisitArray[] = await response.json();
        console.log("fetchYearVisiter api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchYearVisiter err : " + error);
        return { status: 500 };
    }
}

export async function fetchDayVisiter(): Promise<IVisit | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/visit/day?date=${Today()}`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IVisit = await response.json();
        console.log("fetchDayVisiter api : ", res);

        if (res.date == '') { 
            // return { status: 404 }; 
            return { date: '0' }
        }

        return res;

    } catch (error) {
        console.log("fetchDayVisiter err : " + error);
        // return { status: 500 };
        return { date: '15' }
    }
}

export async function fetchMonthVisiter(): Promise<IVisit | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/visit/month?year=2024&month=08`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IVisit = await response.json();
        console.log("fetchDayVisiter api : ", res);

        if (res.date == '') { 
            // return { status: 404 }; 
            return { date: '0' }
        }

        return res;

    } catch (error) {
        console.log("fetchDayVisiter err : " + error);
        // return { status: 500 };
        return { date: '15' }
    }
}

