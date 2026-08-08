import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../components/products/productsSlice";
import cartReducer from "../components/cart/cartSlice";

// Configure the Redux store and register all application reducers.
export const store = configureStore({
  reducer: {

    // Manages products and product search state.
    products: productsReducer,

    // Manages shopping cart state.
    cart: cartReducer,
  },
});