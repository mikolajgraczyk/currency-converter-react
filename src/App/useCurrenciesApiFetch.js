import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrenciesApiFetch = () => {
    const [currencies, setCurrencies] = useState();
    const [rateDate, setRateDate] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        axios.get('https://api.exchangerate.host/latest?BASE=PLN')
            .then(currenciesApi => {
                const currencies = Object.keys(currenciesApi.data.rates).map(key => {
                    return {
                        short: key,
                        rate: currenciesApi.data.rates[key],
                    }
                });
                const date = currenciesApi.data.date;

                setIsError(false);
                setCurrencies(currencies);
                setRateDate(date);
            })
            .catch((error) => {
                console.error(`Wystąpił błąd: ${error}`);
                setIsError(true);
            });
    }, []);

    return { currencies, rateDate, isError };
}