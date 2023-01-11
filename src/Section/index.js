import { Container, Converter, Aside, ResultSection } from "./styled";

const Section = ({ children, theme, DateAndTime, Result, result }) => {
    const isLightTheme = theme === "light";
    
    return (
        <Container>
            <Converter light={isLightTheme}>
                {children}
            </Converter>
            <Aside light={isLightTheme}>
                {DateAndTime}
            </Aside>
            {result !== undefined &&
                <ResultSection light={isLightTheme}>
                    {Result}
                </ResultSection>
            }
        </Container>
    );
};

export default Section;