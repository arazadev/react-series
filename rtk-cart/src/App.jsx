import Products from "./components/products/Products";

import Cart from "./components/cart/Cart";

function App() {
  return (
    <>

      {/* Display the available products. */} 
      <Products /> 

      {/* Display the user's shopping cart. */}
      <Cart />
    </>
  );
}

export default App;
