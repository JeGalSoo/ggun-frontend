import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProviders from "./common/hook/useReactQuery";
import { QueryObserverBaseResult } from "@tanstack/react-query";
import Sidebar from "./component/navigation/sidebar";
import { cookies } from "next/headers";
import ChatRoom from "./(page)/chatting/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
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
            <div className={`flex h-full z-20 fixed top-0 left-0`}>
            {Boolean(cookies().get('accessToken')?.value) ==true ? <Sidebar /> : ''}
            </div>
            <div className="h-screen w-auto top-0 right-0 fixed z-20">
            {Boolean(cookies().get('accessToken')?.value) ==true ? <ChatRoom /> : ''}
            </div>
            <div className="w-full h-full justify-center flex z-0">
              {children}
            </div>
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
