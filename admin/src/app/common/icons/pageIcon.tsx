export const ArrowLeftIcon = ({ color, style }: IIcon) => {
    return (
        <svg className="h-10 w-10" style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
    )
}
export const ArrowRightIcon = ({ color, style }: IIcon) => {
    return (
        <svg className="h-10 w-10" style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    )
}
export const ChevronRight = ({ color, style }: IIcon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={style} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${color}`}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>

    )
}