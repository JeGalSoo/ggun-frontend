'use client'

import { useAccList } from "@/app/hooks/account.hook";
import { useOwnStockTotalprofit } from "@/app/hooks/ownStock.hook";


export default function MyAccInfo() {

    const { data: accList } = useAccList();
    const { data: ownStockTotalProfit } = useOwnStockTotalprofit();

    const totalAsset = (accList ?? []).reduce((total, v: IAccount) => {
        return total + (v.balance || 0);
    }, 0);


    return (
        <div className="h-full w-full bg-pebble-400 p-8 flex justify-center">
            <div className="w-[50%] text-center">
                <div className="h-[30%] text-4xl content-center">총자산</div>
                <div className="h-[30%] item-center text-6xl">{totalAsset.toLocaleString()}원</div>

                <div className="h-[40%] text-slate-500 grid grid-cols-4 content-center">
                    <div className=""></div>
                    <div>손익금액</div>
                    <div className={`${accList && accList[0].balance as number < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>{ownStockTotalProfit && ownStockTotalProfit.profitLoss?.toLocaleString()}원</div>
                    <div></div>
                    <div></div>
                    <div>손익률</div>
                    <div className={`${accList && accList[0].balance as number < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>{ownStockTotalProfit && ownStockTotalProfit.profitRatio}%</div>
                    <div></div>
                    <div></div>
                    <div>예수금</div>
                    <div>{totalAsset.toLocaleString()}원</div>
                    <div></div>
                    <div></div>
                    <div>출금가능금액</div>
                    <div>{totalAsset.toLocaleString()}원</div>
                </div>

            </div>
        </div>
    )
}
