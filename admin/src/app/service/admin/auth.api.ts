'use server'

import { extractCookie } from "@/app/component/util/extractToken";
import { cookies } from "next/headers";


export async function loginAdmin(admin: IAdmin): Promise<any | { status: number }> {
    try {
        const bodys = {
            username: admin.username,
            password: admin.password,
        };
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/admins/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        })

        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))
        // console.log("cookies : " + cookies().get()?.value)

        
        if (response.status === 200) {
            const accToken = response.headers.getSetCookie()[0];
            const refreToken = response.headers.getSetCookie()[1];

            cookies().set({
                name: 'accessToken',
                value: extractCookie(accToken, 'accessToken'),
                path: '/',
                maxAge: Number(extractCookie(accToken, 'Max-Age')),
                expires: new Date(extractCookie(accToken, 'Expires')),
                sameSite: 'lax',
                httpOnly: true,
            });

            cookies().set({
                name: 'refreshToken',
                value: extractCookie(refreToken, 'refreshToken'),
                maxAge: Number(extractCookie(refreToken, 'Max-Age')),
                expires: new Date(extractCookie(refreToken, 'Expires')),
                path: '/',
                sameSite: 'lax',
                httpOnly: true
            });

        }

        return data
    } catch (error) {
        console.log("loginAdmin err : " + error);
        return { status: 500 };
    }
}

export async function logoutApi(): Promise<any | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)

    console.log("ajffk")
        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        cookies().delete('accessToken')
        cookies().delete('refreshToken')

        console.log("logoutAdmin : " + JSON.stringify(data))
        console.log("cookies : " + cookies().get('accessToken')?.value)

        return data
    } catch (error) {
        console.log(error, "logoutAdmin EERR!!!")
        return error
    }
}


