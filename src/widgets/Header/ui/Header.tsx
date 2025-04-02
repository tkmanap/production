import React, {useCallback, useState} from "react";
import * as s from './Header.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUserName";


interface HeaderProps {
    className?: string;
}

const Header = ({className}: HeaderProps) => {
    const {t} = useTranslation('translate')
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    return (
        <div className={classNames(s.header, {}, [className])}>
            <Button
                theme={ThemeButton.PRIMARY}
                className={s.header__btn}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default Header;