import { createSlice } from "@reduxjs/toolkit";

// Initial state for the products section of the Redux store.
const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
    {
      id: 3,
      name: "Camera",
      price: 30000,
    },
    {
      id: 4,
      name: "Keyboard",
      price: 2000,
    },
    {
      id: 5,
      name: "Mouse",
      price: 1000,
    },
  ],

  // Stores the current search text.
  search: "",
};

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {

    // Update the product search text.
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    // Add a new product to the products array.
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    // Remove a product using its ID.
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

// Export actions so components can dispatch them.
export const { setSearch, addProduct, deleteProduct } = productsSlice.actions;

// Export the reducer to register it in the Redux store.
export default productsSlice.reducer;
