import { useState } from 'react';
import arrowsLight from './arrowsLight.png';
import arrowsDark from './arrowsDark.png';
import { FormSection, Interactions, Input, Select, FormText, SubmitButton, SwapButton, ErrorInfo } from "./styled";

const Form = ({ calculateResult, theme, apiResponse }) => {
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
        <>
            {apiResponse.status === "error" ?
                <FormSection error>
                    <ErrorInfo>Wystąpił błąd. Spróbuj ponownie później</ErrorInfo>
                </FormSection> :
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
                            {apiResponse.currencies && apiResponse.currencies.map(currency =>
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
                            {apiResponse.currencies && apiResponse.currencies.map(currency =>
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
            }
        </>
    );
};

export default Form;