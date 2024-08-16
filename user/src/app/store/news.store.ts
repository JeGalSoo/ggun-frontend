import { create } from 'zustand'

interface NewsState {
    data: INews[],
    setNews: (data: INews[]) => void,

}

const useNewsStore = create<NewsState>()((set, get) => ({
    data: [],
    setNews: (data: INews[]) => set((state) => ({ ...state, data })),

}))

export const useNewsFetch = () => useNewsStore((store) => store.setNews)
export const useNewsStack = () => useNewsStore((store) => store.data)
export const useNewsState = () => useNewsStore.getState();
