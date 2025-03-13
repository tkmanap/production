import React from "react";
import * as s from './ThemeSwitcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme, Theme} from "app/providers/ThemeProvider";

import LightIcon from 'shared/assets/sun.svg'
import DarkIcon from 'shared/assets/moon.svg'

import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    const Icon = theme === Theme.DARK ? DarkIcon : LightIcon;

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(s.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <Icon className={s.theme__logo}/>
        </Button>
    );
};

export default ThemeSwitcher;