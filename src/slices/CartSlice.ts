import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

interface ICart {
  value: CartItem[]
}

const initialState: ICart = { value: [] }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.value.find(item => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.value.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const existing = state.value.find(item => item.id === action.payload)
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1
        } else {
          state.value = state.value.filter(item => item.id !== action.payload)
        }
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
  const item = state.value.find(i => i.id === action.payload.id)
  if (item) {
    item.quantity = action.payload.quantity
  }
},
    clearCart(state) {
      state.value = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
