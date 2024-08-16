'use server'

export async function SendMailApi(mail:IMail): Promise<any | { status: number }> {
    try {
        console.log("mail : ", mail)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/email/send`
            , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email : mail.email,
                    // subject : mail.subject,
                    message : mail.message,
                })
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const contentType = response.headers.get('Content-Type') || '';
        let res: any;

        if (contentType.includes('application/json')) {
            res = await response.json();
        } else {
            const textResponse = await response.text();
            res = { message: textResponse }; 
        }

        console.log("SendMailApi api : ", res);

        if (!res || typeof res !== 'object') {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.log("SendMailApi err : " + error);
        return { status: 500 };
    }
}