'use client'

import Pagination from "@/app/component/navigation/pagination";
import MiniCalendar from "@/app/component/util/miniCalender";
import { useAccHistory, useAccList } from "@/app/hooks/account.hook";
import { useState } from "react";

function AccountHistories({ params }: { params: { id: string, } }) {

    const [acno, setAcno] = useState(params.id);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const { data: accHistory } = useAccHistory(acno);
    const { data: accList } = useAccList();

    const handleInput = (e: any) => {
        setAcno(e.target.value)
        console.log('acno : ' + JSON.stringify(acno))
    }

    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[85%] flex-col flex text-center items-center">
                <div className="grid grid-cols-3 w-full border gap-5 bg-pebble-400 rounded-lg p-3">
                    <div className="col-span-3 text-xl bold">CMA 거래내역 조회</div>
                    <label htmlFor="" className="text-right">계좌선택 : </label>
                    <select name="acno" id="" className="" onChange={handleInput}>
                        {accList && accList.map((v: IAccount, i: number) =>
                            // v.acno?.endsWith('1') ?
                                <option value={v.id} key={i}>{v.acno}</option>
                        // : ''     
                        )}
                    </select>
                    <div></div>
                    <div className="text-right">월별조회 : </div>
                    <div className="flex col-span-2 ">
                        <MiniCalendar /><p className="px-5">~</p><MiniCalendar />
                    </div>

                    <label htmlFor="" className="text-right">입출금 : </label>
                    <div className="flex col-span-2 gap-5 items-center ">
                        <div><input type="radio" name="tradeType" value="출금" className="w-5" onChange={handleInput} defaultChecked/>입출금</div>
                        <div><input type="radio" name="tradeType" value="입금" className="w-5" onChange={handleInput} />입금</div>
                        <div><input type="radio" name="tradeType" value="출금" className="w-5" onChange={handleInput} />출금</div>
                    </div>
                </div>

                <table className="p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>거래일자</th>
                            <th>종류</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                            <th>거래처</th>
                            <th>적요</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accHistory && accHistory.slice(offset, offset + limit).map((v: IAccount, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.modDate}</td>
                                <td>{v.bank}</td>
                                <td>{v.tradeType == "입금" ? v.balance?.toLocaleString() : ''}</td>
                                <td>{v.tradeType == "출금" ? v.balance?.toLocaleString() : ''}</td>
                                <td>{v.balance?.toLocaleString()}</td>
                                <td>{v.briefs}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={accHistory?.length} limit={3} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
};
export default AccountHistories;