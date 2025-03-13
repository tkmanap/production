import {classNames} from "shared/lib/classNames/classNames";
import * as s from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t} = useTranslation('translate')
    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={onToggle}
        >
            {t('lang')}
        </Button>
    );
};

export default LangSwitcher;