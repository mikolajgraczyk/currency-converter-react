import { useState } from 'react';
import Section from './Section';
import Form from './Section/Form';
import Result from './Section/Result';
import Header from './Section/Header';
import { currencies } from './utils/currencies';

function App() {

  const [result, setResult] = useState();

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

  return (
      <Section>
        <Header title="Przelicznik walut" />
        <Form
          calculateResult={calculateResult}
        />
        <Result
          result={result}
        />
      </Section>
  );
};

export default App;
