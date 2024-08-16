import { MoveButton } from "../button/buttons";

export default function CertificateLogin() {
    return (
        <div className="w-full h-full ">
            <div className="pb-3">
                <div className="bold text-center text-lg">인증서 로그인</div>
                <div className="text-slate-500 text-center">주문/뱅킹/퇴직연금 거래가 가능합니다.</div>
            </div>
            <div>
                <ol className="bg-slate-200 py-[15px] px-3 ">
                    <li>온라인 거래를 위해서는 공동인증서가 필요합니다. </li>
                    <li>공동인증서 발급은 인증센터를 방문해 주십시오.</li>
                    <li>퇴직연금 고객의 홈페이지 이용을 위해서는 공동인증서 발급 또는 타기관 인증서 등록이 필요합니다.</li>
                </ol>
            </div>
            <div className="mt-3 w-full"></div>
            <div className="flex justify-center gap-4">
                <label className="flex content-center"><input type="radio" name="select" className="w-5" />공동인증서</label>
                <label className="flex content-center"><input type="radio" name="select" className="w-5" />금융인증서(클라우드)</label>
            </div>
            <MoveButton style="w-full mt-2">Login</MoveButton>
            <div className="grid grid-cols-3 text-center py-3">
                자동로그아웃시간
                <select name="timeSelect" defaultValue='30' >
                    <option value='30'>30분</option>
                    <option value='60'>1시간</option>
                    <option value='240'>3시간</option>
                </select>
                <MoveButton>인증센터 바로가기</MoveButton>
            </div>
        </div>
    )
}