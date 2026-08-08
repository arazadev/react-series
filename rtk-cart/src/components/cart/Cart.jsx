import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, clearCart } from "./cartSlice";

const Cart = () => {

  // Used to dispatch cart actions.
  const dispatch = useDispatch();

  // Get the current cart from the Redux store.
  const cart = useSelector((state) => state.cart.cart);

  // Calculate the total number of products in the cart.
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of all products.
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div
      className="
max-w-6xl
mx-auto
mt-10
p-6
bg-gray-900
rounded-xl
text-white
"
    >
      <h1
        className="
text-3xl
font-bold
mb-6
"
      >
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (

        // Display this message when the cart has no products.
        <p className="text-gray-400">Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="
flex
justify-between
items-center
bg-gray-800
p-4
rounded-lg
mb-3
"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>

              <p className="text-gray-300">
                PKR {item.price} × {item.quantity}
              </p>
            </div>

            {/* Decrease the product quantity or remove it. */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="
bg-red-600
hover:bg-red-700
px-4
py-2
rounded-lg
"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr className="my-5 border-gray-700" />

      {/* Display the total quantity of products. */}
      <p className="text-lg">
        Total Items:
        <strong> {totalItems}</strong>
      </p>

      {/* Display the total price of all products. */}
      <p className="text-lg">
        Total Price:
        <strong> PKR {totalPrice.toLocaleString()}</strong>
      </p>

      {/* Empty the entire cart. */}
      <button
        onClick={() => dispatch(clearCart())}
        className="
mt-5
bg-orange-500
hover:bg-orange-600
px-5
py-2
rounded-lg
"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
