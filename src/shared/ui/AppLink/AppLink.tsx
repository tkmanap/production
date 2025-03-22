import React from "react";
import * as s from './AppLink.module.scss'
import {Link, LinkProps} from "react-router";
import {classNames} from "shared/lib/classNames/classNames";

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
        <Link to={to} className={classNames(s.app_link, {}, [className, s[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;