import { create } from 'zustand'

interface LoginState {
    data: IUser,
    update: (data: IUser) => void,
}

const useLoginStore = create<LoginState>()((set) => ({
    data: {username:'',password:''},
    update: (data: IUser) => set({ data }),
}))

export const useLoginAction = () => useLoginStore((store) => store.update)
export const useLoginStack = () => useLoginStore((store) => store.data)
export const useLoginState = () => useLoginStore.getState();
