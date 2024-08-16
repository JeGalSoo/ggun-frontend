'use client'

import { MoveButton } from '@/app/common/button/MoveButton';
import { WhiteBox } from '@/app/common/box/whiteBox';
import { useRouter } from 'next/navigation';
import { ClipIcon, MapIcon } from '@/app/common/icons/icons';
import { saveArticle } from '@/app/service/articles/articles.api';
import { useArticleAction, useArticleStack } from '@/app/store/articles.store';
import Swal from 'sweetalert2';
import { extractTokenId } from '@/app/component/util/jwtDecode';


export default function ArticleSave({ params }: { params: { id: number } }) {

  const router = useRouter();
  const writerId = extractTokenId() || '';

  const inputArticle = useArticleAction();
  const article = useArticleStack();

  const handleArticle = (e: any) => {
    inputArticle({ ...article, [e.target.name]: e.target.value });
    // console.log('article : ' + JSON.stringify(article))
  }

  const submitMail = async () => {
    await saveArticle(article)
      .then((res: IArticle | { status: number; }) => {
        router.back() 
      })
      .catch((error) => {
        console.log("saveArticle page err: ", error)
      })

  }

  return (
    <div className='flex justify-center content-center items-center w-full h-full'>
      <div className=''>
        <WhiteBox>
          <form className="w-[100%]" >
            <div className="text-center text-[20px] my-3">게시글 작성하기<br /><br /> <hr /></div>
            <div className='space-y-2'>
              <select name="boardId" defaultValue={params.id} id="" onChange={handleArticle}>
                <option value="1">사내 공지사항</option>
                <option value="2">관리자 문의</option>
              </select>
              <input className="" type="number" name='writerId' value={writerId} readOnly />

              <input className="" placeholder="Title" type="text" name='title' onChange={handleArticle} />

              <textarea className="h-[200px] w-full border border-2" name='content' placeholder="Describe everything about this post here"
                onChange={handleArticle} />
            </div>
            <div className="icons flex text-gray-500 m-2">
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <MapIcon />
              </svg>
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <ClipIcon />
              </svg>
              <input type="file" id="input-file" name="input-file" accept='.zip' className='invisable' />
              <div className="count ml-auto text-gray-400 text-xs font-semibold">{article.content?.length}/300</div>
            </div>
            <div className="buttons flex gap-5 justify-center h-[50px]">
              <MoveButton click={submitMail}>작성완료</MoveButton>
            </div>
          </form >
        </WhiteBox>
      </div>
    </div>
  );
};
