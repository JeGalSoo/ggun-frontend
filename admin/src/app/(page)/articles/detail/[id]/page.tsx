'use client'
import { MoveButton } from '@/app/common/button/MoveButton';
import { WhiteBox } from '@/app/common/box/whiteBox';
import Link from 'next/link';
import { articleDummy } from '@/app/common/dummy/article.dummy';
import { ClipIcon, MapIcon } from '@/app/common/icons/icons';
import Image from 'next/image';
import { fetchArticleDatail } from '@/app/service/articles/articles.api';
import { useQuery } from '@tanstack/react-query';
import { useArticleDatail } from '@/app/hooks/article.hook';

export default function ArticleDetail({ params }: { params: { id: string } }) {

  const {data:artiDetail} = useArticleDatail(params.id);

  return (
    <div className=' w-full h-full flex justify-center'>
      <div className='w-[70%]'>

        <WhiteBox style="flex justify-center items-center">
          <div className="w-[80%]" >
            <Image src={'/imgs/notice.jpg'} className="w-full h-[400px]" width={500} height={500} alt={'notice'} />
            <div className="text-center text-[36px] my-3">{artiDetail&&artiDetail.title} <hr /></div>

            <div className='flex py-2 w-full border-b-2'>
              <div className='w-1/2'>
                작성자 : {artiDetail&&artiDetail.writerId} 부서 {artiDetail&&artiDetail.writerId} 님
              </div>
              <div className='text-right w-1/2'>작성일자 : {artiDetail&&artiDetail.regDate} </div>
            </div>

            <div className='min-h-[200px] py-[20px]'>
              {artiDetail&&artiDetail.content}

            </div>
            <div className="icons flex text-gray-500 gap-3 cursor-point">
              <MapIcon />
              <span className="hover:toolkit flex gap-4 group">
                <ClipIcon /> <span className='invisible group-hover:visible rounded-lg p-1 px-3 bg-pebble-400'>첨부파일이 없습니다.</span>
              </span>
              <div className="count ml-auto text-gray-400 text-xs font-semibold">{artiDetail&&artiDetail.content?.length}/300</div>
            </div>
            <div className="buttons flex gap-5 justify-center h-[70px] my-5">
              <Link href={`/articles/list/1`} className='w-full'><MoveButton style='w-full h-full'>목록으로 돌아가기</MoveButton></Link>
            </div>
          </div>
        </WhiteBox>
        <div className='flex justify-between py-[15px] h-[80px] truncate'>
          <WhiteBox><Link href={`/articles/detail/${parseInt(params.id) - 1}`}>이전글 가기</Link></WhiteBox>
          <WhiteBox><Link href={`/articles/detail/${parseInt(params.id) + 1}`}>다음글 가기</Link></WhiteBox>
        </div>
      </div>
    </div>
  );
};