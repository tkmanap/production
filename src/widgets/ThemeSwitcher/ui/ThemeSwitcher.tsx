import React from "react";
import {useTheme, Theme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/sun.svg'
import DarkIcon from 'shared/assets/moon.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme()
    const Icon = theme === Theme.DARK ? DarkIcon : LightIcon;

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            <Icon className={'img'}/>
        </Button>
    );
};

export default ThemeSwitcher;