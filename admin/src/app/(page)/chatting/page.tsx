'use client'
import ChatLayout from "@/app/component/layout/chatLayout";
import { useState } from "react";
import Image from "next/image";
import { WhiteBox } from "@/app/common/box/whiteBox";
import { AdminIcon } from "@/app/common/icons/adminIcon";
import { useChatAction, useChatStack } from "@/app/store/chat.store";
import { sendChatApi } from "@/app/service/chat/chat.api";
import { extractTokenId, extractTokenUsername } from "@/app/component/util/jwtDecode";
import { useChatRoom, useChatting } from "@/app/hooks/chat.hook";
import { useIsChatOpenAction, useIsChatOpenStack } from "@/app/store/chatOpen.store";

export default function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsChatOpen = useIsChatOpenAction();
    const isChatOpen = useIsChatOpenStack();
    const actionChat = useChatAction();
    const chat = useChatStack();

    const { data: chatRoom } = useChatRoom();

    const enterCahtRoom = (chatRoom: IChat) => {
        if (chatRoom != undefined) {
            actionChat.update(chatRoom);
            console.log('enterCahtRoom : ' + JSON.stringify(chat))
            // refetch();
            handleIsChatOpen(true)
        }
    }

    const { data: chatting } = useChatting(Number(chat.id));

    const sendChat = async () => await sendChatApi(chat)


    const submitChat = (e: any) => {
        try {
            if (e.key === "Enter") {
                e.preventDefault();
                actionChat.chatMessage(e.target.value);
                actionChat.setUsername(extractTokenUsername()+'');
                // console.log('submitChat : ' + JSON.stringify(chat))
                sendChat()
                    .then((res: IChat | { status: number; }) => {
                        actionChat.chatMessage('')
                    })
                    .catch((error) => {
                        console.log("sendChat page err: ", error)
                    })
            }
            // refetch();
        } catch (error) {
            console.error('Error submitChat message:', error);
        }
    }

    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => { setIsOpen(!isOpen), handleIsChatOpen(false) }}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅방" priority />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{chatRoom?.length}</span>
            </button>

            <div className={`w-full h-full transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                {isChatOpen == true ?
                    <ChatLayout>
                        {chatting && chatting.map((v: IChat, i: number) =>
                            v.senderId == extractTokenId() ?
                                <div key={i} className="w-full flex justify-end ">
                                    <div className="mx-2 content-end text-gray-300">{v.createdAt}</div>
                                    <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                        {v.message}
                                    </div>
                                </div>
                                :
                                <div key={i + 1} className="flex w-full">
                                    <div className="w-[50px] h-[40px]"> <AdminIcon color="bg-white" /></div>
                                    <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                        {v.message}
                                    </div>
                                    <div className="mx-2 content-end text-gray-300">{v.createdAt}</div>
                                </div>
                        )}
                        <div className="sticky bottom-0 h-[50px] w-full">
                            <input type="text" name="message" placeholder="enter the text" className="h-[40px]" onKeyDown={submitChat}  />
                        </div>
                    </ChatLayout>
                    :
                    <ChatLayout>
                        {chatRoom && chatRoom.map((v: IChat, i: number) =>
                            v && (
                                <div className="py-1" key={i}>
                                    <button key={i} className="w-full text-left" name="roomId" onClick={() => enterCahtRoom(v)}>
                                        <WhiteBox style="white hover:bg-pebble-400 grid grid-cols-3 h-[60px] content-center" >
                                            <div className="text-sm truncate col-span-2">chatroom {v.id}</div>
                                            {/* <div className="text-gray-400 text-xs text-right">{v.title}</div> */}
                                            {/* <div className="text-xs row-span-2 text-gray-400 truncate col-span-3">{chatting[chatting.length - 1].message}</div> */}
                                        </WhiteBox>
                                    </button>
                                </div>
                            ))}
                    </ChatLayout>
                }
            </div >
        </div >
    )
};