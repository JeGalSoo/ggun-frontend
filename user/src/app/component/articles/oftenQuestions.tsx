import { oftenQuestions } from "@/app/common/dummy/articles.dummy";
import { Search } from "../search/search";
import Link from "next/link";

export default function OftenQuestionsBox() {
    
    function handleColor() {
        const number = Math.floor(Math.random() * 4);
        // console.log("number : ", number)
        const enums: any = {
            0: 'text-pebble-400',
            1: 'text-yellow-200',
            2: 'text-pebble-300',
            3: 'text-rose-300',
        };
        return enums[number];
    };

    function handleSize() {
        const number = Math.floor(Math.random() * 5);
        // console.log("number : ", number)
        const enums: any = {
            0: 'text-[32px]',
            1: 'text-[50px]',
            2: 'text-[16px]',
            3: 'text-[20px]',
            4: 'text-[45px]',
            5: 'text-base',
        };
        return enums[number];
    };


    return (
        <div className="w-[95%]">
            {oftenQuestions.map((v:any, i:number) =>
                <Link key={v[0]} href={`/articles/${v[0]}`} className={`cursor-pointer hover:text-white text-clip p-3 ${handleColor()} ${handleSize()}`}>{v[1]}</Link>
            )}
        </div>
    )
        ;
}