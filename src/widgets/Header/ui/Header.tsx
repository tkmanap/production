import React from "react";
import * as s from './Header.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface HeaderProps {
    className?: string;
}

const Header = ({className}: HeaderProps) => {
    return (
        <div className={classNames(s.header, {}, [className])}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
                to={'/'}>
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={'/about'}>
                О нас
            </AppLink>
        </div>
    );
};

export default Header;