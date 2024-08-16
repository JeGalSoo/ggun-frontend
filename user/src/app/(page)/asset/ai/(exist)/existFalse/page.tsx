'use client'
import CmaTerm from "@/app/common/terms/cmaTerm";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { useState } from "react";
import Image from "next/image";
import { MoveButton } from "@/app/component/button/buttons";
import { BrownLink } from "@/app/component/link/brawnLink";
import { useRouter } from "next/navigation";

export default function AiExistFalse() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%]">
                <WhiteBox style="text-">
                    <div className="w-full flex justify-center">
                    <Image src={"/imgs/AITradig.jpg"} width={500} height={300} alt={"account"}></Image>
                    </div>
                    <br /><p className="text-xl bold text-center">AI 계좌가 만들어지지 않았습니다. 계좌를 만들어 주세요.</p> <br />
                    <p className="items-center flex flex-col">
                        AI 계좌는 GGUN의 투자 일임 서비스 입니다.<br />
                        투자 일임 계약을 통해 핀트의 AI 아이작이 투자 포트폴리오 구성, 매매 주문(리밸런싱)을 GGUN의 다섯가지 성격별 AI 매매가 진행됩니다.<br />
                        <BrownLink click={"/articles/character"} style="w-[60%] h-[50px] my-3">다섯가지 매매 유형 확인하러가기</BrownLink>
                        투자 자문 계약을 통해 고객이 직접 원하는 테마, 종목, 비중을 파이(투자 포트폴리오)로 구성하면 핀트의 AI 아이작이 리밸런싱 자문을 드리고 매매 주문(리밸런싱)을 고객님의 선택으로 진행합니다.
                    </p>
                    <div className="flex justify-center"><MoveButton click={() => setIsOpen(!isOpen)} style="my-3 w-[30%] h-[50px]">CMA 계좌 개설하기</MoveButton></div>
                </WhiteBox>
                <div>
                    {isOpen ?
                        <WhiteBox style="my-5">
                            <div><CmaTerm /></div>
                            <div className="text-center space-y-5 my-3">
                                <div>꾼ggun CMA(Cash Management Account)서비스의 이용약관을 동의하여야만 CMA서비스 이용이 가능합니다.</div>
                                <div><input type="checkbox" name="tradeType" value="입금" className="w-5" /> 위 서비스 이용 약관을 읽고 동의합니다.</div>
                                <div><MoveButton click={() =>router.push('/asset/ai/existTrue') } style="my-3 w-[30%] h-[50px]">CMA 계좌 개설</MoveButton>  </div>
                            </div>
                        </WhiteBox>
                        : <div></div>}
                </div>
            </div>
        </div>
    );
};