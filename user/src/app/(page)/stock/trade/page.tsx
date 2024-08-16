'use client'

import QuoteChart from "@/app/component/chart/quoteChart";
import TradeOrder from "@/app/component/trade/tradeOrder";
import { useKixPrice } from "@/app/hooks/kis.hook";
import { useaskTradeAction, useaskTradeStack } from "@/app/store/askTrade";
import { useGlobalStock } from "@/app/store/globalStock.store";


export default function AskTrade({ props }: { props: number }) {

    const globalStock = useGlobalStock();

console.log('order chart : ' + JSON.stringify(globalStock));
    const { data: kisAskPrice } = useKixPrice(globalStock.data.code+'');

    const ask: IAskPriceOutput1 | '0' = kisAskPrice ? kisAskPrice.output1 : '0';

    const tradeOrder = useaskTradeAction();
    const order = useaskTradeStack();

    const handleOrder = (avgPrvs: number) => {
        tradeOrder.update({ ...order.data, avgPrvs: avgPrvs, ordDvsnCd:1 });
        // console.log('order chart : ' + JSON.stringify(order));
    }

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="grid grid-cols-2 gap-1">
                <div className="content-center">
                    <div className="border rounded-lg">

                        {kisAskPrice && Array.from({ length: 5 }, (v: number, i: number) => {
                            const askPrice = typeof ask === 'string' ? 0 : parseInt(ask[`askp${i + 1}` as keyof IAskPriceOutput1]);
                            const askRsqn = typeof ask === 'string' ? '0' : ask[`askp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1];

                            return (
                                <button 
                                    key={i + 1} 
                                    className="text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer"
                                    onClick={() => handleOrder(askPrice)} // askPrice를 인자로 전달
                                >
                                    <div className="w-1/3">
                                        <QuoteChart 
                                            props={typeof ask === 'string' ? { data: '0', max: '0', color: 'black' } : { data: ask[`askp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask.total_askp_rsqn, color: '#F87171' }} 
                                        />
                                    </div>
                                    <div className={`w-1/3 text-xl items-center hover:text-red-600
                                        ${parseInt(kisAskPrice.output2.stck_prpr) < askPrice ? 'text-red-400' : 'text-blue-400'}`}>
                                        {askPrice?.toLocaleString()}
                                    </div>
                                    <div className="w-1/3 text-slate-400 content-center">{askRsqn}</div>
                                </button>
                            );
                        })}

                        {kisAskPrice && Array.from({ length: 5 }, (v: number, i: number) => {
                            const bidPrice = typeof ask === 'string' ? 0 : parseInt(ask[`bidp${i + 1}` as keyof IAskPriceOutput1]);
                            const bidRsqn = typeof ask === 'string' ? '0' : ask[`bidp_rsqn_icdc${i + 1}` as keyof IAskPriceOutput1];

                            return (
                                <button 
                                    key={i + 2} 
                                    className={`text-center h-[50px] flex w-full hover:bg-slate-100 cursor-pointer 
                                        ${parseInt(kisAskPrice.output2.stck_prpr) == bidPrice ? 'border-dashed border-pebble-500 border-y-2' : ''}`}
                                    onClick={() => handleOrder(bidPrice)} 
                                >
                                    <div className="w-1/3">
                                        <QuoteChart 
                                            props={typeof ask === 'string' ? { data: '0', max: '0', color: 'black' } : { data: ask[`bidp_rsqn${i + 1}` as keyof IAskPriceOutput1], max: ask.total_askp_rsqn, color: '#60a5fa' }} 
                                        />
                                    </div>
                                    <div className={`w-1/3 text-xl items-center hover:text-blue-600
                                        ${parseInt(kisAskPrice.output2.stck_prpr)  < bidPrice ? 'text-red-400' : 'text-blue-400'}`}>
                                        {bidPrice?.toLocaleString()}
                                    </div>
                                    <div className="w-1/3 text-slate-400 content-center">{bidRsqn}</div>
                                </button>
                            );
                        })}

                    </div>

                    <div className="bg-pebble-100 text-white col-span-2 text-center">잔량 총합 {typeof ask === 'string' ? 0 : parseInt(ask.ntby_aspr_rsqn).toLocaleString()}</div>
                </div>
                <div className="w-full h-full"><TradeOrder /></div>
            </div>
        </div>
    )
}