
import Timer from "@/app/component/util/timer"
import Image from "next/image"

export const HeaderMenus: IMenu[] = [
    { id: 1, title: <Image src='/imgs/ggun_logo.png' alt="ggun_logo" width={50} height={30}/>, href: `/` },
    { id: 2, title: "Finance", href: `/asset` },
    { id: 4, title: "주식 랭킹", href: `/stock` },
    { id: 5, title: "경제 News", href: `/news` },
    { id: 6, title: "고객센터", href: `/articles/list/2` },
    { id: 7, title: '', href: `` },
    { id: 8, title: "Login", href: `/login` },
    { id: 9, title: "join", href: `/join` },
]

export const MyHeaderMenus: IMenu[] = [
    { id: 1, title: 
        <div className="h-full w-full bg-ggun_logo bg-top bg-contain bg-no-repeat "></div>
    , href: `/` },
    { id: 2, title: "Finance", href: `/asset` },
    { id: 4, title: "주식 랭킹", href: `/stock` },
    { id: 5, title: "경제 News", href: `/news` },
    { id: 6, title: "고객센터", href: `/articles/list/2` },
    { id: 7, title: <Timer />, href: `` },
    { id: 9, title: `주식꾼 님`, href: `/` },
]

export const BoardMenus: IMenu[] = [
    { id: 1, title: "매매성향 5", href: `/articles/character` },
    { id: 2, title: "자주하는 질문", href: `/articles/list/2` },
    { id: 3, title: "QnA /1:1문의", href: `/articles/list/1` },
    { id: 4, title: "공지사항", href: `/articles/list/3` },
]

export const MyMenus: IMenu[] = [
    { id: 1, title: "My page", href: `/` },
]