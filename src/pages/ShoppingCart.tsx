import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store/store"
import { Button, Wrapper } from "../imports"
import { MoveRightIcon, X } from "lucide-react"
import { removeFromCart, updateQuantity, clearCart } from "../slices/CartSlice"
import { Link } from "react-router"

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch<AppDispatch>()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5
  const tax = 12
  const totalPrice = (subtotal + shipping + tax).toFixed(2)

  const handleClearCart = () => {
    alert("Ваш заказ принят!")
    dispatch(clearCart())
  }
  return (
    <div className="pt-[90px] pb-[60px] bg-[#f9fafb] px-4 md:px-0">
      <h3 className="md:px-[72px] text-3xl md:text-5xl font-bold mb-6 md:mb-10">Shopping Cart</h3>
      <Wrapper className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">

        {/* Products List */}
        <div className="flex flex-col w-full gap-6 md:mr-5">
          {cart.length > 0 ? (
            cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between w-full border border-gray-200 py-4 md:py-5 px-4 rounded-2xl bg-white gap-4 sm:gap-6"
              >
                <div className="flex gap-4 items-center w-full sm:w-auto">
                  <img
                    className="h-20 w-20 rounded-2xl object-contain flex-shrink-0"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <h2 className="font-medium text-[#111827]">{item.title}</h2>
                    <p className="text-[#197FE6] font-bold">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e => dispatch(updateQuantity({ id: item.id, quantity: Number(e.currentTarget.value) }))}
                    className="bg-white text-center w-20 h-10 rounded-2xl border border-gray-300"
                  />

                  <Button
                    className="p-2 rounded-full hover:bg-red-100 transition"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-10">Your cart is empty</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="p-6 md:w-[420px] lg:w-[520px] border border-gray-200 rounded-2xl bg-white flex flex-col gap-4 w-full">
          <h3 className="text-[#111827] font-medium text-2xl">Order Summary</h3>

          <div className="flex justify-between text-[#4B5563] border-b border-gray-200 py-2">
            <p>Subtotal</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#4B5563] border-b border-gray-200 py-2">
            <p>Shipping estimate</p>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between text-[#4B5563] border-b border-gray-200 py-2">
            <p>Tax estimate</p>
            <span>${tax}</span>
          </div>
          <div className="flex justify-between font-bold text-[#111827] py-2">
            <p>Order total</p>
            <span>${totalPrice}</span>
          </div>

          <Button className="w-full bg-[#197FE6] text-white py-3 rounded-lg hover:bg-blue-700 transition" onClick={handleClearCart}>
            Checkout
          </Button>
          <Link to={"/products"}>
            <div className="flex justify-center items-center gap-2 mt-4 text-[#197FE6] cursor-pointer">
              or <span className="flex items-center gap-1">Continue Shopping <MoveRightIcon size={16} /></span>
            </div>
          </Link>
        </div>

      </Wrapper>
    </div>
  )
}

export default ShoppingCart
