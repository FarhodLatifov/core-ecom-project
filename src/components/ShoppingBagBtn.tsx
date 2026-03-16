import { ShoppingBag } from "lucide-react"
import { useSelector } from "react-redux"
import { type RootState } from "../store/store"
const ShoppingBagBtn = () => {
  const product = useSelector((state: RootState) => state.cart.value)
  const quantity = product.map(item => item.quantity).reduce((a,b) => a + b,0)
  console.log(quantity);
  
  return (
    <div className="relative">
      <div className={`bg-blue-500 absolute bottom-3 left-4 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs ${quantity === 0 ? "hidden" : ""}`}>{quantity}</div>
      <ShoppingBag />
    </div>
  )
}

export default ShoppingBagBtn