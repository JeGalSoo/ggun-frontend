import AccountMenu from "@/app/component/navigation/accountMenu"
import { WhiteBox } from "@/app/component/style/whiteBox"
import { cookies } from "next/headers"
import Link from "next/link"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookie = Boolean(cookies().get('accessToken')?.value)

    return (
        <div className="w-full h-full justify-center flex">
            <div className="w-[80%]">
                <div className="sticky left-0 top-[55px] z-10">
                    {cookie == true ? <AccountMenu /> : ''}
                </div>
                <div className="w-full h-auto z-0 top-10 pt-3">
                    {cookie == false ?
                        <WhiteBox>
                            <div className="bg-ggun_logo bg-no-repeat bg-top h-auto w-full">
                                <div className="h-[500px]"></div>
                                <div className="text-center text-2xl">비회원 및 계좌미개설 고객님은 <br /> 확인할수 없는 페이지입니다.</div><br />
                                <Link className="w-full h-full" href='/login' > <WhiteBox style="text-center">login</WhiteBox></Link> <br />
                            </div>
                        </WhiteBox>

                        : <div className="h-full">{ children }</div>}
                </div>
                <div className="h-[300px]"> </div>
            </div>
        </div>
    )
}