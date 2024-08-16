'use client'
 
import NewsHeader from "../../component/navigation/newsHeader";
import NewsToday from "../../component/news/newsToday";
import NewsTopic from '@/app/component/news/newsTopic';
import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { newsDummy } from '@/app/common/dummy/news.dummy';
import { fetchNews } from '@/app/service/news/news.api';
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {

  const fetchData= async (): Promise<INews[]> => {
    const response = await fetchNews()
    if ('status' in response) {
        throw new Error(`Error: ${response.status}`);}
    return response;
}

const { data } = useQuery<INews[]>(
    {
        queryKey: ["news"],
        queryFn: fetchData,
        // placeholderData: newsDummy,
    }
);

  return (
    <div className="h-full w-full">
      <div className="flex justify-center w-full">
        <div className="h-full w-[80%] flex-col justify-center">
        <div className='sticky top-[60px] h-[60px] z-35'><NewsHeader /></div>
        <Suspense>
              <div className="mb-5">
              {data && data.length > 0 &&
                <Link href={data[0].imgLink}>
                  <div className="flex border bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                    <Image unoptimized src={data[0].imgSrc} height={250} width={500} alt={data[0].title} className="rounded-l-lg" />
                    <ul className="w-[50%] ml-[15px] text-center content-center">
                      <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                      <li className="text-[30px]">{data[0].title}</li>
                      <li className="text-[15px] ml-[15px] text-left mt-[10%]">{data[0].content}</li>
                    </ul>
                  </div>
                </Link>
               }
              </div>
            <div><NewsTopic /></div> 
              <div><NewsToday title="최신뉴스" newslist={data} /></div>
        </Suspense>
        </div>
      </div>
    </div>
  );
}

