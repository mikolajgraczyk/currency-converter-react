import { currencies } from '../../utils/currencies';
import { useState } from 'react';
import './style.css';

const Form = ({ calculateResult }) => {

    const [firstInputValue, setFirstInputValue] = useState("");

    const [firstSelectValue, setFirstSelectValue] = useState("PLN");
    const [secondSelectValue, setSecondSelectValue] = useState("USD");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(firstSelectValue, secondSelectValue, firstInputValue)
        setFirstInputValue("")
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>

            <span className="form__text">Wybierz pierwszą walutę:</span>
            <p className="form__paragraph">
                <input
                    type="number"
                    className="form__input"
                    onChange={({ target }) => setFirstInputValue(target.value)}
                    value={firstInputValue}
                    placeholder="Wpisz kwotę"
                    required
                />
                <select
                    className="form__select"
                    onChange={({ target }) => setFirstSelectValue(target.value)}
                    value={firstSelectValue}
                >
                    {currencies.map(currency =>
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )}
                </select>
            </p>

            <span className="form__text">Wybierz drugą walutę:</span>
            <p className="form__paragraph">
                <select
                    className="form__select"
                    onChange={({ target }) => setSecondSelectValue(target.value)}
                    value={secondSelectValue}
                >
                    {currencies.map(currency =>
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )}
                </select>
            </p>

            <button className="form__button">Przelicz</button>

        </form>
    );
};

export default Form;