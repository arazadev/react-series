import { useEffect, useState } from "react";

export default function LoadMoreData() {
  // Stores loading state while fetching products from API
  const [loading, setLoading] = useState(false);

  // Stores all fetched products
  const [products, setProducts] = useState([]);

  // Keeps track of the current page (used to calculate skip value)
  const [count, setCount] = useState(0);

  // Disables the Load More button after loading 100 products
  const [disableLoadButton, setDisableLoadButton] = useState(false);

  // Fetch products from the API
  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      // Append newly fetched products to the existing list
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }

      // console.log(data);
    } catch (e) {
      // console.log(e);
      setLoading(false);
    }
  }

  // Fetch products whenever the page count changes
  useEffect(() => {
    fetchProducts();
  }, [count]);

  // Disable the button after loading all 100 products
  useEffect(() => {
    if (products && products.length === 100) {
      setDisableLoadButton(true);
    }
  }, [products]);

  // Show loader while API request is in progress
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex flex-col items-center gap-5">
          {/* Animated loading spinner */}
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="text-white text-xl font-semibold tracking-wide">
            Loading amazing products...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Product Gallery
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Explore our premium collection of products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Render all fetched products */}
          {products && products.length
            ? products.map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    bg-white/70
                    backdrop-blur-xl
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    border
                    border-white
                    hover:-translate-y-3
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >

                  {/* Product Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="
                        w-full
                        h-56
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-700
                      "
                    />

                    {/* Overlay effect on hover */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/40
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition
                      "
                    />

                  </div>

                  {/* Product Details */}
                  <div className="p-5">

                    {/* Product Title */}
                    <h2
                      className="
                        text-lg
                        font-bold
                        text-gray-800
                        line-clamp-2
                        group-hover:text-purple-600
                        transition
                      "
                    >
                      {item.title}
                    </h2>

                    <div className="mt-4 flex justify-between items-center">
                      {/* Reserved for additional product information */}
                    </div>

                  </div>

                </div>
              ))
            : null}

        </div>

        {/* Load More Button */}
        <div className="flex flex-col items-center mt-14">

          <button
            disabled={disableLoadButton}
            // Increase count to fetch the next batch of 20 products
            onClick={() => setCount(count + 1)}
            className={`
              relative
              px-10
              py-4
              rounded-full
              font-bold
              text-lg
              text-white
              overflow-hidden
              transition-all
              duration-300
              shadow-lg

              ${
                disableLoadButton
                  ? "bg-gray-400 cursor-not-allowed"
                  : `
                    bg-gradient-to-r
                    from-purple-600
                    to-blue-600
                    hover:scale-105
                    hover:shadow-purple-400/50
                  `
              }
            `}
          >
            Load More
          </button>

          {/* Display message after all products have been loaded */}
          {disableLoadButton ? (
            <p className="mt-5 text-red-500 font-semibold text-lg">
              🎉 You have explored all 100 products
            </p>
          ) : null}

        </div>

      </div>
    </div>
  );
}