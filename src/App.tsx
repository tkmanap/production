import './styles/index.scss'
import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router";
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import {useTheme} from "./shared/theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>Home</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainAsync/>}/>
                    <Route path="about" element={<AboutAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;