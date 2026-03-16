import { useDispatch } from "react-redux"
import { Button } from "../imports"
import type { AppDispatch } from "../store/store"
import { addToCart } from "../slices/CartSlice"

interface Item {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

type Props = {
    products: Item
}


const ItemCart = ({ products: item }: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    return (

        <div
            key={item.id}
            className="p-[16px] bg-white rounded-2xl shadow-sm hover:shadow-md transition"
        >

            <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-contain"
            />

            <h3 className="text-[#111827] text-[14px] font-medium mt-[16px] mb-[8px] line-clamp-2">
                {item.title}
            </h3>

            <div className="flex justify-between items-center">
                <p className="text-[18px] text-[#197fe6] font-bold">
                    ${item.price}
                </p>

                <div>
                    ⭐{item.rating.rate} ({item.rating.count})
                </div>
            </div>

            <Button
                className="border-2 border-gray-200 py-2 w-full mt-[16px]
                    hover:bg-black hover:text-white hover:border-black
                    transition duration-200"
                onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
            >
                Add to Cart 
            </Button>

        </div>

    )
}

export default ItemCart