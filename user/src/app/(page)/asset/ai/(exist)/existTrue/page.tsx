'use client'

import Pagination from "@/app/component/navigation/pagination";
import { useAccHistory, useAccList, useAllAiAccount, useAllCmaAccount } from "@/app/hooks/account.hook";
import { useState } from "react";

export default function AiExistTrue() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const { data: accHistory } = useAccHistory("2");
    const { data: accList } = useAccList();

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full">
                <div className="gap-3 bg-gradient-to-r content-center from-pebble-200 to-pebble-400 via-pebble-300 grid border grid-cols-2 text-center mb-5 text-[25px] rounded-lg min-h-[100px]">
                    <div>계좌종류 : AI 자동 매매</div>
                    <div>계좌번호 : {accHistory && accHistory[0].acno}</div>
                    {/* <div className="col-span-2">현재 수익률 : 40%</div> */}
                    {/* <div className="col-span-2">현재 잔액 : {data && data.balance?.toLocaleString("ko", LocalNumberOptions)}</div> */}
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
                    <Pagination total={40} limit={3} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
}