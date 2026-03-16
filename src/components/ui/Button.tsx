import type { ReactNode } from "react"

type Props = {
    children: ReactNode
    className: string
    onClick: () => void
}
const Button = ({ children, className = "", onClick = () => {}}: Props) => {
    return (
        <button className={`${className} px-[32px] py-[16px] rounded-2xl text-[16px]`} onClick={onClick}>{children}</button>
    )
}

export default Button