'use client'

import { WhiteBox } from '@/app/component/style/whiteBox';
import Link from 'next/link';
import { ClipIcon, MapIcon } from '@/app/common/icon/icon';
import Image from 'next/image';
import { MoveButton } from '@/app/component/button/buttons';
import { findByArticleId } from '@/app/service/articles/articles.api';
import { articlesDummy } from '@/app/common/dummy/articles.dummy';
import { useQuery } from '@tanstack/react-query';
import { useArticleDetail } from '@/app/hooks/article.hook';

export default function ArticleDetail({ params }: { params: { id: string } }) {

  const { data: artiDetail } = useArticleDetail(params.id);

  return (
    <div className=' w-full h-full'>
      <WhiteBox style="flex justify-center items-center ">
        <div className="w-[80%]" >
          <Image src={'/imgs/notice.jpg'} className="w-full h-[400px]" width={500} height={500} alt={'notice'} />
          <div className="text-center text-[36px] my-3">{artiDetail?.title} <hr /></div>

          <div className='flex py-2 w-full border-b-2'>
            <div className='w-1/2'>
              작성자 : {artiDetail?.writerId} 부서 {artiDetail?.writerId} 님
            </div>
            <div className='text-right w-1/2'>작성일자 : {artiDetail?.regDate} </div>
          </div>

          <div className='min-h-[200px] py-[20px]'>
            {artiDetail?.content}

          </div>
          <div className="icons flex text-gray-500 gap-3 cursor-point">
            <MapIcon />
            <span className="hover:toolkit flex gap-4 group">
              <ClipIcon /> <span className='invisible group-hover:visible rounded-lg p-1 px-3 bg-pebble-400'>첨부파일이 없습니다.</span>
            </span>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">{artiDetail?.content?.length}/300</div>
          </div>
          <div className="buttons flex gap-5 justify-center h-[70px] ">
            <Link href={`/articles/list/1`} className='w-[20%] '><MoveButton style='w-full h-full'>목록으로 돌아가기</MoveButton></Link>
          </div>
        </div>
      </WhiteBox>
      <div className='flex py-[15px] space-x-[70%] h-[80px] truncate'>
        <Link href={`/articles/detail/${parseInt(params.id) - 1}`}><WhiteBox>이전글 가기</WhiteBox></Link>
        <Link href={`/articles/detail/${parseInt(params.id) + 1}`}><WhiteBox>다음글 가기</WhiteBox></Link>
      </div>
    </div>
  );
};