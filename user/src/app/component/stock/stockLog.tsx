'use client'

import Pagination from "@/app/component/navigation/pagination";
import { useState } from "react";


function StockLog({props}:{props:number}) {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const data =[
        {id:1, date:'06.01', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:2, date:'06.02', last:'16,820', kinou:'820', per:-5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:3, date:'06.03', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:4, date:'06.04', last:'16,820', kinou:'820', per:-5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:5, date:'06.05', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:6, date:'06.06', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:7, date:'06.07', last:'16,820', kinou:'820', per:-5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:8, date:'06.08', last:'16,820', kinou:'820', per:-5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:9, date:'06.09', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:10, date:'06.10', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
        {id:11, date:'06.11', last:'16,820', kinou:'820', per:5.13, now:'16,170', high:'16,960', low:'15,810', log:'11,440,528'},
    ]
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>날짜</th>
                        <th>종가</th>
                        <th>전일대비</th>
                        <th>등락률</th>
                        <th>시가</th>
                        <th>고가</th>
                        <th>저가</th>
                        <th>거래량</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(offset, offset + limit).map((v: any, i: any) =>
                        <tr key={v.id}>
                            <td>{v.date}</td>
                            <td>{v.last}</td>
                            <td>{v.kinou}</td>
                            <td className={`${v.per <0  ? 'text-red-400': 'text-blue-400'}`}>{v.per}%</td>
                            <td>{v.now}</td>
                            <td>{v.high}</td>
                            <td>{v.low}</td>
                            <td>{v.log}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full items-center flex justify-center h-[50px]">
                <Pagination total={data.length} limit={10} page={page} setPage={setPage} />
            </div>
            
        </div>
    )
};
export default StockLog;