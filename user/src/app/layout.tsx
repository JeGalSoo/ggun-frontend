
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/box/footer";
import JisuBenner from "./component/util/jisuBenner";
import Header from "./component/navigation/header";
import { QueryObserverBaseResult } from "@tanstack/react-query";
import { cookies } from "next/headers";
import MyHeader from "./component/navigation/myHeader";
import ReactQueryProviders from "./common/hook/useReactQuery";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children, queryState
}: {
  children: React.ReactNode,
  queryState: QueryObserverBaseResult;
}) {

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/chart.png" type="image/<generated>" sizes="<generated" border-radius="50%" />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="bg-white">
          <ReactQueryProviders >
            <div className="h-[95px]">
              <div className="fixed h-[50px] top-0 left-0 z-30 ">
                <JisuBenner />
                {Boolean(cookies().get('accessToken')?.value) ==true ? <MyHeader/> :  <Header/>}
              </div>
            </div>
            <div className="justify-center flex z-10">
              {children}
            </div>
            <div className="border-t-[1px] relative bottom-0 f-full"><Footer /></div>
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
