type LoaderProps = {
  size?: number
}

const Loader = ({ size = 80 }: LoaderProps) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin mx-auto"
    />
  )
}

export default Loader