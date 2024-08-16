import Image from "next/image"
import Link from "next/link"

export default function OAuth () {

    return(
        <div className="relative top-0 left-[25%] grid grid-cols-3 w-[50%] h-full">
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&scope=profile%20email&state=W9ABsub1S_WjiOZ-CGRPHBbVmxb_vIvEmaApxMMGC90%3D&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin%2Foauth2%2Fcode%2Fgoogle&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow`}>
            <Image src={'/authLogo/google.png'} alt={"google"} width={50} height={50} style={{ width: 50, height: 50 }} priority /></Link>
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/naver`}><Image src={'/authLogo/naver.png'} alt={"naver"} width={50} height={50} style={{ width: 50, height: 50 }} priority/></Link>
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`}><Image src={'/authLogo/kakao.png'} alt={"kakao"} width={50} height={50} style={{ width: 50, height: 50 }} priority/></Link>
            </div>
        </div>
    )
}
