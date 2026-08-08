import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../cart/cartSlice";

import { setSearch } from "./productsSlice";

const Products = () => {

  // Used to dispatch Redux actions.
  const dispatch = useDispatch();

  // Get products and search text from the Redux store.
  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.products.search);

  // Filter products based on the user's search input.
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-900 rounded-xl text-white">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ Products</h1>

      {/* Update the search value in Redux whenever the user types. */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="
          w-full
          p-3
          mb-6
          rounded-lg
          text-grey
          outline-none
        "
      />

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
      "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="
          bg-gray-800
          p-5
          rounded-xl
          shadow-lg
          hover:-translate-y-1
          transition
          "
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>

              <p className="text-gray-300 my-3">
                PKR {product.price.toLocaleString()}
              </p>

              {/* Add the selected product to the cart. */}
              <button
                onClick={() => dispatch(addToCart(product))}
                className="
            bg-green-600
            hover:bg-green-700
            px-4
            py-2
            rounded-lg
            "
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (

          // Show this message when no product matches the search.
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
