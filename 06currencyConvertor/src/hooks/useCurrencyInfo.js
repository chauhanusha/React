import { useEffect, useState } from "react";

const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data[currency]));
      console.log(data)
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;