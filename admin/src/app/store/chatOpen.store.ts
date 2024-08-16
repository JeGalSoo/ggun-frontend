import { create } from 'zustand'

interface IsChatOpenState {
    data: boolean,
    update: (data: boolean) => void,
}

const useIsChatOpenStore = create<IsChatOpenState>()((set,get) => ({
    data: false,
        update: (data: boolean) => set({ data }),
}))

export const useIsChatOpenAction = () => useIsChatOpenStore((store) => store.update)
export const useIsChatOpenStack = () => useIsChatOpenStore((store) => store.data)
export const useIsChatOpenState = () => useIsChatOpenStore.getState();
