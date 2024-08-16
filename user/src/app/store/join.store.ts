import { create } from 'zustand'

interface JoinState {
    data: IUser,
    action: {
        update: (data: IUser) => void,
        clean: () => void,
    }
}

const useJoinStore = create<JoinState>()((set) => ({
    data: {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        ssnF: '',
        ssnS: '',
        address: '',
        phone: '',
        color: '',
        investmentPropensity: ''
    },
    action: {
        update: (data: IUser) => set({ data }),
        clean: () => set(() => ({
            data: {
                id: 0,
                username: '',
                password: '',
                name: '',
                email: '',
                ssnF: '',
                ssnS: '',
                address: '',
                phone: '',
                color: '',
                investmentPropensity: ''
            }
        })),
    }
}))

export const useJoinAction = () => useJoinStore((store) => store.action)
export const useJoinStack = () => useJoinStore((store) => store.data)
export const useJoinState = () => useJoinStore.getState();
