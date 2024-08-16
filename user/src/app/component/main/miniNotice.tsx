import { articlesDummy } from "@/app/common/dummy/articles.dummy"
import Link from "next/link";

export default function MiniNotice() {

    const allArticles = articlesDummy;
    return (
        <div className="w-full h-full flex flex-col space-y-3 justify-center" >
            <div className="text-xl bold grid grid-cols-2">
                <div className="">공지사항</div>
                <div className="text-right"><Link href={"/articles/list/3"}>전체보기 +</Link></div>
            </div>
            <div className="border border-pebble-100"></div>

            <div className="" >
                <table className="">
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allArticles.slice(0, 5).map((v: IArticle, i: number) =>
                            <tr key={v.id}>
                                <td><Link href={`/articles/detail/${v.id}`}>{v.title}</Link></td>
                                <td>{v.modDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
};