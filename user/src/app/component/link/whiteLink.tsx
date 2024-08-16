import Link from "next/link"

export const WhiteLink = ({ children, click, style,select }: IButton) => {
    return (
        <Link
        href={click}
        className={`text-gray-500 content-center min-h-[30px] border bg-white shadow-lg rounded-lg hover:hover:bg-slate-200 focus:outline-none font-medium text-sm text-center ${style} ${select ? 'bg-pebble-400' : ''}`}>
               {children}
        </Link>
    )
}