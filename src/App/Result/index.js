const Result = ({ result }) => (
    <div>
        {result !== undefined &&
            <>
                {result.firstInputValue} {result.fromCurrency} = <strong>{result.calculated}</strong>&nbsp;{result.toCurrency}
            </>
        }
    </div>
);

export default Result;