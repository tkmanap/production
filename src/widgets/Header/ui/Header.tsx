import React from "react";
import * as s from './Header.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";


interface HeaderProps {
    className?: string;
}

const Header = ({className}: HeaderProps) => {
    const {t} = useTranslation('translate')
    return (
        <div className={classNames(s.header, {}, [className])}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
                to={'/'}>
                {t('Главная')}
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={'/about'}>
                {t('О нас')}
            </AppLink>
        </div>
    );
};

export default Header;