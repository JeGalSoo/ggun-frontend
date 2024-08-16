'use client'

import Link from "next/link";
import { AcountMenus } from "@/app/common/enums/account.menus";
import { usePathname } from "next/navigation";

function AccountMenu() {

    const pathName = usePathname();
    // <Link key={i} href={v.href} className="hover:text-lg text-white h-full w-full content-center text-center">{v.title}</Link>
    return (
        <nav>
            <ul className="w-full h-[50px] grid grid-cols-7 border-b-2 border-pebble-200 bg-pebble-100">
                <Link href="/asset"><li className="bg-pebble-300 h-full w-full text-right justify-center content-center px-3 text-2xl text-bold">나의 자산</li></Link>
                <li className="overflow-hidden justify-right flex h-full">
                    <div className="bg-pebble-300 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-pebble-300 h-[30px] w-[150px]"></div>
                </li>


                {AcountMenus && AcountMenus.map((hover: IMenu, i: number) => (
                     <li key={hover.id} className="group/item">
                     <Link className={`flex text-white hover:border-b-2 hover:border-pebble-300 h-full w-full text-center justify-center items-center ${pathName == hover.href ? 'border-pebble-300 border-b-2' : ''}`}
                         href={hover.href}>{hover.title}</Link>
                     <div className="h-[5px]"></div>
                     <div className="relative top-0 group/edit hidden group-hover/item:block h-[1px]">
                         <div className="h-full rounded-lg ">
 
{/*                         
                         {hover.title == "CMA" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-pebble-100">
                                    {CmaMenus.map((hover2: IMenu, i: number) => (
                                       <li key={hover2.id} className="pb-1"><Link className="text-white hover:text-pebble-300 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                                : <div></div>} */}

                                                   
                         {/* {hover.title == "AI" ?
                                <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm bg-pebble-100">
                                    {AiMenus.map((hover2: IMenu, i: number) => (
                                       <li key={hover2.id} className="pb-1"><Link className="text-white hover:text-pebble-300 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                    ))}
                                </ul>
                                : <div></div>} */}

                        </div>
                    </div>
                </li>
            ))}

            </ul >
        </nav >
    )
}
export default AccountMenu;