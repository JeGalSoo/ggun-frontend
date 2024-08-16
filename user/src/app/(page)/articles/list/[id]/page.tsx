'use clinet'

import Articles from "@/app/component/articles/articles";
import OftenQuestionsBox from "@/app/component/articles/oftenQuestions";
import { Search } from "@/app/component/search/search";
import { Suspense } from "react";

async function ArticleList({ params }: {params :{id: string}}) {

    function handleTitle() {
        const enums: any = {
            1: "QnA /1:1문의",
            2: "자주하는 질문",
            3: "공지사항",
            4: "이벤트",
        };
        return <div>{enums[params.id]}</div>;
    };

    return (
        <div className="w-full h-full ">
                <div className="bg-pebble-100 ">
                    <div className="content-center iflex-col h-[120px]">
                        <div className="space-x-5 justify-center flex">
                            <div className="text-[35px] text-center content-center text-white w-[20%]">{handleTitle()}</div>
                            <div className=" w-[70%] h-full ">
                                <Search text={`${handleTitle()} 검색`} style="" />
                                <div className="space-x-3 py-3 ">
                                    <span className="bold text-[20px] text-white">추천검색어</span>
                                    <span className="text-pebble-200 hover:text-white cursor-point">비밀번호 초기화</span>
                                    <span className="text-pebble-200 hover:text-white cursor-point">계좌개설</span>
                                    <span className="text-pebble-200 hover:text-white cursor-point">공모주 신청방법</span>
                                    <span className="text-pebble-200 hover:text-white cursor-point">금융사기 예방</span>
                                    <span className="text-pebble-200 hover:text-white cursor-point">사이트 이용 가이드</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`grid-cols-5 justify-center flex ${params.id == '2' ? 'visible' : 'h-1 invisible'}`}>
                        <OftenQuestionsBox />
                    </div>

                </div>

                <div className="h-auto my-10">
                    <Suspense>
                        <Articles prop={params.id}/>
                    </Suspense>
                </div>
        </div>
    )
};

export default ArticleList;
