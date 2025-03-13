import React, {ButtonHTMLAttributes} from "react";
import * as s from './Button.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

export enum ThemeButton{
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(s.Button, { [s[theme]]: !!theme }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};