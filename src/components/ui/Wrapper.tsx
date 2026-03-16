import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
  className: string
}
const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={`md:px-[72px] ${className}`}>{children}</div>
  )
}

export default Wrapper