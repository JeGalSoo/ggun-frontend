interface ICookie {
    name: string;
    value: string;
    path?: string;
    maxAge?: number;
    expires?: Date;
    sameSite?: 'lax' | 'strict' | 'none'; 
    httpOnly?: boolean;

    id?:string
    email?:string
}