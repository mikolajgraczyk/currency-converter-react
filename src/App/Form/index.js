import { currencies } from '../../utils/currencies';
import { useState } from 'react';
import arrowsLight from './arrowsLight.png';
import arrowsDark from './arrowsDark.png';
import { FormSection, Interactions, Input, Select, FormText, SubmitButton, SwapButton } from "./styled";

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
        <FormSection onSubmit={onFormSubmit}>
            <FormText>Wybierz pierwszą walutę:</FormText>
            <Interactions>
                <Input
                    type="number"
                    step="0.01"
                    min={0.1}

                    onChange={({ target }) => setFirstInputValue(target.value)}
                    value={firstInputValue}
                    placeholder="Wpisz kwotę"
                    required
                />
                <Select
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
                </Select>
            </Interactions>
            <SwapButton onClick={switchSelectValues}>
                <img
                    src={theme === "light" ? arrowsDark : arrowsLight}
                    alt="switch currencies button"
                    width="30px"
                />
            </SwapButton>
            <FormText>Wybierz drugą walutę:</FormText>
            <Interactions>
                <Select
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
                </Select>
            </Interactions>
            <SubmitButton>Przelicz</SubmitButton >
        </FormSection>
    );
};

export default Form;