'use client'

import { LocalNumberOptions } from "@/app/common/config/localeString";
import { WhiteLink } from "@/app/component/link/whiteLink";
import { extractTokenId } from "@/app/component/util/jwtDecode";
import { allAccount } from "@/app/service/asset/account.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function AccountList() {

  const jwtTokenId = extractTokenId();

  const accListData = async (): Promise<IAccount[]> => {
    const response = await allAccount(jwtTokenId + '')
    if (typeof response === 'object' && 'status' in response) {
      throw new Error(`Error: ${response.status}`);
    }
    return response as IAccount[];
  }

  const { data } = useQuery<IAccount[]>(
    {
      queryKey: ["accList"],
      queryFn: accListData,
    }
  );

  const totalAsset = (data ?? []).reduce((total, v: IAccount) => {
    return total + (v.balance || 0);
}, 0);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[85%]">
        <div className="mt-[40px]">
          <div>
            <h1 className="text-[30px] mb-5">나의 자산 현황<hr /></h1>
            <div className="bg-gradient-to-r content-center from-pebble-200 to-pebble-400 via-pebble-300 grid border grid-cols-2 text-center mb-5 text-[25px] rounded-lg min-h-[100px]">
              <div>현재 기준 자산 : {totalAsset.toLocaleString()}</div>
              <div>총 예수금 잔액 : {totalAsset.toLocaleString()}</div>
            </div>
          </div>
          <h1 className="text-[30px] mb-5">보유 계좌 목록 <hr /></h1>
          {data == null ?
            <div className="text-2xl">생성된 계좌가 없습니다.</div> :
            data.map((v: IAccount, i: number) => (
              <div key={i}>
                {v.acno?.endsWith('1') ?
                  <h2 className="text-[25px] bold bg-pebble-200 text-white border-x-4 border-amber-400 pl-4">CMA</h2>
                  : <h2 className="text-[25px] bold bg-pebble-200 text-white border-x-4 border-amber-400 pl-4">AI 자동 매매 계좌</h2>}

                <div key={v.id} className="my-5">
                  <div className="grid grid-flow-col border grid-cols-4 p-2 gap-2 text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                    <Image unoptimized src='/imgs/chart.png' height={50} width={100} alt={'계좌번호'} className="rounded-r-lg" />
                    <div className="text-lg content-center">{v.acno}</div>
                    <div className="text-slate-400 text-left content-center">잔액 : {v.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
                    <div className="grid grid-cols-2 h-full items-center space-x-1 px-2">
                      <WhiteLink style="h-[30px] content-center" click={"/asset/charge"} >이체/충전</WhiteLink>
                      <WhiteLink style="h-[30px] content-center" click={`/asset/histories/${v.id}`} >조회</WhiteLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}

        </div>

      </div>

    </div>
  )
};