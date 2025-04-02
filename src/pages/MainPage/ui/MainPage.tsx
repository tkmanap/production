import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";

const MainPage = () => {
    const {t} = useTranslation('main')


    return (
        <div>
            {t('Главная страница')}
            <Input/>
        </div>
    );
};

export default MainPage;