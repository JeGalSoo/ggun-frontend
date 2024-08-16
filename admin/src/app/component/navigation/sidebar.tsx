'use client'

import { usePathname } from "next/navigation";
import { } from "@/app/common/icons/icons";
import Image from "next/image";
import TimeNow from "../util/timeNow";
import Link from "next/link";
import { BoardMenus, MainMenus, ReportMenus } from "@/app/common/enums/menus";
import { TallbarIcon } from "@/app/common/icons/sideberIcon";
import { useState } from "react";
import LogoutBox from "../auth/logout";

function Sidebar() {

    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`h-full flex bg-pebble-100 text-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-[270px]'}`}>
            <div className={`w-[270px] h-full`}>
                <ul className="flex flex-col items-center py-3">
                    <li className="text-center">
                        <Image src="/imgs/user.gif" width="80" height="80" className="rounded-full" alt="my profile" unoptimized />
                    </li>
                    <li className="text-center m-2">
                        <button onClick={() => alert("내 프로필 보기!")}>My name!</button>
                    </li>
                    <li className="text-center text-gray-200 text-xs hover:text-white">
                        <LogoutBox />
                    </li>
                </ul>

                <hr /><hr /> <br />

                <div className="flex flex-col justify-center">

                    {MainMenus.map((v: IMenu, i: number) => (
                        <ul key={v.id} className="h-full w-full px-[50px]">
                            <li className="h-[40px] w-full">
                                <Link href={v.href} className={`w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200 ${pathName == v.href ? 'text-amber-200' : ''}`}>{v.title}</Link>
                            </li>

                            <li>
                                <ul key={v.id} className="h-auto group">

                                    {pathName == v.href && v.title == "게시판" ?
                                        <li>{BoardMenus.map((vv: IMenu, i: number) =>
                                            <div key={vv.id} className="p-1 ">
                                                <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                            </div>)}
                                        </li>
                                        : <li></li>
                                    }

                                    {pathName == v.href && v.title == "Report" ?
                                        <li>{ReportMenus.map((vv: IMenu, i: number) =>
                                            <div key={vv.id} className="p-1 ">
                                                <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                            </div>)}
                                        </li>
                                        : <li></li>
                                    }
                                </ul>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="absolute bottom-0 w-full text-center pt-5 border items-center flex">
                    {/* <TimeNow /> */}
                    <Image src={`/imgs/ggun_logo.jpg`} width={100} height={100} alt={"ggun_logo"} 
                        className="rounded-full border-dashed "/>
                    <Link className='h-full text hover:text-xl' href={`${process.env.REACT_APP_SERVER}`} >
                    ggun.store
                    </Link>
                </div>

            </div>
            <button className="w-[30px] h-screen bg-pebble-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <TallbarIcon color="black" />
            </button>
        </nav >
    )
}

export default Sidebar;