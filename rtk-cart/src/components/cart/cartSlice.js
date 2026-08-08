import { createSlice } from "@reduxjs/toolkit";

// Initial state for the shopping cart.
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    // Add a product to the cart.
    addToCart: (state, action) => {

      // Check whether the product already exists in the cart.
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {

        // If it exists, increase its quantity.
        existingItem.quantity += 1;
      } else {

        // Otherwise, add the product with an initial quantity of 1.
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Decrease the quantity of a product or remove it completely.
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      // Stop if the product does not exist in the cart.
      if (!item) return;

      if (item.quantity > 1) {

        // Decrease quantity when more than one item exists.
        item.quantity -= 1;
      } else {

        // Remove the product when its quantity reaches zero.
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },

    // Remove every product from the cart.
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Export cart actions for use in React components.
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the cart reducer for the Redux store.
export default cartSlice.reducer;
