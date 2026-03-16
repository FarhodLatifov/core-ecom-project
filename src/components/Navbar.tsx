import { Search, Menu, X } from "lucide-react"
import { Link } from "react-router"
import { Wrapper, ShoppingBagBtn } from "../imports"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="w-full border-b border-gray-200 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70">
      <Wrapper className="px-7">
        <nav className="flex justify-between items-center h-[65px]">
          <h2 className="text-2xl uppercase font-bold">
            core<span className="text-[#197FE6] text-3xl">.</span>
          </h2>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <ul className="hidden md:flex gap-6 items-center">
              <li>
                <Link to="/" className="text-[14px] hover:text-[#197FE6] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[14px] hover:text-[#197FE6] transition">
                  Products
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition">
                <Search size={18} />
              </button>

              <Link to="/cart" onClick={closeMenu}>
                <ShoppingBagBtn />
              </Link>
            </div>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-xl shadow-lg">
            <ul className="flex flex-col divide-y divide-gray-100">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-[15px] hover:bg-gray-50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-[15px] hover:bg-gray-50"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-[15px] hover:bg-gray-50"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Wrapper>
    </header>
  )
}

export default Navbar
