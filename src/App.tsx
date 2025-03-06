import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router";
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";
import './styles/index.scss'
import {useTheme} from "./shared/theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
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