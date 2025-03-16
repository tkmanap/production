import React from "react";
import i18n from "i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";


const LangSwitcher = () => {
    const {t} = useTranslation('translate')
    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t('lang')}
        </Button>
    );
};

export default LangSwitcher;