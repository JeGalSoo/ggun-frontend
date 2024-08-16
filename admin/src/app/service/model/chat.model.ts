interface IChat {
    id?: string,
    roomId?: string ,
    senderId?: string,
    senderName? : string,
    message? : string,
    createdAt? : string,

    sender? : string,
    title? : string,
    members? : [string,string],
}