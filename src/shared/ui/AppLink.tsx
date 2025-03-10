import {classNames} from "shared/lib/classNames/classNames";
import * as s from './AppLink.module.scss'
import React from "react";
import {Link, LinkProps} from "react-router";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY
    } = props
    return (
        <Link to={to} className={classNames(s.AppLink, {}, [className, s[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;