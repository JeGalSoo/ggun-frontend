'use client'

import { useKrxJisu } from "@/app/hooks/krx.hook";
export default function JisuBenner() {

    const { data: krxJisu } = useKrxJisu();

    return (
        <div className="bg-pebble-100">
            <div className="text-white text-sm space-x-8 flex h-[20px] whitespace-nowrap animate-slider">
                {krxJisu && krxJisu.map((v: IKrx, i: number) =>
                    <div key={i} className="flex gap-2">
                        <div className="" key={i}>{v.IDX_NM}</div>
                        <div className="text-pebble-400">{v.CLSPRC_IDX}</div>
                        <div className={`${v.FLUC_RT.startsWith('-') ? 'text-sky-300' : 'text-rose-300'}`}>{v.FLUC_RT}</div>
                    </div>
                )}
            </div>
        </div>

    )
}