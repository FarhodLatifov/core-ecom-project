import { Wrapper, ItemCart, Loader } from "../imports"
import { Link } from "react-router"
import { type RootState } from "../store/store"
import { useSelector } from "react-redux"
import { useMemo } from "react"

const NewArrivals = () => {
  const products = useSelector((state: RootState) => state.product.products)
  const loading = useSelector((state: RootState) => state.product.loading)

  const newArrivals = useMemo(() => products.slice(0, 4), [products])

  if (loading === "loading") {
    return <Loader />
  }

  return (
    <section>
      <Wrapper className="py-[80px] px-6 md:px-0">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-[#111827] text-[30px] font-bold">New Arrivals</h2>
            <p className="text-[#6B7280] text-[16px]">
              The latest additions to our store
            </p>
          </div>

          <Link to="/products" className="text-[16px] text-[#197FE6] self-start sm:self-end">
            View All
          </Link>
        </div>

        <div className="grid mt-[32px] md:mt-[48px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((item) => (
            <ItemCart key={item.id} products={item} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default NewArrivals
