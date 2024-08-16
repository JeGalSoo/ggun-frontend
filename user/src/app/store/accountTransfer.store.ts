import { create } from 'zustand'

interface AccountTransferState {
    data: IAccount,
    action: {
        update: (data: IAccount) => void,
        clean: () => void,
    }
}

const useAccountTransferStore = create<AccountTransferState>()((set,get) => ({
    data: {
        id: 0,
        acno: '11',
        receiveAcId: 0,
        acpw: '',
        balance: 0,
        refundAcno: '',
        bank: '',
        briefs: '',
        tradeType: '출금',
        paymentUid: '',
        regDate: '',
        modDate: '',
        pdno : '',
        avgPrvs : '', 
        acType : '',
    },
    action: {
        update: (data: IAccount) => set({ data }),
        clean: () => {set({ data: {
            id: 0,
            acno: '11',
            receiveAcId: 0,
            acpw: '',
            balance: 0,
            refundAcno: '',
            bank: '',
            briefs: '',
            tradeType: '출금',
            paymentUid: '',
            regDate: '',
            modDate: '',
            pdno : '',
            avgPrvs : '', 
            acType : '',
        } }), console.log("AccountTransferState clean : ", get().data)}
    }
}))

export const useAccountTransferAction = () => useAccountTransferStore((store) => store.action)
export const useAccountTransferStack = () => useAccountTransferStore((store) => store.data)
export const useAccountTransferState = () => useAccountTransferStore.getState();