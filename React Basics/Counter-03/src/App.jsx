import { useState } from "react";

function App() {
  // State to store the current counter value.
  // Starts from 0.
  const [count, setCount] = useState(0);

  // Increases the counter by 1.
  // Using the functional update ensures we always
  // get the latest state value.
  const incValue = () => {
    /*
      Functional updates are applied one after another.
      Each updater receives the latest state, so every
      call builds on the result of the previous one.  
    */
    setCount((prev) => prev + 1);
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);
    // setCount(prev => prev + 1);

    /*
      Each call uses the `count` value from the current
      render. Since all calls use the same value, they
      all set the state to the same result.
    */

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  /*
  // Alternative approach:
  // Prevent increasing beyond 20 by checking
  // the value inside the function instead of
  // disabling the button.

  const incValue = () => {
    if (count <= 19)
      setCount(prev => prev + 1);
  }

  // Alternative approach:
  // Prevent decreasing below 0 inside the function.

  const decValue = () => {
    if (count >= 1) {
      setCount(prev => prev - 1);
    }
  }
  */

  // Decreases the counter by 1.
  // The button is disabled at 0, so this function
  // will only run when decrementing is allowed.
  const decValue = () => {
    setCount((prev) => prev - 1);
  };

  // Resets the counter back to its initial value.
  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count Value: {count}</h2>

      {/* Disable Increase button when the counter reaches 20 */}
      <button onClick={incValue} disabled={count === 20}>
        Increase
      </button>

      {/* Disable Decrease button when the counter reaches 0 */}
      <button onClick={decValue} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;
