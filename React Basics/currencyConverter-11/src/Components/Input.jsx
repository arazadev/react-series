import React, { useId } from "react";

function Input({
  // Text displayed above the amount input
  label,

  // Current amount value
  amount,

  // Callback when the amount changes
  onAmountChange,

  // Callback when the selected currency changes
  onCurrencyChange,

  // List of available currencies for the dropdown
  currencyOptions = [],

  // Currently selected currency
  selectCurrency = "usd",

  // Disable the amount input if true
  amountDisable = false,

  // Disable the currency dropdown if true
  currencyDisable = false,

  // Additional Tailwind classes passed from the parent
  className = "",
}) {
  // Generates a unique id so the label is correctly linked
  // with the input for better accessibility.
  const amountInputId = useId();

  return (
    // Main container
    <div className={`bg-purple-100 p-3 rounded-lg text-sm flex ${className}`}>

      {/* Amount input section */}
      <div className="flex-1">
      
        {/* Clicking the label focuses the input */}
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            // Convert input value from string to number
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency selection section */}
      <div>
        <p className="text-black/40 mb-2">Currency Type</p>

        <select
          value={selectCurrency}
          onChange={(e) =>
            // Send the selected currency back to the parent
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-purple-200 cursor-pointer outline-none"
        >
          {/* Create an option for each available currency */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;