import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {en: {translations: {}}},
    })
    .then(() => console.log('i18n initialized'))
    .catch((err) => console.error('i18n init error', err));

export default i18n;