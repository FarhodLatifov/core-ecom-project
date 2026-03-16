import { Wrapper } from "../imports"
import { useNavigate } from "react-router"

interface ICategory {
  id: number
  img: string
  title: string
  value: string
}

const categoryItems: ICategory[] = [
  { id: 8090, img: "/Electronics.svg", title: "Electronics", value: "electronics" },
  { id: 9080, img: "/Jewelry.svg", title: "Jewelry", value: "jewelery" },
  { id: 8191, img: "/Men's_Clothing.svg", title: "Men's clothing", value: "men's clothing" },
  { id: 9981, img: "/Women's_Clothing.svg", title: "Women's clothing", value: "women's clothing" },
]

const ShopByCategory = () => {
  const navigate = useNavigate()

  const handleClick = (value: string) => {
    navigate(`/products?category=${value}`)
  }

  return (
    <div className="bg-white">
      <Wrapper className="py-16 px-6 md:px-0">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl font-bold select-none text-[#111827]">Shop By Category</h2>
          <div className="w-20 h-1 bg-[#197FE6] mt-3 md:mt-4"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categoryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.value)}
              className="flex flex-col items-center select-none focus:outline-none rounded-2xl border border-gray-100 hover:border-gray-200 transition bg-[#F9FAFB] py-6"
            >
              <div className="p-6 md:p-10 bg-white rounded-2xl hover:bg-gray-50 transition duration-300 cursor-pointer w-full flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-20 h-20 md:w-32 md:h-32 object-contain" />
              </div>
              <p className="text-center mt-3 text-sm text-[#111827] font-bold px-3 leading-tight">
                {item.title.toUpperCase()}
              </p>
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default ShopByCategory
