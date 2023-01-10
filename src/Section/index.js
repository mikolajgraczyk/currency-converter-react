import { Container, Converter, Aside, ResultSection } from "./styled";

const Section = ({ children, theme, DateAndTime, Result, result }) => {
    return (
        <Container>
            <Converter light={theme === "light"}>
                {children}
            </Converter>
            <Aside light={theme === "light"}>
                {DateAndTime}
            </Aside>
            {result !== undefined &&
                <ResultSection light={theme === "light"}>
                    {Result}
                </ResultSection>
            }
        </Container>
    );
};

export default Section;