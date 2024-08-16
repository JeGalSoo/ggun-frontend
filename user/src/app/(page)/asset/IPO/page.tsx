'use client'

import BigCalendar from "@/app/component/util/bigCalendar"


export default function IpoPage() {
    return (
        <div>
            <h2 className="text-[25px] bold bg-pebble-200 text-white border-x-4 border-amber-400 pl-4">IPO(공모주) 달력</h2>
            <BigCalendar />
        </div>
    )
}     
