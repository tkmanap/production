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
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat nihil perspiciatis quas, qui
                ratione voluptates. Alias eius error molestiae, odit quisquam reprehenderit suscipit! Enim esse impedit
                magnam suscipit voluptate!
            </Modal>
        </div>
    );
};

export default Header;