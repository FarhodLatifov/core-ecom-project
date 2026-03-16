import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { Wrapper, ItemCart, Loader } from "../imports"
import { ChevronRight } from "lucide-react"
import type { RootState } from "../store/store"
import type { Product } from "../slices/ProductSlice"
import { Link, useSearchParams } from "react-router"

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

const capitalizeFirstLetter = (value: string) => {
  if (!value) return ""
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchParams, setSearchParams] = useSearchParams()

  const products = useSelector((state: RootState) => state.product.products)
  const loading = useSelector((state: RootState) => state.product.loading)

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category")
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl)
    } else {
      setActiveCategory("all")
    }
  }, [searchParams])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    const nextParams = new URLSearchParams(searchParams)
    if (cat === "all") {
      nextParams.delete("category")
    } else {
      nextParams.set("category", cat)
    }
    setSearchParams(nextParams)
  }

  const visibleProducts: Product[] = useMemo(() => {
    if (activeCategory === "all") return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  if (loading === "loading") {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader />
      </div>
    )
  }

  return (
    <div className="pt-[90px] pb-[60px] px-4 md:px-0">
      <div className="md:px-[72px] flex items-center gap-2 mb-[20px] text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <ChevronRight size={16} />
        <p>
          {capitalizeFirstLetter(
            activeCategory === "all" ? "all products" : activeCategory
          )}
        </p>
      </div>

      <Wrapper className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 p-4 border border-gray-200 rounded-xl bg-white flex flex-col gap-4 my-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">Categories</h3>

          {categories.map((cat) => {
            const isActive = activeCategory === cat

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex items-center gap-2 text-left cursor-pointer transition ${
                  isActive
                    ? "text-[#197FE6]"
                    : "text-gray-700 hover:text-[#197FE6]"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </aside>

        <div className="flex-1 flex flex-col gap-6 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6">
            <h3 className="text-3xl md:text-4xl font-bold mt-2 md:mt-5">Products</h3>
            <p className="text-[15px] text-gray-500">
              Showing {visibleProducts.length} items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ItemCart key={product.id} products={product} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductCatalog
