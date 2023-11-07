import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrenciesApiFetch = () => {
  const [apiResponse, setApiResponse] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchRates = () => {
      axios
        .get(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_s3HPUzSUq9TAbPcMUyaTV5TYjjvBelJj5QiJKEgw&currencies=PLN%2CEUR%2CUSD%2CGBP%2CCHF&base_currency=PLN`
        )
        .then((currenciesApi) => {
          const response = currenciesApi.data;

          const rateDate = response.meta.last_updated_at;
          const currencies = Object.keys(response.data).map((key) => {
            return {
              short: key,
              rate: response.data[key].value,
            };
          });

          setApiResponse({
            status: "success",
            currencies,
            rateDate,
          });
        })
        .catch((error) => {
          console.error(`Wystąpił błąd: ${error}`);
          setApiResponse({
            status: "error",
          });
        });
    };
    setTimeout(fetchRates, 1000);
  }, []);

  return { apiResponse };
};
