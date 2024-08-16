import { create } from 'zustand'

interface ChatState {
    data: IChat,
    action: {
        update: (data: IChat) => void,
        chatMessage: (data: string) => void,
        setUsername: (senderName: string) => void,
        clean: () => void,
    }
}

const useChatStore = create<ChatState>()((set) => ({
    data: { id: '', roomId: '' },
    action: {
        update: (data: IChat) => set({ data }),
        chatMessage: (message: string) => set((state) => ({ data: { ...state.data, message, }, })),
        setUsername: (senderName: string) => set((state) => ({ data: { ...state.data, senderName, }, })),
        clean: () => set({
            data: {
                id: '',
                roomId: '',
                // senderId: '',
                senderName: '',
                message: '',
                createdAt: '',
                // sender: '',
                title : '',
                members : ['',''],
            }
        })
    }
}))

export const useChatAction = () => useChatStore((store) => store.action)
export const useChatStack = () => useChatStore((store) => store.data)
export const useChatState = () => useChatStore.getState();
