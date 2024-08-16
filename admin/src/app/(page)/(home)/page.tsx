import { cookies } from "next/headers";
import Dashboard from "./afterHome/page";
import BeforeHome from "./beforeHome/page";

export default function Home() {

    const isLoggedIn = Boolean(cookies().get('accessToken')?.value);

    return(<>
        {isLoggedIn == true ?
            <div><Dashboard /> </div>
            :   <div><BeforeHome /> </div> }
    </>)
}
