import { NextPage } from "next"
import { useState } from "react";
import { ChevronLeftICon, ChevronRightICon } from "@/app/common/icon/pageIcon";

const Pagination = ({ total, limit, page, setPage }: any) => {
    const [btnActive, setBtnActive] = useState('');
    const numPages = Math.ceil(total / limit);

    const handelPageBtn = (e: any, i: any) => {
        setPage(i + 1);
        setBtnActive(e.target.value);
    }

    return (
        <>
            <div className="flex bg-pebble-200 text-white rounded-full">
                <button onClick={() => {setPage(page - 1), setBtnActive(page)}} disabled={page === 1} className="w-[40px] px-2 hover:backdrop-brightness-125 rounded-l-full">
                    <ChevronLeftICon /> 
                </button>
                {Array.from({ length: numPages }, (v: any, i: any) =>
                    <div key={i + 1} className="flex content-center items-center">
                        {btnActive == i ?  
                            <button value={i} 
                            className={`backdrop-brightness-125 w-[30px] h-[30px] hover:block`} onClick={(e: any) => handelPageBtn(e, i)}
                            aria-current={page === i + 1 ? "page" : undefined}>{i + 1}</button>
                            :
                            <button value={i}
                            className={`hover:backdrop-brightness-125 w-[30px] h-[30px] hover:block`} onClick={(e: any) => handelPageBtn(e, i)}
                            aria-current={page === i + 1 ? "page" : undefined}>{i + 1}</button>}
                    </div>
                )}
                <button onClick={() => {setPage(page + 1), setBtnActive(page+1)} } disabled={page === numPages} className="w-[40px] px-2 hover:backdrop-brightness-125 rounded-r-full">
                    <ChevronRightICon />
                </button>
            </div >
        </>
    );
};

export default Pagination