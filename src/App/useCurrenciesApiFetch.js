import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrenciesApiFetch = () => {
    const [currencies, setCurrenciec] = useState();
    const [rateDate, setRateDate] = useState();

    useEffect(() => {
        axios.get("currency-converter-react/latest.json")
            .then(currenciesApi => {
                const currencies = Object.keys(currenciesApi.rates).map(key => {
                    return {
                        short: key,
                        rate: currenciesApi.rates[key]
                    }
                });
                const date = currenciesApi.date;

                setRateDate(date);
                setCurrenciec(currencies);
            })
            .catch((error) => console.error(error));
    }, []);

    return { currencies, rateDate };
}