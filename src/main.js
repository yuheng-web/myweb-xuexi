import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import App from "./App";
import Welcome from "./pages/welcome";
import MainPage from "./pages/mainPage";


export default function Main(props) {

    let [menuList, setMenuList] = useState([{"key": "home", "name": "首页"}]);

    useEffect(
        () =>
            fetch("api/courses/all.json")
                .then(resp => resp.json())
                .then(result => setMenuList(result)),
        []
    );

    return (
        <Routes>
            <Route path="/" element={<App menu={menuList}/>}>
                <Route index element={<Welcome/>}/>
                <Route path=":clsId" element={<MainPage/>}/>
            </Route>
        </Routes>
    );
}
