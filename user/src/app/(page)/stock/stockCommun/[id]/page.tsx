'use client'

import { stockCommunDummy } from "@/app/common/dummy/chat.dummy";
import { stockList } from "@/app/common/dummy/stock.dummy";
import { StockComuBox } from "@/app/component/stock/stockCommun";
import { useGlobalStock } from "@/app/store/globalStock.store";

function StockChat({ params }:any) {

    const globalStock = useGlobalStock();
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[85%]">
                <div className="text-lg bold">
                    <div className="blod text-[32px] h-[100px] content-center">{globalStock.data.name} 종목토론<hr /></div>
                    <input type="text" className="h-[50px] w-1/3 my-2" placeholder="종목토론 제목" />
                    <input type="text" className="h-[50px] w-2/3" placeholder="종목에 대한 자유로운 이야기를 해보세요!" />
                </div>
                <div>
                    {stockCommunDummy.map((v:any, i:Number) =>
                        <StockComuBox key={v.id} id={v.id} writer={v.writer} title={v.title} content={v.content} date={v.date} />
                    )}
                </div>
            </div>
        </div>
    )
};
export default StockChat;
