import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/CartSlice";
import productSlice from "../slices/ProductSlice";
import FilterByCategory from "../slices/FilterByCategorySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    filterByCategory: FilterByCategory,
  },
  devTools: true,
});

// Типизация для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
