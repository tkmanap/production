import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router";
import {MainAsync} from "./pages/MainPage/Main.async";
import {AboutAsync} from "./pages/AboutPage/About.async";

const App = () => {
    return (
        <div className={'app'}>
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