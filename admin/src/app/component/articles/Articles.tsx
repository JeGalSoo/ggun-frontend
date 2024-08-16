
'use client'

import { useMyArticleList } from "@/app/hooks/article.hook";
import { useRouter } from "next/navigation";

export default function Articles({ prop }: { prop: string }) {

    const router = useRouter();
    const {data:artiMyList} = useMyArticleList(prop);

    return (
        <div className="w-full h-full">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>borad id</th>
                        <th>작성일</th>
                        <th>처리완료일</th>
                    </tr>
                </thead>
                <tbody>
                    {artiMyList&&artiMyList.map((v: IArticle, i: number) =>
                        <tr key={i} className="cursor-pointer" onClick={()=>router.push(`/articles/detail/${v.id}`)}>
                           <td>{v.id}</td>
                           <td>{v.title}</td>
                            <td>{v.writerId}</td>
                            <td>{v.content}</td>
                            <td>{v.boardId}</td>
                            <td>{v.regDate}</td>
                            <td>{v.modDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
};
