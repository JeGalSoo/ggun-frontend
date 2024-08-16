'use client'
import Image from 'next/image';
import React, { Suspense } from "react";
import { WhiteBox } from '@/app/common/box/whiteBox';
import AdminsDetail from '@/app/component/admins/dateil';

export default function AdminDetail({ params }: { params: { id: string } }) {

    return (
        <div className='w-full h-full flex justify-center content-center items-center'>
            <WhiteBox style='w-[50%] h-auto space-y-4'>
                <div className='text-center text-3xl'>사원 정보</div>
                <div className='w-full h-auto flex justify-center'>
                    <div className='w-[200px]'>
                        <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                    </div>
                </div>

                <Suspense>
                    <div className='w-full flex justify-center'>
                        <AdminsDetail props={params.id} />
                    </div>
                </Suspense>
            </WhiteBox>

        </div >
    )
};


