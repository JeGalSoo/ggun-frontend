import { qnalistDummy } from "@/app/common/dummy/articles.dummy";
import Image from "next/image";
import Link from "next/link";
import { WhiteBox } from "../style/whiteBox";
import { useState } from "react";

export default function MiniProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const alaramList = qnalistDummy;

    return (
        <div className="w-full h-full justify-center flex items-center relative top-0 flex-col">
            <div className="group/items w-full h-full absolute">
                {/* <div className="w-full h-full"> */}
                    <Image src={"/imgs/user.gif"} alt={"user"} fill sizes="100%" priority className="rounded-full" />
                {/* </div> */}

                <button className="relative -top-[30%] -right-[50%] w-[1px] h-[1px]" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-1 right-1">
                        {alaramList.length}
                    </span>
                </button>
            </div>

            <div className="h-[5px]"></div>
            <div className="relative top-[53%] hidden group-hover/item:block h-[1px] min-w-[100px]">
                <ul className="text-center py-2 items-center justify-center border bg-white rounded-lg shadow-sm ">
                    <li className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href="#">My page</Link></li>
                    <li className="pb-1"><Link className="hover:text-pebble-500 w-full py-2 " href="/beforeMain">Logout</Link></li>
                </ul>
            </div>

            <div className="absolute top-[110%] h-auto -left-[150%]">
                {isOpen == true ?
                    <div className=" w-[60%] h-[80%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {alaramList.slice(0, 5).map((i: any) =>
                            <div key={i.id} className="flex-col py-1 ">
                                <WhiteBox style="white hover:bg-gray-100">
                                    <div>
                                        <div className="flex">
                                            <div className="text-sm w-2/3 truncate text-left">{i.title}</div>
                                            <div className="text-gray-300 text-xs w-1/3">{i.modDate}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs row-span-2 text-gray-300 truncate">{i.content}</div>
                                        </div>
                                    </div>
                                </WhiteBox>
                            </div>
                        )}
                    </div>
                    : <div></div>}
            </div>



        </div>
    )
}
