import "./style.css";

const Result = ({ result }) => (
    <div className="result">
        {result !== undefined &&
            <>
                {result.firstInputValue} {result.fromCurrency} = <strong>{result.calculated}</strong> {result.toCurrency}
            </>
        }
    </div>
);

export default Result;