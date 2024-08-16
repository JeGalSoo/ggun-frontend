'use server'

export async function fetchChatroomList(): Promise<IChat[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/chats/list`
            , {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        // console.log("chatroomList api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("chatroomList err : "+ error);
        return { status: 500 };
    }
}


export async function sendChatApi(chat: IChat): Promise<IChat | { status: number }> {
    const { id, senderId = Number(id)+ (Number(id) -1), senderName, message } = chat || {}
    console.log("sendChatApi input :", id, senderId, senderName, message)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/chats/send`
            , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomId: id+'',
                    senderId: senderId+'',
                    senderName: senderName,
                    message: message,
                })
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IChat = await response.json();
        // console.log("sendChatApi api : ", res);

        if (res.message == null) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("sendChatApi api : "+ error);
        return { status: 500 };
    }
}


export async function fetchChatting(roomId:number): Promise<IChat[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/alarms/chats/receive/${roomId}`
            , {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: any[] = await response.json();
        // console.log("fetchChatting api : ", res);

        if (res.length == 0) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("fetchChatting err : "+ error);
        return { status: 500 };
    }
}
