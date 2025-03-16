import {classNames} from "shared/lib/classNames/classNames";
import * as s from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation('translate')
    return (
       <div className={classNames(s.NotFoundPage, {}, [className])}>
           {t('Страница не найдено!')}
        </div>
    );
};

export default NotFoundPage;