'use client'
import { XIcon } from "@/app/common/icons/icons";
import { useChatStack } from "@/app/store/chat.store";
import { useIsChatOpenAction, useIsChatOpenStack } from "@/app/store/chatOpen.store";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const handleIsChatOpen = useIsChatOpenAction();
  const isChatOpen = useIsChatOpenStack();
  const chat = useChatStack();

  return (
    <div className="absolute bottom-[5%] right-[70px] min-w-[500px] h-[90%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-2">
      <div className="sticky top-0 left-0 right-0 w-auto bg-pebble-200 rounded-lg text-center mb-3">
        {isChatOpen == true ?
          <div className="h-[40px] items-center flex justify-center">
            <div className="text-white text-bold">{chat.title}</div>
            <div className="sticky left-[90%] h-[30px]">
              <button className="hover:animate-spin hover:duration-500" onClick={() => handleIsChatOpen(false)} ><XIcon color="white" /></button>
            </div>
          </div>
          : <div className="h-[40px] items-center flex justify-center text-white text-bold">채팅방</div>}
      </div>
      <div className="mt-[5px] z-0">
        {children}
      </div>
    </div>
  );
}
