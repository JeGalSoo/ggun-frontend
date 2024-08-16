interface IChat {
    id : String,
    roodId : String,
    senderId : String,
    senderName : String,
    message : String,
    createdAt : Date,
}

interface IChatRoom {
    id : String,
    title : String,
    members : String,
}