'use client'

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export function extractTokenId() {
    try {
        const tokenCookie = Cookies.get('accessToken');

        if (!tokenCookie) {
            console.error('Access token이 존재하지 않습니다.');
            return null;
        }

        const decoded = jwtDecode<ICookie>(tokenCookie);
        if (!decoded) {
            console.error('decoded value가 존재하지 않습니다. ');
            return null;
        }
        const userId = decoded.id;

        console.log('사용자 ID:', userId);
        return userId;
    } catch (error) {
        console.error('토큰 디코딩 실패:', error);
    }
}