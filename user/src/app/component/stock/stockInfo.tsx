'use client'

import { stockInfoDummy, stockList } from "@/app/common/dummy/stock.dummy";
import { fetchItemsDetail } from "@/app/service/items/items.api";
import { useGlobalStock } from "@/app/store/globalStock.store";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";


function StockInfo({ props }: { props: number }) {

    const globalStock = useGlobalStock();

    const fetchData = async (): Promise<IItems> => {
        return fetchItemsDetail(globalStock.data.name+'')
            .then((res: IItems | { status: number }) => {
                if ('status' in res) {
                    throw new Error(`Error: ${res.status}`);
                }
                console.log("stockInfo : ", res);
                return res;
            })
            .catch((error) => {
                console.log("login page err: ", error);
                return stockInfoDummy; 
            });
    }

    const { data } = useQuery<IItems>(
        {
            queryKey: ["stockInfo"],
            queryFn: fetchData,
        }
    );

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-full grid grid-cols-4 gap-3">

                    <div className="text-center border-r-2 col-span-4 text-2xl flex justify-center items-center gap-5">
                        <Image src={globalStock.data?.id !== undefined ?`${stockList[globalStock.data.id + 0].imgSrc}`:``} width={100} height={100} alt={"stockLogo"} 
                        className="rounded-full border-dashed "/></div>
                    <div className="text-center border-r-2">전일</div>
                    <div className={`${Number(data && data.open) > 0 ? 'text-red-400' : 'text-blue-400'} text-right w-2/3`}>{data?.close}</div>
                    <div className="text-center border-r-2">시가</div>
                    <div className={`${Number(data && data.open) > 0 ? 'text-red-400' : 'text-blue-400'} text-right w-2/3`}>{data?.open}</div>
                    <div className="text-center border-r-2">고가</div>
                    <div className={`${Number(data && data.open) > 0 ? 'text-red-400' : 'text-blue-400'} text-right w-2/3`}>{data?.high}</div>
                    <div className="text-center border-r-2">저가</div>
                    <div className={`${Number(data && data.open) > 0 ? 'text-red-400' : 'text-blue-400'} text-right w-2/3`}>{data?.low}</div>
                    <div className="text-center border-r-2">거래량</div><div>{data?.volume}</div>
                    <div className="text-center border-r-2">대금</div><div>{data?.adjClose}</div>
                </div>
            </div>
        </div>
    )
};
export default StockInfo;