'use server'
import Today from "@/app/common/date/today";
import Yesterday from "@/app/common/date/yesterday";

export async function fetchKrxJisu (): Promise<IKrx[] | { status: number }> {
    async function fetchData(date: string): Promise<IKrx[]> {
        const response = await fetch(`${process.env.KRX_DEV_API_URL}?AUTH_KEY=${process.env.KRX_DEV_API_KEY}&basDd=${date}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IKrxResponse = await response.json();
        return res.OutBlock_1;
    }

    try {
        let date = new Date();
        let res = await fetchData(Today());
        let attempts = 0;

        while (res != null && attempts < 7) {
            date = new Date();
            date.setDate(date.getDate() - (attempts + 1));
            const formattedDate = Yesterday(date);
            res = await fetchData(formattedDate);
            attempts++;
        }

        if (res.length === 0) {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.log("KRX JISU err : " + error);
        return { status: 500 };
    }
}