'use client'

import MyAccInfo from "@/app/component/main/myAccInfo";
import NewsTopic from "@/app/component/news/newsTopic";
import Image from "next/image";
import StockLank from "@/app/component/stock/stockLank";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { stockList } from "@/app/common/dummy/stock.dummy";
import MyStocks from "../../asset/myStock/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalStock } from "@/app/store/globalStock.store";
import { useStockAticleTop } from "@/app/hooks/item.hook";

export default function AfterHome() {

    const router = useRouter();
    const globalStock = useGlobalStock();
    const { data: stockAticleTop } = useStockAticleTop();

    const handleGlobalStock = async (id: number) => {
        const select = {
            id: id,
            name: stockList[id].name,
            code: stockList[id].code,
        }
        globalStock.clean();
        globalStock.update(select);
        if (globalStock.data.name == select.name) {
            router.push(`/stock/stockDetail2/${globalStock.data.code}`)
        }
        console.log('update : ' + JSON.stringify(globalStock.data))
        console.log('selectedStock : ' + JSON.stringify(select))
    }



    return (
        <main className="w-screen h-full space-y-3">
            <div className="w-full h-[300px] "><MyAccInfo />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[50%] ">
                    <MyStocks />
                </div>
            </div>

            <div className="px-8">
                <div className="text-2xl py-5">오늘의 hot토픽 <hr /></div>
                <NewsTopic />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[70%] ">
                    <StockLank />
                </div>
            </div>
            <div className="w-full flex justify-center space-x-5">
                <div className="w-[50%] mb-10">
                    <div className="text-xl py-3">인기 급상승 커뮤니티</div>
                    <div className="mb-15 space-y-3">
                        {stockAticleTop && stockAticleTop.slice(0, 5).map((v: IStockArticle, i: number) =>
                            <WhiteBox style="" key={i}>
                                <button className="w-full h-[50px] grid grid-cols-4 px-4 items-center active:text-xl" onClick={() => handleGlobalStock(i)}>
                                    <div className="flex gap-2">
                                        <Image src={stockList[i].imgSrc} width={30} height={10} alt={"logos"} className="rounded-lg" />
                                        {stockList[i].name}
                                    </div>
                                    <div className="text-lg text-left active:text-xl truncate px-2">{v.title}</div>
                                    <div className="text-lg text-left active:text-xl truncate px-2">{v.content}</div>
                                    <div className="text-slate-400 text-right truncate">{v.writerId}</div>
                                </button>
                            </WhiteBox>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}