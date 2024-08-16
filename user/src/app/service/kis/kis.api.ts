'use server'

import { cookies } from "next/headers";

export async function fetchKisAuth() {
    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_AUTH2}`
    try {
        const response = await fetch(url
            , {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    grant_type: 'client_credentials',
                    appkey: process.env.KIS_DEV_API_KEY,
                    appsecret: process.env.KIS_DEV_API_SECERET,
                })
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IKisAuth = await response.json();
        const result: string = res.access_token;

        if (!result) { return { status: 404 }; }

        cookies().set('kisToken', result);
        return result;

    } catch (error) {
        console.log("fetchKisAuth err : " + error);
        return { status: 500 };
    }
}


export async function fetchKisSection(props: number): Promise<IKisSection | { status: number }> {
    const authToken = cookies().get('kisToken')?.value || await fetchKisAuth();

    const fid_input_iscd = props == 1 ? "1001" : "0001"
    const query = new URLSearchParams({
        "fid_cond_mrkt_div_code": "U",
        "fid_input_date_1": "20240701",
        "fid_input_date_2": "20240731",
        "fid_input_iscd": fid_input_iscd,
        "fid_period_div_code": "D"
    })

    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_SECTION}?${query}`

    const headers: HeadersInit = {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + authToken,
        'appkey': process.env.KIS_DEV_API_KEY || '',
        'appsecret': process.env.KIS_DEV_API_SECERET || '',
        'tr_id': 'FHKUP03500100'
    };

    try {
        const response = await fetch(url
            , {
                method: 'GET',
                headers: headers,
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IKisSection = await response.json();

        if (res.length === 0) {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.log("KIS Section api err : " + error);
        return { status: 500 };
    }
}

export async function fetchKisAskingprice(stockCode:string): Promise<IKisAskPrice | { status: number }> {
    const authToken = cookies().get('kisToken')?.value || await fetchKisAuth();
    console.log("KIS stockCode : ", stockCode);

    const query = new URLSearchParams({
        "fid_cond_mrkt_div_code": "J",
        "fid_input_iscd": stockCode,
    })

    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_TRADE}?${query}`

    const headers: HeadersInit = {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + authToken,
        'appkey': process.env.KIS_DEV_API_KEY || '',
        'appsecret': process.env.KIS_DEV_API_SECERET || '',
        'tr_id': 'FHKST01010200'
    };

    try {
        const response = await fetch(url
            , {
                method: 'GET',
                headers: headers,
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IKisAskPrice = await response.json();

        if (res.msg1 != '정상처리 되었습니다.') {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.log("KIS AskPrice api err : " + error);
        return { status: 500 };
    }
}

export async function fetchKisDailyPrice(): Promise<IKisAskPrice[] | { status: number }> {
    const authToken = cookies().get('kisToken')?.value || await fetchKisAuth();

    const query = new URLSearchParams({
        "fid_cond_mrkt_div_code": "J",
        "fid_input_iscd": "005930",
        "fid_period_div_code" : "D",
        "fid_org_adj_prc" : "0000000001",
    })

    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_DAILYPRICE}?${query}`

    const headers: HeadersInit = {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + authToken,
        'appkey': process.env.KIS_DEV_API_KEY || '',
        'appsecret': process.env.KIS_DEV_API_SECERET || '',
        'tr_id': 'FHKST01010200'
    };

    try {
        const response = await fetch(url
            , {
                method: 'GET',
                headers: headers,
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IKisAskPrice[] = await response.json();
        console.log("KIS AskPrice data : ", res);

        if (res.length === 0) {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.log("KIS AskPrice api err : " + error);
        return { status: 500 };
    }
}