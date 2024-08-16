import { create } from 'zustand'

interface MailState {
    data: IMail,
    action:{
        update: (data: IMail) => void,
        clean : () => void,
    },
}

const useMailStore = create<MailState>()((set,get) => ({
    data: {email:'',subject:'',message:''},
    action: {
        update: (data: IMail) => set({ data }),
        clean: () => {set({ data: {email:'',subject:'',message:''}, }), console.log("MailState clean : ", get().data)}
    },
}))

export const useMailAction = () => useMailStore((store) => store.action)
export const useMailStack = () => useMailStore((store) => store.data)
export const useMailState = () => useMailStore.getState();
