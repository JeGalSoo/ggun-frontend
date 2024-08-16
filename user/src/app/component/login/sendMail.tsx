'use client'

import { BrownButton, MoveButton } from '../button/buttons';
import { MapIcon, ClipIcon, XIcon } from '@/app/common/icon/icon';
import { useState } from 'react';
import { useMailAction, useMailStack } from '@/app/store/sendMail.store';
import { SendMailApi } from '@/app/service/mail/mail.api';

export default function SendMail() {

    let [isOpen, setIsOpen] = useState(false);

    const inputMail = useMailAction();
    const Mail = useMailStack();
    
    const handleMail = (e: any) => {
        inputMail({ ...Mail, [e.target.name]: e.target.value });
        console.log('Mail : ' + JSON.stringify(Mail))
    }

    const submitMail = async (): Promise<IMail> => {
        const response = await SendMailApi(Mail)
        if (typeof response === 'object' && 'status' in response) {
            throw new Error(`Error: ${response.status}`);
          }
        return response;
    }

    return (

        <div className="">
            <BrownButton click={() => setIsOpen(!isOpen)} style='truncate'>관리자 문의 메일 보내기</BrownButton>

            {isOpen == true ?
                <div className="fixed z-10 top-[100px] left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                    <div className="w-full my-3">
                        <div className='flex justify-center w-[100%]'>
                            <form className="w-[100%]">
                                <div className="text-center text-[20px] my-3">관리자 이메일 문의 <br /><br /> <hr /></div>

                                <div className='space-y-2'>
                                    <input className="" placeholder='회신받을 이메일' name='email' type="eamil" onChange={handleMail}/>
                                    <input className="" placeholder="Title" type="text" name='subject' onChange={handleMail}/>
                                    <textarea className="h-[200px] w-full" placeholder="Describe everything about this post here" name='message' onChange={handleMail}/>
                                </div>
                                <div className="icons flex text-gray-500 m-2">
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <MapIcon />
                                    </svg>
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <ClipIcon />
                                    </svg>
                                    <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                                </div>
                                <div className="buttons flex gap-5 justify-center h-[50px]">
                                    <MoveButton click={submitMail} >메일보내기</MoveButton>
                                </div>
                            </form >
                        </div>
                    </div>
                    <button className="bg-white left-[50%] h-[40px] w-[30px] rounded-lg z-5" onClick={() => { setIsOpen(!isOpen), console.log("fff") }} ><XIcon color="gray" /></button>
                </div>
                : <div></div>}
        </div>
    );
}