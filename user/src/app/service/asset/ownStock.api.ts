'use server'

import { extractTokenId } from "@/app/component/util/jwtDecode";

export async function fetchOwnStockTotalProfit(account: IAccount[]): Promise<any | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/totalProfit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account),
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockTotalProfit data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockTotalProfit err : " + error);
        return {
            profitRatio: 1.04,
            profitLoss: 206640,
            evaluatedAmount: 19686760,
            buyingAmount: 19893400
        }
    }
}

export async function fetchOwnStockProfit(): Promise<IOwnStock | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/profit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([
                {
                    account: 2,
                    pdno: "005930",
                    avgPrvs: "71390",
                },
                {
                    account: 2,
                    pdno: "000990",
                    avgPrvs: "40000",
                },
            ]),
        });

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockProfit data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockProfit err : " + error);
        return { status: 500 };
    }
}


export async function fetchOwnStockList(id: string): Promise<IOwnStock[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/list?id=${id}`, {
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IOwnStock[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        // console.log("fetchOwnStockList!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("fetchOwnStockList err : " + error);
        return { status: 500 };
    }
}


export async function fetchOwnStockSave(ownStock : IAskTrade): Promise<IOwnStock | { status: number }> {
    const { pdno, prdtName, pdQty, avgPrvs, tradeType,account, acpw,sllBuyDvsnCd, ordDvsnCd } = ownStock || {}
    console.log("input order : ",  pdno, prdtName, pdQty, avgPrvs, tradeType,account, acpw,sllBuyDvsnCd, ordDvsnCd)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/ownStocks/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pdno: pdno,
                prdtName: prdtName,
                pdQty: pdQty,
                avgPrvs: avgPrvs,
                tradeType: tradeType,
                account: account,
                acpw: acpw,
                sllBuyDvsnCd: sllBuyDvsnCd,
                ordDvsnCd: ordDvsnCd,
            }),
        });

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockSave data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockSave err : " + error);
        return { status: 500 };
    }
}
