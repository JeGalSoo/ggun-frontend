'use client'
import { useAccList } from "@/app/hooks/account.hook";
import { useOwnStockList } from "@/app/hooks/ownStock.hook";
import { useState } from "react";

export default function MyStocks() {

    const [myAcno, setMyAcno] = useState();
    
    const { data: accList } = useAccList();
    const { data: ownStockList } = useOwnStockList(myAcno+'');
    
    const handleForm = (e: any) => {
        setMyAcno(e.target.value)
        console.log('setMyAcno : ' + JSON.stringify(myAcno));
    }


    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full">
                <div className="">
                    <label htmlFor="" className="text-right">출금계좌 : </label>
                    <select name="id" id="" className="" onChange={handleForm}>
                        {accList && accList.map((v: IAccount, i: number) =>
                            <option value={v.id} key={i}>{v.acno}</option>)}
                    </select>
                    <table className="">
                        <thead>
                            <tr>
                                <th>종목번호</th>
                                <th>종목명</th>
                                <th>보유수량</th>
                                <th>체결평균가</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ownStockList && ownStockList.map((v: IOwnStock, i: number) =>
                                <tr key={i}>
                                    <td>{v.pdno}</td>
                                    <td>{v.prdtName}</td>
                                    <td>{v.pdQty}</td>
                                    <td>{v.avgPrvs?.toLocaleString()}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}