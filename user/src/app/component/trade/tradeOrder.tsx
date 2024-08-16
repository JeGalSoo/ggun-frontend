'use client'

import { TabButton } from "../button/tabButton";
import { GrayButton } from "../button/buttons";
import { useaskTradeAction, useaskTradeStack } from "@/app/store/askTrade";
import Swal from "sweetalert2";
import { fetchOwnStockSave } from "@/app/service/asset/ownStock.api";
import { useAccList } from "@/app/hooks/account.hook";
import { useGlobalStock } from "@/app/store/globalStock.store";
import { extractTokenId } from "../util/jwtDecode";

export default function TradeOrder() {

    const {data:accList} = useAccList();

    const myAccinfo: IAccount | undefined = accList ? accList[1] : undefined;
    const atcionAskTrade = useaskTradeAction();
    const order = useaskTradeStack();
    const globalStock = useGlobalStock();

    const handleOrder = (e: any) => {
        atcionAskTrade.update({ ...order.data, [e.target.name]: e.target.value });
        console.log('order : ' +order)
    }

    const handlePriceNow = (e: any) => {
        atcionAskTrade.update({ ...order.data, [e.target.name]: e.target.value, ordDvsnCd:1});
        // console.log('handlePriceNow : ' + JSON.stringify(order))
    }

    const handlePriceSelect = (e: any) => {
        atcionAskTrade.update({ ...order.data, [e.target.name]: e.target.value, ordDvsnCd:2});
        // console.log('handlePriceSelect : ' + JSON.stringify(order))
    }

    const ownStockSave = async () => await fetchOwnStockSave(order.data)

    const hendleOrder = () => {
        // console.log('globalStock ? : ' + JSON.stringify(globalStock))
        if (myAccinfo && globalStock) {
            const newOrderData = {
                ...order.data,
                pdno: globalStock.data.code+'',
                prdtName: globalStock.data.name+'',
                account: Number(myAccinfo.id), 
                tradeType : extractTokenId()+'',
                acpw: 1234,
            };

        atcionAskTrade.update(newOrderData);
        }

        // console.log('order : ' + JSON.stringify(order))
        Swal.fire({
            title: '주문확인',
            text: `${order.data.sllBuyDvsnCd == 1 ? '매수' : '매도'} 하시겠습니까?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `${order.data.sllBuyDvsnCd == 1 ? '매수' : '매도'}`,
            cancelButtonText: '취소',
            reverseButtons: true,
      
          }).then((result) => {
            if (result.isConfirmed) {
                ownStockSave()
                .then((res: IOwnStock | { status: number; }) => {
                  Swal.fire(
                    '주문완료되었습니다. ',
                    ''
                  )
                //   window.location.reload()
                })
                .catch((error) => {
                  console.log("ownStockSave page err: ", error)
                })
            }
          })
    }

    return (
        <div className="w-full h-full ">
            <div className="h-[50px] grid grid-cols-2">
                <TabButton name="sllBuyDvsnCd" value="1" click={()=>atcionAskTrade.setSllBuyDvsnCd(1)} select={order.data.sllBuyDvsnCd == 1}>매수</TabButton>
                <TabButton name="sllBuyDvsnCd" value="2" click={()=>atcionAskTrade.setSllBuyDvsnCd(2)} select={order.data.sllBuyDvsnCd == 2}>매도</TabButton>
            </div>
            <div className="border border-t-0 p-5 content-center space-y-3" >
                <div className="flex justify-center gap-4">
                    <label className="flex content-center" id="input2">
                        <input type="radio" name="ordDvsnCd" className="w-5" value={1} checked={order.data.ordDvsnCd==1} onClick={handleOrder} readOnly />현재가</label>
                    <label className="flex content-center" id="input1">
                        <input type="radio" name="ordDvsnCd" className="w-5" value={2} checked={order.data.ordDvsnCd==2} onClick={handleOrder} readOnly />지정가</label>
                </div>
                <div className="gap-4 space-y-2">
                    <label className="content-center">현재가</label>
                    <input type="number" className="w-auto" name="avgPrvs"
                        value={order.data.avgPrvs}
                        onChange={handlePriceNow} readOnly/> <br />
                    <label className="content-center">지정가</label>
                    <input type="number" className="w-auto" name="avgPrvs"
                        onChange={handlePriceSelect} />
                    <div className="flex">
                        <GrayButton style="min-w-[30px] w-[1%]" name="pdQty" click={atcionAskTrade.pdQtyIncrease} >+</GrayButton>
                        <label className="flex content-center gap-3 w-auto"><input type="number" name="pdQty" value={order.data.pdQty}
                            onInput={(e: any) => {
                                if (e.target.value >= 0) {
                                    if (e.target.value > 10) {
                                        Swal.fire({
                                            icon: "error",
                                            title: "error",
                                            text: "최대 10까지 입력가능합니다.",
                                        })
                                    }
                                    e.target.value = e.target.value.slice(0, 5);
                                } else {
                                    e.target.value = 0;
                                    Swal.fire({
                                        icon: "error",
                                        title: "error",
                                        text: "음수값을 입력할 수 없습니다.",
                                    });
                                }
                            }} onChange={handleOrder} /></label>
                        <GrayButton style="min-w-[30px] w-[1%]" name="pdQty" click={atcionAskTrade.pdQtyDecrease} >-</GrayButton>
                    </div>
                </div>
                <div className="text-pebble-500 text-xl bold h-[20%] bg-pebble-400 space-y-3 ">
                    <div className=" border">주문금액</div>
                    <div className="text-right">{order.total?.toLocaleString()}원</div>
                </div>
                <div className="flex justify-center w-full h-[50px]">
                    <button onClick={hendleOrder}
                        className={`border rounded-lg shadow-lg w-[70%] hover:bg-slate-100 text-2xl ${order.data.sllBuyDvsnCd == 1 ? 'text-blue-400' : 'text-red-400'}`}>
                        {order.data.sllBuyDvsnCd == 1 ? "현금 매수" : "현금 매도"}</button>
                </div>
            </div>
        </div>
    )
};