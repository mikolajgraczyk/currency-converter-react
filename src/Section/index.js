import "./style.css";

const Section = ({ children, theme }) => {    
    return (
        <section 
        className={theme === "light" ? "container-light" : "container"}
        >
            {children}
        </section>
    );
};

export default Section;