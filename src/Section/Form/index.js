import { currencies } from '../../utils/currencies';
import { useState } from 'react';
import arrowsLight from './arrowsLight.png';
import arrowsDark from './arrowsDark.png';
import './style.css';

const Form = ({ calculateResult, theme }) => {

    const [firstInputValue, setFirstInputValue] = useState("");
    const [firstSelectValue, setFirstSelectValue] = useState("PLN");
    const [secondSelectValue, setSecondSelectValue] = useState("USD");

    const switchSelectValues = (event) => {
        event.preventDefault();
        setFirstSelectValue(secondSelectValue);
        setSecondSelectValue(firstSelectValue);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(firstSelectValue, secondSelectValue, firstInputValue)
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
            <p className="form__switchButtonParagraph">
                <img 
                src={theme === "light" ? arrowsDark : arrowsLight} 
                alt="switch currencies button" 
                width="30px" 
                onClick={switchSelectValues}
                />
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