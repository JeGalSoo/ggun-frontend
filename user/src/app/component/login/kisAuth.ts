'use server'

import { cookies } from 'next/headers'

export const kisAuthkey = async () => {
    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_AUTH2}`
    console.log("KIS auth!!!" + url);
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

            if (!response.ok) {
                throw new Error('API Network response was not ok');
            }

            const res: IKisAuth = await response.json();

            console.log("KIS auth api : ", res);
            
            if (res.length === 0) {
                return {status:404};
                // return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
            }

            // cookies().set({
            //     name:'kisAccessToken',
            //     value: res.access_token,
            //     expires: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour
            //     path: '/',
            //     sameSite: 'none',
            //     secure: true,
            // });

            console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

            return {status:200};
        } catch (error) {
            console.log("KIS auth err : " + error);
        }
}
