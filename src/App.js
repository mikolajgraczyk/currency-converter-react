import { useState, useEffect } from 'react';
import Section from './Section';
import Form from './Section/Form';
import Result from './Section/Result';
import Header from './Section/Header';
import ThemeSwitch from './Section/ThemeSwitch';
import DateAndTime from './Section/DateAndTime';
import { currencies } from './utils/currencies';

function App() {

  const [result, setResult] = useState();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  localStorage.setItem("theme", theme);


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


  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Section
      theme={theme}
      DateAndTime={
        <DateAndTime
        />
      }
      Result={
        <Result
          result={result}
        />
      }
      result={result}
    >
      <ThemeSwitch
        themeToggle={themeToggle}
        theme={theme}
      />
      <Header title="Przelicznik walut" />
      <Form
        calculateResult={calculateResult}
        theme={theme}
      />
    </Section>
  );
};

export default App;
