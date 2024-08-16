"use client"
import { characterInfo } from "@/app/common/enums/character";
import { useInterval } from "@/app/common/hook/useInterval";
import { ChartIcon } from "@/app/common/icon/icon";
import { TabButton } from "@/app/component/button/tabButton";
import Image from "next/image"
import { useState } from "react";

export default function CharacterPage() {

    const [btn, setBtn] = useState(0);
    const [landingTitle, setLandingTitle] = useState("");
    const [count, setCount] = useState(0);

    useInterval(() => {
        if (count >= characterInfo[btn].info.length) {return;}

        setLandingTitle((prev) => {
            let result = prev ? prev + characterInfo[btn].info[count] : characterInfo[btn].info[0];
            setCount(count + 1);
            return result;
        });
    }, 50);

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%] flex justify-center flex-col">
                <div className="text-xl bold h-[15%] content-center text-center my-10">다섯가지 매매 성격 유형</div>
                <div className="border-2 border-pebble-200"></div>
                <div className="w-full justify-center flex">
                    <Image src={"/imgs/character2.jpg"} alt={"character"} width={700} height={500} priority></Image>
                </div>
                <div className=" shadow-lg rounded-lg ">
                    <div className="h-[50px] grid grid-cols-5">
                        <TabButton click={() => { setBtn(0), setLandingTitle(''), setCount(0) }} select={btn == 0} >RED</TabButton>
                        <TabButton click={() => { setBtn(1), setLandingTitle(''), setCount(0) }} select={btn == 1} >YELLOW</TabButton>
                        <TabButton click={() => { setBtn(2), setLandingTitle(''), setCount(0) }} select={btn == 2} >PURPLE</TabButton>
                        <TabButton click={() => { setBtn(3), setLandingTitle(''), setCount(0) }} select={btn == 3} >BlUE</TabButton>
                        <TabButton click={() => { setBtn(4), setLandingTitle(''), setCount(0) }} select={btn == 4} >GREEN</TabButton>
                    </div>
                    <div className="p-5 border border-t-0" >
                        <div className="w-full h-full space-y-5">
                            <div className="justify-center flex"><ChartIcon color={`${characterInfo[btn].color}`} /></div>
                            <div className={`text-xl bold`}>{characterInfo[btn].title}</div>
                            <div className="border"></div>
                            <div>{landingTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}