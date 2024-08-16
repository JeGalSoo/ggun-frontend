
import { WhiteLink } from "@/app/component/link/whiteLink";
import CertificateLogin from "@/app/component/login/certificateLogin";
import IdLoginBox from "@/app/component/login/loginBox";

const Login = () => {
    return (
        <div className="flex justify-center w-screen items-center h-full">
            <div className="rounded-lg shadow-lg border min-w-[500px] min-h-[400px] p-8 mb-10">
                <div className="flex space-x-[5%]">
                    <IdLoginBox />
                    <CertificateLogin />
                </div>
                <div className="flex justify-center items-center w-full h-[70px] space-x-3">
                        <WhiteLink style="h-[30px] w-[200px]" click={process.env.NEXT_PUBLIC_ADMIN_URL} ><span>ADMIN PAGE</span></WhiteLink>
                </div>
            </div>
        </div>
    )
}

export default Login;