import { create } from 'zustand'

interface AccountState {
    data: IAccount[],
    action: {
        update: (data: IAccount[]) => void,
        clean: () => void,
    }
}

const useAccountStore = create<AccountState>()((set,get) => ({
    data: [],
    action: {
        update: (data: IAccount[]) => set({ data }),
        clean: () => {set({ data: [] }), console.log("AccountState clean : ", get().data)}
    }
}))

export const useAccountAction = () => useAccountStore((store) => store.action)
export const useAccountStack = () => useAccountStore((store) => store.data)
export const useAccountState = () => useAccountStore.getState();
