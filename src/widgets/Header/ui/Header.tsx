import React, {useCallback, useState} from "react";
import * as s from './Header.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";


interface HeaderProps {
    className?: string;
}

const Header = ({className}: HeaderProps) => {
    const {t} = useTranslation('translate')
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal(prevState => !prevState)
    }, [])
    return (
        <div className={classNames(s.header, {}, [className])}>
            <Button
                theme={ThemeButton.PRIMARY}
                className={s.header__btn}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('lorem')}
            </Modal>
        </div>
    );
};

export default Header;