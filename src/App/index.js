import { useState, useEffect } from 'react';
import Form from './Form';
import Result from './Result';
import Header from './Header';
import ThemeSwitch from './ThemeSwitch';
import DateAndTime from './DateAndTime';
import LoadingScreen from './LoadingScreen';
import SourceInfo from './SourceInfo';
import { useCurrenciesApiFetch } from './useCurrenciesApiFetch';
import { Container, Converter, Aside, ResultSection } from './styled';

function App() {
    const [result, setResult] = useState();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [renderInterface, setRenderInterface] = useState(false);

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

    setTimeout(() => {
        setRenderInterface(true);
    }, 1000);

    const {
        currencies,
        rateDate,
        isError
    } = useCurrenciesApiFetch();

    return (
        <>
            <Container>
                <Converter light={isLightTheme}>
                    {!renderInterface ?
                        <LoadingScreen
                            loadingText={"Ładowanie kursów"}
                            theme={theme}
                        /> :
                        <>
                            <ThemeSwitch
                                themeToggle={themeToggle}
                                theme={theme}
                            />
                            <Header title={"Przelicznik walut"} />
                            <Form
                                calculateResult={calculateResult}
                                theme={theme}
                                currencies={currencies}
                                isError={isError}
                            />
                            <SourceInfo rateDate={rateDate}/>
                        </>
                    }
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
        </>
    );
};

export default App;