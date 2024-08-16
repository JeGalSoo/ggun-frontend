import { create } from 'zustand'

interface AdminState {
    data: IAdmin,
    action:{
        update: (data: IAdmin) => void,
        clean : () => void,
    },
}

const useAdminStore = create<AdminState>()((set,get) => ({
    data: {
        id : 0, 
        username:'',
        password:'',
        name: '',
        number: '',
        department: '',
        position: '',
        job: '',
        email: '',
        phone: '',
        role : '',},
    action: {
        update: (data: IAdmin) => set({ data }),
        clean: () => {set({ data: {
            id : 0, 
            username:'',
            password:'',
            name: '',
            number: '',
            department: '',
            position: '',
            job: '',
            email: '',
            phone: '',
            role : '',}, }), console.log("AdminState clean : ", get().data)}
    },
}))

export const useAdminAction = () => useAdminStore((store) => store.action)
export const useAdminStack = () => useAdminStore((store) => store.data)
export const useAdminState = () => useAdminStore.getState();
