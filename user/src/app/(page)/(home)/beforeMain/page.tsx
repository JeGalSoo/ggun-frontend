'use client'

import FirstMenu from "@/app/component/navigation/fristMenu";
import { Suspense, useState } from "react";
import AdBox from "@/app/component/main/adBox";
import { WhiteBox } from "@/app/component/style/whiteBox";
import TransWon from "@/app/component/main/transWon";
import StockMarket from "@/app/component/main/stockMarket";

export default function BeforeHome() {

  const [btn, setBtn] = useState(1)

  function handleCharts(btn: any) {
    const enums: any = {
      1:<StockMarket props={1}/>,
      2: <StockMarket props={2}/>,
      3: <TransWon />,
    };
    return <div>{enums[btn]}</div>;
  }


  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-[70%] mt-2">
    
        <div className="grid grid-cols-7 h-[350px] gap-3">
          <div className="col-span-3 w-full h-full">
            <div className="w-full h-full"><AdBox /></div>
          </div>

          <div className="flex-col h-full w-full ">
            <button className="p-1 h-1/3 w-full truncate" onClick={() => setBtn(1)}><WhiteBox style="h-full text-center content-center bg-white" ><span>코스닥</span></WhiteBox></button>
            <button className="p-1 h-1/3 w-full truncate" onClick={() => setBtn(2)}><WhiteBox style="h-full text-center content-center bg-white" >코스피</WhiteBox></button>
            <button className="p-1 h-1/3 w-full truncate" onClick={() => setBtn(3)}><WhiteBox style="h-full text-center content-center bg-white" ><span>오늘의<br />환율</span></WhiteBox></button>
          </div>

          <div className="col-span-3 h-full w-full" >
            <WhiteBox style="w-full h-full content-center"><Suspense>{handleCharts(btn)}</Suspense></WhiteBox>
            </div>
        </div>

        <div className="w-full h-[70px] my-[30px] "><FirstMenu /></div>
        <div className="my-5 border">
        </div>
      </div>
    </main>
  );
}
