import { create } from 'zustand'

interface LoginState {
    data: IAdmin,
    update: (data: IAdmin) => void,
}

const useLoginStore = create<LoginState>()((set) => ({
    data: {username:'',password:''},
    update: (data: IAdmin) => set({ data }),
}))

export const useLoginAction = () => useLoginStore((store) => store.update)
export const useLoginStack = () => useLoginStore((store) => store.data)
export const useLoginState = () => useLoginStore.getState();
