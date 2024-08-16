import { useState } from "react";

export const StockComuBox = ({ id,writer, title, content, date }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={id} className="w-full h-full">
            <button className="w-full h-[50px] grid grid-cols-2 px-4 items-center active:text-xl" onClick={() => setIsOpen(!isOpen)}>
                <div className="text-lg text-left active:text-xl">{title}</div>
                <div className="text-slate-400 text-right">{writer}</div>
            </button>
                <hr />

            {isOpen == true ?
                <div className="border shadow-lg rounded-b-lg overflaw-auto p-2 w-full min-h-[100px] space-y-2 bg-slate-200 ">
                    <div className={`text-slate-400 text-right h-[15%]`}>{date}</div>
                    <div className="h-[50%] min-h-[30px]">{content}</div>
                    <input type="text" placeholder="자유롭게 의견을 나눠보세요." className="h-[35%] focus:h-[50px]"/>
                </div>
           :<div></div> }
        </div>
    )

}