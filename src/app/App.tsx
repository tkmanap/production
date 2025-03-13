import './styles/index.scss'
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";

import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar";


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header/>
            <div className={'content_wrapper'}>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App;