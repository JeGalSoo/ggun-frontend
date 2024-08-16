'use server'

import { extractTokenId } from "@/app/component/util/jwtDecode";

export async function allAccount(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/list?id=${id}`,{
            method: 'GET',
        })

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        return data
    } catch (error) {
        console.error("allAccount err : " + error);
        return { status: 500 };
    }
}

export async function findAccountById(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/detail?id=${id}`)
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        return data
    } catch (error) {
        console.error("findAccountById err : " + error);
        return { status: 500 };
    }
}

export async function accountHistories(id:string): Promise<IAccount[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/accHistories/list?id=${id}`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount[] = await response.json();
        if (!data || data.length === 0) { return { status: 404 }; }
        return data
    } catch (error) {
        console.error("accountHistories err : " + error);
        return { status: 500 };
    }
}

export async function depositApi(account: IAccount): Promise<IAccount | { status: number }> {
    console.log("deposit : " + JSON.stringify(account))
    const { acno, balance, tradeType, briefs } = account || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/deposit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: acno,
                balance: balance,
                tradeType: tradeType,
                briefs: briefs,
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount = await response.json();
        if (data == null) { return { status: 404 }; }
        console.log("deposit : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("deposit err : " + error);
        return { status: 500 };
    }
}

export async function withdrawAPi(account: IAccount): Promise<IAccount | { status: number }> {
    console.log("withdraw : " + JSON.stringify(account))
    const { acno, balance, tradeType, briefs, acpw } = account || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: acno,
                balance: balance,
                tradeType: tradeType,
                briefs: briefs,
                acpw :acpw, 
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAccount = await response.json();
        if (data == null) { return { status: 404 }; }
        console.log("withdraw : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("withdraw err : " + error);
        return { status: 500 };
    }
}

export async function fetchOwnStockTotalBalance(account:IAccount[]): Promise<IOwnStock | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/totalBalance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId : extractTokenId(),
                account: 2,
                pdno: "005930",
                avgPrvs: "71390",
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IOwnStock = await response.json();

        if (res == null) { return { status: 404 }; }

        console.log("fetchOwnStockTotalProfit data : ", res);

        return res;
    } catch (error) {
        console.error("fetchOwnStockTotalProfit err : " + error);
        return { status: 500 };
    }
}