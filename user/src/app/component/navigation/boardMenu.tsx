'use client'

import Link from "next/link";
import { BoardMenus } from "@/app/common/enums/main.menus";

function BoardMenu() {

    return (
        <nav>
            <ul className="w-full h-[50px] grid grid-cols-8 border-b-2 border-pebble-200 bg-pebble-100 ">
                <li className=""> <button className="bg-pebble-300 h-full w-full text-right justify-center items-center px-3">Home</button></li>
                <li className="overflow-hidden justify-right flex h-full">
                    <div className="bg-pebble-300 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-pebble-300 h-[30px] w-[150px]"></div>
                </li>
                {BoardMenus.map((hover: IMenu, i: number) => (
                    <Link key={hover.id} href={hover.href} className="hover:text-lg text-white h-full w-full content-center text-center">
                        <li className="">
                            {hover.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
export default BoardMenu;