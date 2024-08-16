'use client'

import { AcountMenus } from "@/app/common/enums/account.menus";
import { BottomLlinButton } from "@/app/component/button/tabButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function AccountMenuDelete() {

    const [isOpen, setIsOpen] = useState(0);
    const mypath = usePathname()

    return (
        <nav className="w-[150px] fixed top-[80px] left-3">

            <div className="absolute bg-white top-3 left-0 group p-1.5 border shadow-lg rounded-lg content-center w-[40px] h-auto">
                <button
                    className="flex flex-col justify-center items-center group relative w-full h-auto"
                    onClick={() => isOpen ==0 ? setIsOpen(1): setIsOpen(0)}>
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5  group-hover:opacity-100" : " group-hover:opacity-100"}`} />
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "-rotate-45 -translate-y-3.5  group-hover:opacity-100" : "group-hover:opacity-100"}`}/>
                </button>
            </div>

            {isOpen > 0 ?
                <div className="absolute top-6 rounded-lg left-0 h-auto w-auto mt-10 bg-white text-black border shadow-lg p-3">
                    {AcountMenus.map((v:IMenu, i:number) =>
                        <div key={v.id} className="h-[30px] text-center my-5">
                            <BottomLlinButton select={mypath == v.href} click={v.href}>{v.title}</BottomLlinButton>
                        </div>
                    )}
                </div>
                : <div></div>}
        </nav>
    )
};