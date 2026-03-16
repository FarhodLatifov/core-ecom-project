import { Navbar, Home, ProductCatalog, ShoppingCart,  Footer } from "./imports"
import { Routes, Route } from "react-router"
import { fetchProducts } from "./slices/ProductSlice"
import type { AppDispatch } from "./store/store"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="products" element={<ProductCatalog />}></Route>
        <Route path="cart" element={<ShoppingCart />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
