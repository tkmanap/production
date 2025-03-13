import './styles/index.scss'
import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";

import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar";




const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>...Loading</div>}>
                <Header/>
                <div className={'content_wrapper'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App;