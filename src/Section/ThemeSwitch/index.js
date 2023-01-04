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
        <button className="themeSwitch" onClick={themeToggle}>
            <img
                src={theme === "dark" ? lightSun : darkSun}
                alt="theme switch button"
                className="themeSwitch--image"
                style={theme === "light" ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}
            />
        </button>
    );
};

export default ThemeSwitch;