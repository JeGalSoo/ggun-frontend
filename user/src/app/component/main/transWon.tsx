'use client'
import { WhiteBox } from "../style/whiteBox";
import { useExchange } from "@/app/hooks/exchange";

export default function TransWon() {


    const { data: exchange } = useExchange();

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {exchange && exchange.map((v: IExchange, i: number) =>
                    <WhiteBox key={i}>
                        <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-red-400 ">살때 {v.ttb}</div>
                            <div className="text-blue-400 ">팔때 {v.tts}</div>
                        </div>
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}