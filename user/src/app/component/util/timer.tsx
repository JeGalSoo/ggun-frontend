'use client'

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { logoutApi } from "@/app/service/users/users.api";

export default function Timer() {
  const [sec, setSec] = useState(60);
  const [minute, setMinute] = useState(29);
  const router = useRouter();

  const logout = async () => await logoutApi()

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: "로그아웃 하시겠습니까?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: '로그아웃',
      cancelButtonText: '로그인 연장',
      reverseButtons: true,

    }).then((result) => {
      if (result.isDenied) {
        Swal.fire(
          '연장되었습니다.',
          ''
        )
        setSec(60)
        setMinute(29)
        // window.location.reload();
      }
      if (result.isConfirmed) {
        logout()
          .then((res: boolean | { status: number; }) => {
            Swal.fire(
              '로그아웃되었습니다.',
              ''
            )
            router.push('/')
          })
          .catch((error) => {
            console.log("logout page err: ", error)
          })
      }
    })

  }


  useEffect(() => {

    const id = setInterval(() => {
      if (sec <= 0) {
        setMinute((minute) => minute - 1);
        setSec(5);
      } else {
        setSec((sec) => sec - 1)
      }
    }, 1000);

    if (minute === 0 && sec == 0) {
      clearInterval(id);
      handleLogout()
    }

    return () => clearInterval(id);

  }, [sec, minute, router]);

  return (<div className="text-slate-400 text-sm">
    {minute == 0 && sec == 0 ?
      <div></div>
      : <div>남은시간 <span className="">{minute}:{sec}</span></div>
    }
  </div>);
}
