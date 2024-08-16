'use client'

import { WhiteBox } from "@/app/common/box/whiteBox";
import { NetProfitByDateData } from "@/app/common/enums/netProfitByDate";
import { ProductByDateData } from "@/app/common/enums/ProductByDate";
import BarChart from "@/app/component/chart/barChart";
import TransactionsChart from "@/app/component/chart/transactionsChart";
import { useNetProfitByDate, useProductByDate } from "@/app/hooks/chart.hook";
import { useVisiterYear } from "@/app/hooks/visiter.hook";

function TypeOfChart() {
    const { data: visiterYear } = useVisiterYear();
    const { data: netProfitByDate } = useNetProfitByDate();
    const { data: productByDate } = useProductByDate();

    return (
        <div className="w-screen h-screen">
            {/* <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 접속자수</div> */}
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <WhiteBox>
                        {visiterYear ? <BarChart data={visiterYear} /> : <p>Loading...</p>}
                    </WhiteBox>
                </div>
                <div className='flex justify-center w-1/2'>
                    <WhiteBox>
                        <TransactionsChart data={netProfitByDate == undefined ? NetProfitByDateData : netProfitByDate} />
                    </WhiteBox>

                </div>
            </div>
            <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 매도거래량</div>
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2'>
                    {/* <WhiteBox><PolarChart /></WhiteBox> */}
                </div>
            </div>
            <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 매도거래량</div>
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    {/* <WhiteBox><RadarChart /></WhiteBox> */}
                </div>
                <div className='flex justify-center w-1/2'>
                    {/* <WhiteBox><BarChart /></WhiteBox> */}
                </div>
            </div>
        </div>
    )
}

export default TypeOfChart;