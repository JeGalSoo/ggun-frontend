'use client'

import { useEffect, useState } from "react";
import { BoardMenus, MyHeaderMenus, MyMenus } from "@/app/common/enums/main.menus";
import Link from "next/link";
import { AiMenus, CmaMenus } from "@/app/common/enums/account.menus";
import { usePathname } from "next/navigation";
import LogoutBox from "../logout/logout";

function MyHeader() {

    const [showHeader, setShowHeader] = useState(true);
    const pathName = usePathname();


    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <nav className="w-screen flex justify-center">
            <div className={`duration-500 ease-in-out transition-all px-3 border ${showHeader == true ? 'h-[70px] w-[85%]' : 'h-[40px] w-full'} shadow-sm rounded-b-lg bg-white`}>
            <ul className="grid grid-cols-8 justify-center gap-5 h-full w-full">
            {MyHeaderMenus.map((hover: IMenu, i: number) => (
                <li key={hover.id} className="group/item">
                    <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-full w-full text-center justify-center items-center ${pathName == hover.href ? 'border-pebble-500 border-t-2' : ''}`}
                        href={hover.href}>{hover.title}</Link>
                    <div className="h-[5px]"></div>
                    <div className="relative top-0 group/edit hidden group-hover/item:block h-[1px]">
                        <div className="h-full rounded-lg ">

                            {/* {hover.title == "Finance" ?
                            <div className="grid grid-cols-2 w-[250px] gap-1">
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    <li className="bold border-dashed border-b-2 border-amber-200 mb-1">CMA</li>
                                    <li className="border border-1 border-pebble-200 mb-3"></li>
                                    <li>
                                        {CmaMenus.map((hover2: IMenu, i: number) => (
                                            <div key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full" href={hover2.href}>{hover2.title}</Link></div>
                                        ))}
                                    </li>
                                    </ul>

                                    <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    <li className="bold border-dashed border-b-2 border-amber-200 mb-1">AI</li>
                                    <li className="border border-1 border-pebble-200 mb-3"></li>
                                    <li>
                                        {AiMenus.map((hover2: IMenu, i: number) => (
                                            <div key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></div>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                                : <div></div>} */}



                            {hover.title == "고객센터" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    {BoardMenus.map((hover2: IMenu, i: number) => (
                                        <li key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                                : <div></div>}

                            {hover.title == "주식꾼 님" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-white">
                                    {MyMenus.map((hover2: IMenu, i: number) => (
                                        <li key={hover2.id} className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                    <li className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href={`${process.env.NEXT_PUBLIC_ADMIN_URL}`}>admin page</Link></li>
                                </ul>
                                : <div></div>}

                        </div>
                    </div>
                </li>
            ))}
            <li className="text-center content-center hover:border-t-2 hover:border-pebble-500">
            <LogoutBox/>
                </li>
            {/* <li className="group/item "><MiniProfile /></li> */}
        </ul>
            </div>
        </nav >

    );
}
export default MyHeader;