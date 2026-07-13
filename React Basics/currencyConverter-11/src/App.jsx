import { Input } from "./Components";
import { useState } from "react";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  // Stores user input amount and selected currencies
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  // Stores the calculated conversion result
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch exchange rates whenever the source currency changes
  const currencyInfo = useCurrencyInfo(from);

  // Creates dropdown options from available currencies
  const options = Object.keys(currencyInfo);

  // Swaps source and target currencies and their values
  const swap = () => {
    setFrom(to);
    setTo(from);

    // Keep the values meaningful after swapping
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Converts entered amount using selected currency exchange rate
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1649003515353-c58a239cf662?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-purple-100 rounded-md bg-purple-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;