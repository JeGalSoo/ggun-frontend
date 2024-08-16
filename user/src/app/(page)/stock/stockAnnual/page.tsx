import { useQuery } from "@tanstack/react-query";
import Link from "next/link"

export default function StockAnnual() {

    const reportData = [
        { id: 1, date: '2021.12', data: '222' },
        { id: 2, date: '2022.12', data: '222' },
        { id: 3, date: '2023.12', data: '222' },
        { id: 4, date: '2024.12', data: '222' },
    ]

    return (
        <div className="w-full h-full">
            <div className="w-[80%]">
                <table className="">
                    <thead>
                        <tr>
                            <th>기간</th>
                            {reportData.map((v: any, i: number) =>
                                <th key={v.id + 1}>{v.date}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>매출액</td>
                            <td>영업이익</td>
                            <td>당기순이익</td>
                            <td>지배주주순이익</td>
                            <td>비지배주주순이익</td>
                            <td>영업이익률</td>
                            <td>순이익률</td>
                            <td>ROE</td>
                            <td>부채비율</td>
                            <td>당좌비율</td>
                            <td>유보율</td>
                            <td>EPS</td>
                            <td>PER</td>
                            <td>BPS</td>
                            <td>PBR</td>
                            <td>주당배당금</td>
                        </tr>
                        {reportData.map((v: any, i: number) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.data}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="text-slate-400 text-xs space-y-5">
                <p>단위는 ‘억원, %, 배, 원’ 입니다. </p>
                <p>분기 실적은 해당 분기까지의 누적 실적에서 직전 분기까지의 누적 실적을 차감하는 방식으로 계산되므로, 기업에서 공시한 분기 실적과 차이가 있을 수 있습니다.</p>
                <p>컨센서스 : 최근 3개월간 증권사에서 발표한 전망치의 평균값입니다</p>
            </div>
        </div>
    )
}