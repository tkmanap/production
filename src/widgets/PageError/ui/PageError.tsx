import {classNames} from "shared/lib/classNames/classNames";
import * as s from './PageError.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation('translate')
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(s.page_error, {}, [className])}>
            {t('Произошла непредвиденная ошибка ')}
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>{t('Обновит страницу')}</Button>
        </div>
    );
};

export default PageError;