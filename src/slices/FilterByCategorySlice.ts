import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "./ProductSlice"

interface IFiltered {
  filteredProducts: Product[]
}

interface FilterPayload {
  products: Product[]
  filterValue: string
}

const initialState: IFiltered = {
  filteredProducts: []
}

const filterByCategorySlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {
    filterByCategory(state, action: PayloadAction<FilterPayload>) {
      const { products, filterValue } = action.payload
      const normalizedValue = filterValue.toLowerCase()
      state.filteredProducts = products.filter(product =>
        product.category.toLowerCase() === normalizedValue
      )
    }
  }
})

export const { filterByCategory } = filterByCategorySlice.actions
export default filterByCategorySlice.reducer
