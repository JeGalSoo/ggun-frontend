'use client'
import { useNews } from "@/app/hooks/news.hook";
import Image from "next/image"

export default function NewsTopic(){

  const { data: news } = useNews();

    return(
        <div className="text-center grid grid-cols-5 gap-3">
        {news && news.length > 0 &&news.slice(0,5).map((v: INews, i: any) =>
            <ul key={i} className="border text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                <li className="flex justify-center h-[60%]">
                  <Image unoptimized src={v.imgSrc} height={150} width={300} alt={v.title} className="rounded-t-lg" />
                </li>
                <li className="p-2 h-[30%] ">{v.title}</li>
              </ul>
            )}
        </div>
    )
}