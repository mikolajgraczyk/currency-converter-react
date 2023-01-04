import { useState } from "react";
import darkSun from "./darkSun.png"
import lightSun from "./lightSun.png"
import "./style.css";

const ThemeSwitch = ({ themeInfo }) => {

    const [theme, setTheme] = useState("dark");

    themeInfo(theme);

    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <img
            src={theme === "dark" ? lightSun : darkSun}
            alt="theme switch button"
            className="themeSwitch"
            onClick={themeToggle}
            style={theme === "light" ? { backgroundColor: 'white' } : { backgroundColor: 'black'}}
        />
    );
};

export default ThemeSwitch;