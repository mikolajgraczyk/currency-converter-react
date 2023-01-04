import { useState } from 'react';
import Section from './Section';
import Form from './Section/Form';
import Result from './Section/Result';
import Header from './Section/Header';
import ThemeSwitch from './Section/ThemeSwitch';
import { currencies } from './utils/currencies';

function App() {

  const [result, setResult] = useState();
  const [theme, setTheme] = useState();

  const calculateResult = (firstSelectValue, secondSelectValue, firstInputValue) => {

    const firstSelectedCurrency = currencies.find(({ short }) => short === firstSelectValue);
    const secondSelectedCurrency = currencies.find(({ short }) => short === secondSelectValue);

    const setRate = secondSelectedCurrency.rate / firstSelectedCurrency.rate;

    setResult({
      firstInputValue,
      fromCurrency: firstSelectedCurrency.short,
      calculated: (setRate * firstInputValue).toFixed(2),
      toCurrency: secondSelectedCurrency.short,
    })
  }

  const themeInfo = (theme) => {
    setTheme(theme)
  };

  return (
    <Section
    theme={theme}
    >
      <ThemeSwitch
        themeInfo={themeInfo}
      />
      <Header title="Przelicznik walut" />
      <Form
        calculateResult={calculateResult}
        theme={theme}
      />
      <Result
        result={result}
      />
    </Section>
  );
};

export default App;
