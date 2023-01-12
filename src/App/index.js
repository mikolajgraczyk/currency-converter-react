import { useState, useEffect } from 'react';
import Form from './Form';
import Result from './Result';
import Header from './Header';
import ThemeSwitch from './ThemeSwitch';
import DateAndTime from './DateAndTime';
import { currencies } from '../utils/currencies';
import { Container, Converter, Aside, ResultSection } from './styled';

function App() {
    const [result, setResult] = useState();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const calculateResult = (firstSelectValue, secondSelectValue, firstInputValue) => {
        const firstSelectedCurrency = currencies.find(({ short }) => short === firstSelectValue);
        const secondSelectedCurrency = currencies.find(({ short }) => short === secondSelectValue);
        const rate = secondSelectedCurrency.rate / firstSelectedCurrency.rate;

        setResult({
            firstInputValue,
            fromCurrency: firstSelectedCurrency.short,
            calculated: (rate * firstInputValue).toFixed(2),
            toCurrency: secondSelectedCurrency.short,
        })
    }


    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const isLightTheme = theme === "light";

    return (
        <Container>
            <Converter light={isLightTheme}>
                <ThemeSwitch
                    themeToggle={themeToggle}
                    theme={theme}
                />
                <Header title="Przelicznik walut" />
                <Form
                    calculateResult={calculateResult}
                    theme={theme}
                />
            </Converter>
            <Aside light={isLightTheme}>
                <DateAndTime />
            </Aside>
            {result !== undefined && (
                <ResultSection light={isLightTheme}>
                    <Result result={result} />
                </ResultSection>
            )}
        </Container>
    );
};

export default App;