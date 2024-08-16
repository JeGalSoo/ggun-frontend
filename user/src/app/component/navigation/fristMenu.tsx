
import { FirstMemus } from "@/app/common/enums/first.menus";
import Link from "next/link";

function FirstMenu() {


    return (
        <nav className="w-full h-full bg-pebble-500">
            <ul className="w-full h-full grid grid-cols-7 ">
                <li className="bg-amber-200 h-full w-full text-right justify-center items-center px-3 flex"> 처음오셨나요?</li>
                <li className="overflow-hidden justify-right flex">
                    <div className="bg-amber-200 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-amber-200 h-[30px] w-[150px]"></div>
                </li>
                {FirstMemus.map((hover: IMenu, i: number) => (
                    <Link key={hover.id} href={hover.href} className="hover:text-lg text-white h-full w-full content-center text-center">
                        <li  className="">
                            {hover.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default FirstMenu;