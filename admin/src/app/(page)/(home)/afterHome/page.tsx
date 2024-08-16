'use client'

import { WhiteBox } from "@/app/common/box/whiteBox";
import { useColorByCount, useColorByDate, useNetProfitByDate, useProductByDate, useQuantityByDate, useTotalBydDate } from "@/app/hooks/chart.hook";
import TransactionsChart from "@/app/component/chart/transactionsChart";
import { useVisiterDay, useVisiterMonth, useVisiterYear } from "@/app/hooks/visiter.hook";
import { NetProfitByDateData, QuantityByDateData } from "@/app/common/enums/netProfitByDate";
import ProductByDateChart from "@/app/component/chart/productByDateChart";
import { ProductByDateData } from "@/app/common/enums/ProductByDate";
import { ColorByCountData, ColorByDateData } from "@/app/common/enums/colorChart";
import ColorByDateChart from "@/app/component/chart/colorByDateChart";
import ColorByCountChart from "@/app/component/chart/colorByCountChart";
import TotalBydDateChart from "@/app/component/chart/totalBydDateChart";

export default function Dashboard() {

    const { data: netProfitByDate } = useNetProfitByDate();
    const { data: quantityByDate } = useQuantityByDate();
    const { data: productByDate } = useProductByDate();
    const { data: totalBydDate } = useTotalBydDate();
    const { data: colorByDate } = useColorByDate();
    const { data: colorByCount } = useColorByCount();

    const { data: visiterYear } = useVisiterYear();
    const { data: visiterMonth } = useVisiterMonth();
    const { data: visiterDay } = useVisiterDay();

    console.log("visiterMonth : ", visiterMonth)

    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="w-[80%] content-center text-center">
                <div className="grid grid-cols-4 gap-3 ">
                    <div className="bg-pebble-100 text-white rounded-lg ">
                        <p>{visiterMonth?.date}152</p>
                        <p>이번달 총 접속</p>
                    </div>
                    <div className="bg-pebble-200 text-white rounded-lg">
                        <p>{visiterDay?.date}15</p>
                        <p>오늘의 접속자</p>
                    </div>
                    <div className="bg-pebble-300 rounded-lg">
                        <p>40,567</p>
                        <p>오늘의 매수량</p>
                    </div>
                    <div className="bg-pebble-400 rounded-lg">
                        <p>31,567</p>
                        <p>오늘의 매도량</p>
                    </div>
                    <div className="h-[200px]">
                        <WhiteBox style="w-full h-full">
                            <div className="border-b-2 border-amber-400">컬러별 거래건수</div>
                            <div className="p-2 h-[155px] "><ColorByDateChart data={colorByDate == undefined ? ColorByDateData : colorByDate} /></div>
                        </WhiteBox>
                    </div>
                    <div className="h-[200px]"><WhiteBox style="w-full h-full"><div className="border-b-2 border-amber-400">일별 AI 순이익</div><TransactionsChart data={netProfitByDate == undefined ? NetProfitByDateData : netProfitByDate} /></WhiteBox></div>
                    <div className="h-[200px]"><WhiteBox style="w-full h-full"><div className="border-b-2 border-amber-400">일별 AI 거래건수</div><TransactionsChart data={quantityByDate == undefined ? QuantityByDateData : quantityByDate} /></WhiteBox></div>
                    <div className="h-[200px]">
                        <WhiteBox style="w-full h-full">
                            <div className="border-b-2 border-amber-400">컬러별 거래량</div>
                            <div className="p-2 h-[155px] "><ColorByCountChart data={colorByCount == undefined ? ColorByCountData : colorByCount} /></div>
                        </WhiteBox>
                    </div>
                    <div className="grid col-span-2"><WhiteBox><div className="border-b-2 border-amber-400">일별 AI 종목별 거래건수/거래금액</div><ProductByDateChart data={productByDate == undefined ? ProductByDateData : productByDate} /></WhiteBox></div>
                    <div className="grid col-span-2"><WhiteBox><div className="border-b-2 border-amber-400">일별 AI 총 거래건수/거래금액</div><TotalBydDateChart data={totalBydDate == undefined ? ProductByDateData : totalBydDate} /></WhiteBox></div>
                </div>
            </div>
        </div>
    )
}

