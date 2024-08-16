import { create } from 'zustand'

interface askTradeState {
    stack: {
        data: IAskTrade,
        total: number,
    }
    action: {
        update: (data: IAskTrade) => void,
        pdQtyIncrease: () => void,
        pdQtyDecrease: () => void,
        submitTotal: () => void,
        currentPrice: () => void,
        setSllBuyDvsnCd : (sllBuyDvsnCd:number)=>void,

        clean: () => void,
    }
}

const useaskTradeStore = create<askTradeState>()((set, get) => ({
    stack: {
        data: {
            pdno: '',
            prdtName: '',
            pdQty: 0,
            avgPrvs: 0,
            tradeType: '',
            account: 0,
            acpw: 0,
            sllBuyDvsnCd: 1,
            ordDvsnCd: 2,
        },
        total: 0,
    },
    action: {
        update: (data: IAskTrade) => {
            set((state) => ({ stack: { ...state.stack, data } }))
        },
        pdQtyIncrease: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, pdQty: currentData.pdQty + 1 },
                    total: currentData.avgPrvs * currentData.pdQty
                }
            }));
        },
        pdQtyDecrease: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, pdQty: currentData.pdQty - 1 },
                    total: currentData.avgPrvs * currentData.pdQty
                }
            }));
        },
        submitTotal: () => {
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: { ...currentData, avgPrvs: state.stack.total },
                    total: 0
                }
            }));
        },
        currentPrice: () => {
            set((state) => {
                const updatedData = { ...state.stack.data };
                return { stack: { ...state.stack, data: updatedData } };
            });
        },
        setSllBuyDvsnCd: (sllBuyDvsnCd:number) =>{
            const currentData = get().stack.data;
            set((state) => ({
                stack: {
                    ...state.stack,
                    data: {...state.stack.data,sllBuyDvsnCd: sllBuyDvsnCd,},
                    total: state.stack.total, },
            }
        ));
        },

        clean: () => {
            set({
                stack: {
                    data: {
                        pdno: '',
                        prdtName: '',
                        pdQty: 0,
                        avgPrvs: 0,
                        tradeType: '',
                        account: 0,
                        acpw: 0,
                        sllBuyDvsnCd: 1,
                        ordDvsnCd: 2,
                    },
                    total: 0,
                },
            });
        },
    },
    }))

export const useaskTradeAction = () => useaskTradeStore((store) => store.action)
export const useaskTradeStack = () => useaskTradeStore((store) => store.stack)
export const useaskTradeState = () => useaskTradeStore.getState();
