import { cookies } from "next/headers";

export const userHeaders: HeadersInit = {
    'Authorization': 'Bearer ' + cookies().get('accessToken')?.value,
};