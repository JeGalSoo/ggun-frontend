import { create } from 'zustand'

interface ArticleState {
    data: IArticle,
    list : IArticle[],
    update: (data: IArticle) => void,
}

const useArticleStore = create<ArticleState>()((set) => ({
    data: {title:'', content:''},
    list: [],
    update: (data: IArticle) => set({ data }),
}))

export const useArticleAction = () => useArticleStore((store) => store.update)
export const useArticleStack = () => useArticleStore((store) => store.data)
export const useArticleState = () => useArticleStore.getState();
