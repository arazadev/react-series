import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // Fetch exchange rates whenever the selected base currency changes
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;