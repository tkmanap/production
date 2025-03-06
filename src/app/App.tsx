import './styles/index.scss'
import React from 'react';
import {Link} from "react-router";
import {classNames} from "shared/lib/classNames/classNames";


import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>Home</Link>
            <AppRouter/>
        </div>
    )
}

export default App;