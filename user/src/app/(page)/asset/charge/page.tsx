'use client'

import { WhiteBox } from "@/app/component/style/whiteBox";
import { useState } from "react";
import Image from "next/image";
import { TabButton } from "@/app/component/button/tabButton";
import { bankList } from "@/app/common/dummy/account.dummy";
import { BrownButton } from "@/app/component/button/buttons";
import { useAccountTransferAction, useAccountTransferStack } from "@/app/store/accountTransfer.store";
import { useAccList } from "@/app/hooks/account.hook";
import Swal from "sweetalert2";
import { depositApi, withdrawAPi } from "@/app/service/asset/account.api";

export default function AccountTCharge() {

    const [isOpen, setIsOpen] = useState(false);
    const [bank, setBank] = useState<string>('');
    const [yourAcno, setYourAcno] = useState<number>(0);

    const { data: accList } = useAccList();

    const totalAsset = (accList ?? []).reduce((total, v: IAccount) => {
        return total + (v.balance || 0);
    }, 0);


    const actionAccountTransfer = useAccountTransferAction();
    const stackAccountTransfer = useAccountTransferStack();

    const handleForm = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        actionAccountTransfer.update({ ...stackAccountTransfer, [e.target.name]: e.target.value });
        console.log('stackAccountTransfer : ' + JSON.stringify(stackAccountTransfer))
    }

    const handleYourAcno = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYourAcno(parseInt(e.target.value))
    }

    const isExtistInput = () => {
        if (stackAccountTransfer.tradeType == '출금' && !stackAccountTransfer.acpw) {
            Swal.fire(
                '계좌 비밀번호가\n입력되지 않았습니다. '
            )
        } else {
            if (stackAccountTransfer.balance != undefined) {
                if (stackAccountTransfer.acno && stackAccountTransfer.balance > 0 && stackAccountTransfer.tradeType) {
                    setIsOpen(!isOpen)
                } else {
                    Swal.fire(
                        '내용을 빠짐없이 입력해주세요.'
                    )
                }
            } else {
                Swal.fire(
                    '금액이 입력되지 않았습니다.',
                    '내용을 빠짐없이 입력해주세요.'
                )
            }
        }
    }


    const deposit = async () => await depositApi(stackAccountTransfer); //입금
    const withdraw = async () => await withdrawAPi(stackAccountTransfer); //출금

    const hendleWithdraw = () => {
        withdraw()
            .then((res: IAccount | { status: number; }) => {
                setIsOpen(false)
                setBank('')
                setYourAcno(0)
                actionAccountTransfer.clean;
                Swal.fire({
                    icon: "success",
                    title: "출금 성공",
                    text: "성공적으로 출금되었습니다. ",
                })
                window.location.reload()
            })
            .catch((error) => {
                console.log("withdraw page err: ", error)
            })
    }


    const hendleDeposit = () => {
        deposit()
            .then((res: IAccount | { status: number; }) => {
                setIsOpen(false)
                setBank('')
                setYourAcno(0)
                actionAccountTransfer.clean;
                Swal.fire({
                    icon: "success",
                    title: "입금 성공",
                    text: "성공적으로 입금되었습니다. ",
                })
                window.location.reload()
            })
            .catch((error) => {
                console.log("withdraw page err: ", error)
            })
    }
    const handleTabButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        actionAccountTransfer.update({ ...stackAccountTransfer, tradeType: e.target.value })
        setIsOpen(false)
        setBank('')
        setYourAcno(0)
        actionAccountTransfer.clean;
    }

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%]">
                <WhiteBox style="text-center">
                    <div className="flex justify-center">
                        <Image src={"/imgs/accountTransfer.jpg"} width={500} height={300} alt={"account"}></Image>
                    </div>

                    <div className="h-[50px] grid grid-cols-2">
                        <TabButton name="tradeType" click={handleTabButton} value="입금" select={stackAccountTransfer.tradeType === '입금'} >입금</TabButton>
                        {/* <TabButton name="tradeType" click={handleTabButton} value="출금" select={stackAccountTransfer.tradeType === '출금'} >출금</TabButton> */}
                        <TabButton name="tradeType" click={withdraw} value="출금" select={stackAccountTransfer.tradeType === '출금'} >출금</TabButton>
                    </div>

                    {stackAccountTransfer.tradeType == '입금' ?
                        <div className="border border-t-transparent rounded-b-lg p-3">
                            <div className="border-y-2 border-amber-400 grid grid-cols-2 text-center items-center py-3">
                                <div className="bg-slate-100 border-b-2 border-white ">입금계좌</div>
                                <div>
                                    <select name="acno" id="" className="w-full" onChange={handleForm}>
                                        {accList && accList.map((v: IAccount, i: number) =>
                                            <option value={v.id} key={i}>{v.acno}</option>)}
                                    </select>
                                </div>
                                <div className="bg-slate-100 border-b-2 border-white">입금금액</div>
                                <div className=""><input type="number" name="balance" onChange={handleForm} className="w-1/2" />원</div>
                                <div className="bg-slate-100 border-b-2 border-white">입금계좌표시내용</div>
                                <div className=""><input type="text" name="briefs" onChange={handleForm} className="w-1/2" /></div>
                                <div className="row-span-2 h-[50px]"></div>
                                <div className="row-span-2 h-[50px]"></div>
                                <div className="row-span-3 bg-slate-100 border-b-2 border-white h-full content-center ">출금은행</div>
                                <div className="row-span-3 grid grid-cols-5">
                                    {bankList.map((v: any, i: number) =>
                                        <button key={i} name="bank" onClick={() => setBank(v.bank)} className="p-2 grid grid-cols-2 content-center justify-center items-center text-center">
                                            <div className=" content-center">
                                                <Image src={v.imgSrc} alt={"bank"} width={50} height={50} className="rounded-full border-dashed border-2" />
                                            </div>
                                            <div className="text-xs">{v.bank}</div>
                                        </button>
                                    )}
                                </div>
                                <div className="bg-slate-100 border-b-2 border-white ">출금계좌번호</div>
                                <div className=""><input type="number" name="yourAcno" onChange={handleYourAcno} className="w-1/2" /></div>
                            </div>
                            <div className="w-full h-[50px] content-center"><BrownButton style="w-1/2" click={isExtistInput}>입금진행</BrownButton></div>

                            {isOpen ?
                                <div>
                                    <div className="border-y-2 border-amber-400 grid grid-cols-2 text-center items-center py-3">
                                        <div className="bg-slate-100 border-b-2 border-white">입금계좌</div>
                                        <div>{stackAccountTransfer.acno}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">입금금액</div>
                                        <div>{stackAccountTransfer.balance?.toLocaleString()}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">입금계좌표시내용</div>
                                        <div>{stackAccountTransfer.briefs}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">출금은행</div>
                                        <div>{bank}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">출금계좌번호</div>
                                        <div>{yourAcno}</div>
                                    </div>
                                    <div className="w-full h-[50px] content-center"><BrownButton style="w-1/2" click={hendleDeposit}>입금하기</BrownButton></div>
                                </div>
                                : <div></div>
                            }
                        </div>
                        :
                        <div className="border border-t-transparent rounded-b-lg p-3">
                            <div className="border-y-2 border-amber-400 grid grid-cols-2 text-center items-center py-3">
                                <div className="bg-slate-100 border-b-2 border-white ">출금계좌</div>
                                <div>
                                    <select name="acno" id="" className="w-full" onChange={handleForm}>
                                        {accList && accList.map((v: IAccount, i: number) =>
                                            <option value={v.id} key={i}>{v.acno}</option>)}
                                    </select>
                                </div>
                                <div className="bg-slate-100 border-b-2 border-white ">출금가능액</div>
                                <div className="text-slate-600">{totalAsset.toLocaleString()}</div>
                                <div className="bg-slate-100 border-b-2 border-white">출금금액</div>
                                <div className=""><input type="number" name="balance" onChange={handleForm} className="w-1/2" />원</div>
                                <div className="bg-slate-100 border-b-2 border-white">출금계좌 비밀번호</div>
                                <div className=""><input type="password" name="acpw" onChange={handleForm} className="w-1/2" /></div>
                                <div className="row-span-2 h-[50px]"></div>
                                <div className="row-span-2 h-[50px]"></div>
                                <div className="row-span-3 bg-slate-100 border-b-2 border-white h-full content-center ">입금은행</div>
                                <div className="row-span-3 grid grid-cols-5">
                                    {bankList.map((v: any, i: number) =>
                                        <button key={i} name="bank" onClick={() => setBank(v.bank)} className="p-2 grid grid-cols-2 content-center justify-center items-center text-center">
                                            <div className=" content-center">
                                                <Image src={v.imgSrc} alt={"bank"} width={50} height={50} className="rounded-full border-dashed border-2" />
                                            </div>
                                            <div className="text-xs">{v.bank}</div>
                                        </button>
                                    )}
                                </div>
                                <div className="bg-slate-100 border-b-2 border-white ">입금계좌번호</div>
                                <div className=""><input type="number" name="yourAcno" onChange={handleYourAcno} className="w-1/2" /></div>
                                <div className="bg-slate-100 border-b-2 border-white">출금계좌표시내용</div>
                                <div className=""><input type="text" name="briefs" onChange={handleForm} className="w-1/2" /></div>
                            </div>
                            <div className="w-full h-[50px] content-center"><BrownButton style="w-1/2" click={isExtistInput}>출금진행</BrownButton></div>

                            {isOpen ?
                                <div>
                                    <div className="border-y-2 border-amber-400 grid grid-cols-2 text-center items-center py-3">
                                        <div className="bg-slate-100 border-b-2 border-white">출금계좌</div>
                                        <div>{stackAccountTransfer.acno}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">출금금액</div>
                                        <div>{stackAccountTransfer.balance?.toLocaleString()}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">입금은행</div>
                                        <div>{bank}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">입금계좌번호</div>
                                        <div>{yourAcno}</div>
                                        <div className="bg-slate-100 border-b-2 border-white">출금계좌표시내용</div>
                                        <div>{stackAccountTransfer.briefs}</div>
                                    </div>
                                    <div className="w-full h-[50px] content-center"><BrownButton style="w-1/2" click={hendleWithdraw}>출금하기</BrownButton></div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    }
                </WhiteBox>
            </div >
        </div >
    )
};
