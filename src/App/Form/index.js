import { useState } from 'react';
import arrowsLight from './arrowsLight.png';
import arrowsDark from './arrowsDark.png';
import { FormSection, Interactions, Input, Select, FormText, SubmitButton, SwapButton } from "./styled";

const Form = ({ calculateResult, theme, currencies }) => {

    const [firstInputValue, setFirstInputValue] = useState("");
    const [firstSelectValue, setFirstSelectValue] = useState("PLN");
    const [secondSelectValue, setSecondSelectValue] = useState("EUR");

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
                    {currencies && currencies.map(currency =>
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.short}
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
                    {currencies && currencies.map(currency =>
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.short}
                        </option>
                    )}
                </Select>
            </Interactions>
            <SubmitButton>Przelicz</SubmitButton >
        </FormSection>
    );
};

export default Form;