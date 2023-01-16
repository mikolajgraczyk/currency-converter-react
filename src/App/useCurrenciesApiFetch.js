import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrenciesApiFetch = () => {
    const [apiResponse, setApiResponse] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = () => {
            axios.get('https://api.exchangerate.host/latest?BASE=PLN')
                .then(currenciesApi => {
                    const currencies = Object.keys(currenciesApi.data.rates).map(key => {
                        return {
                            short: key,
                            rate: currenciesApi.data.rates[key],
                        }
                    });
                    const rateDate = currenciesApi.data.date;

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
        }
        setTimeout(fetchRates, 1000);
    }, []);
    
    return { apiResponse };
}