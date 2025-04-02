import {classNames} from "shared/lib/classNames/classNames";
import * as s from './Input.module.scss'
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...OtherProps
    } = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)

    }
    return (
        <div className={classNames(s.input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...OtherProps}
            />
        </div>
    );
});