import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";

import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar";
import PageLoader from "widgets/PageLoader/PageLoader";


const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Header/>
                <div className={'content-wrapper'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App;