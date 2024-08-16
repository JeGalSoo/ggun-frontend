
import { MoveButton } from "@/app/common/button/MoveButton";
import { Suspense } from "react";
import { Search } from "@/app/component/util/search";
import Articles from "@/app/component/articles/Articles";
import { BrownLink } from "@/app/common/link/brawnLink";

export default function ArticlesList({ params }: any) {

    return (

        <div className="w-full h-full flex justify-center">
            <div className="w-[80%] ">

                    <div className="bg-pebble-200 content-center flex-col h-[120px] rounded-b-lg">
                        <div className="space-x-5 justify-center flex">
                            <div className="text-[30px] text-center content-center text-white w-[20%]">{params.id == 1 ? "사내 공지사항": "관리자 문의게시판"}</div>
                            <div className=" w-[70%] h-full">
                                <Search style="" />
                                <div className="space-x-3 py-3 hover:text-white">
                                    <span className="bold text-[20px] text-white">추천검색어</span>
                                    <span className="text-pebble-400">비밀번호 초기화</span>
                                    <span className="text-pebble-400">계좌개설</span>
                                    <span className="text-pebble-400">공모주 신청방법</span>
                                    <span className="text-pebble-400">금융사기 예방</span>
                                    <span className="text-pebble-400">사이트 이용가이드</span>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="h-auto my-5">
                    <Suspense>
                        <Articles prop={params.id} />
                    </Suspense>
                </div>
                <div className="w-[70%] grid grid-cols-5 gap-3 m-auto pb-10 ">
                    <Search style="col-span-3" /> <MoveButton >검색</MoveButton>
                    <BrownLink click={`/articles/save/${params.id}`}>게시글 작성하기</BrownLink>
                </div>
            </div>
        </div>

    )
};
