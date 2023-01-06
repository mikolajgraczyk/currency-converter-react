import "./style.css";

const Section = ({ children, theme, DateAndTime, Result, result }) => {
    return (
        <div className="container">
            <section className={theme === "light" ? "container__converter--light" : "container__converter"}>
                {children}
            </section>
            <section className={theme === "light" ? "container__aside--light" : "container__aside"}>
                {DateAndTime}
            </section>
            {result !== undefined &&
                <section className={theme === "light" ? "container__result--light" : "container__result"}>
                    {Result}
                </section>
            }
        </div>
    );
};

export default Section;