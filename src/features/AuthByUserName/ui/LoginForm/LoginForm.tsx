import {classNames} from "shared/lib/classNames/classNames";
import * as s from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(s.login_form, {}, [className])}>
            <Input type="text" placeholder={t('Введите username:')}/>
            <Input type="text" placeholder={t('Введите пароль:')}/>
            <Button>
                {t('Войти')}
            </Button>
        </div>
    );
};

