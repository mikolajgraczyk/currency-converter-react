import { useState } from "react";
import darkSun from "./darkSun.png";
import lightSun from "./lightSun.png";
import { Switch, SwitchImage } from "./styled";

const ThemeSwitch = ({ themeToggle, theme }) => {

    return (
        <Switch onClick={themeToggle}>
            <SwitchImage
                light={theme === "light"}
                src={theme === "dark" ? lightSun : darkSun}
                alt="theme switch button"
            />
        </Switch>
    );
};

export default ThemeSwitch;