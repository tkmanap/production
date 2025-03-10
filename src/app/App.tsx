import './styles/index.scss'
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";
import {Header} from "widgets/Header";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Header />
            <AppRouter/>
        </div>
    )
}

export default App;