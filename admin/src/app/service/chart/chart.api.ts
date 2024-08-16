'use server'

import { ColorByCountData, ColorByDateData } from "@/app/common/enums/colorChart";
import { NetProfitByDateData, QuantityByDateData } from "@/app/common/enums/netProfitByDate";
import { ProductByDateData } from "@/app/common/enums/ProductByDate";

export async function fetchTransactionLlit(): Promise<IChart | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/list`
            , {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IChart = await response.json();
        console.log("fetchTransactionLlit api : ", res);

        if (res == null) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionLlit err : " + error);
        return { status: 500 };
    }
}

export async function fetchTransactionNetByDate(): Promise<IChart[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/netProfitByDate`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IChart[] = await response.json();
        console.log("fetchTransactionNetByDate api : ", res[0]);
        
        if (!res) { return { status: 404 }; }
        
        return NetProfitByDateData;
        
    } catch (error) {
        console.log("fetchTransactionNetByDate err : " + error);
        return NetProfitByDateData;
    }
}

export async function fetchTransactionQuantityByDate(): Promise<any[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/QuantityByDate`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        console.log("fetchTransactionQuantityByDate api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return QuantityByDateData;

    } catch (error) {
        console.log("fetchTransactionQuantityByDate err : " + error);
        return QuantityByDateData;
    }
}

export async function fetchTransactionProductByDate(): Promise<any | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/getProductByDate`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any = await response.json();
        console.log("fetchTransactionProductByDate api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return ProductByDateData;

    } catch (error) {
        console.log("fetchTransactionProductByDate err : " + error);
        return ProductByDateData;
    }
}

export async function fetchTransactionTotalBydDate(): Promise<IChart | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/TotalBydDate`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IChart = await response.json();
        console.log("fetchTransactionTotalBydDate api : ", res);

        if (res == null) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionTotalBydDate err : " + error);
        return { status: 500 };
    }
}

export async function fetchTransactionColorByDate(): Promise<any | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/getColorByDate`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res:any = await response.json();
        console.log("fetchTransactionColorByDate api : ", res);

        // if (res.length == 0) { return { status: 404 }; }

        return ColorByDateData;

    } catch (error) {
        console.log("fetchTransactionColorByDate err : " + error);
        return ColorByDateData;
    }
}




export async function fetchTransactionColorByCount(): Promise<IColorChart[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/transactions/getColorByCount`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IColorChart[] = await response.json();
        console.log("fetchTransactionColorByCount api : ", res);

        // if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchTransactionColorByCount err : " + error);
        return ColorByCountData;
    }
}
