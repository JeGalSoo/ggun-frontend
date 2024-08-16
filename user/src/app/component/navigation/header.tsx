'use client'

import { useEffect, useState } from "react";
import { HeaderMenus } from "@/app/common/enums/main.menus";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

function Header() {

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
            {HeaderMenus.map((hover: IMenu, i: number) => (
                <li key={hover.id} className="group/item">
                    <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-full w-full text-center justify-center items-center checked:border ${pathName == hover.href ? 'border-pebble-500 border-t-2' : ''}`}
                        href={hover.href}>{hover.title}</Link>
                </li>
            ))
            }
        </ul>
            </div>
        </nav >

    );
}
export default Header;