
export const BrownBox = ({ children, style }: { children: React.ReactNode, style?: string }) => {
    return (
        <div className={`overflaw-auto p-3 w-full bg-gradient-to-r from-pebble-200 to-pebble-400 via-pebble-300 ${style}`}>
            {children}
        </div>
    )
}