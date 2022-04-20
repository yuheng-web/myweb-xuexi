import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Main from "./pages/Main";
import CONSTANTS from "./config";

const appName = CONSTANTS.root;

export default function App(props) {

    let [menuList, setMenuList] = useState([{"key": "home", "name": "首页"}]);

    useEffect(
        () =>
            fetch(`${appName}/api/courses/all.json`)
                .then(resp => resp.json())
                .then(result => setMenuList(result)),
        []
    );

    return (
        <Routes>
            <Route path={appName} element={<AppLayout menu={menuList}/>}>
                <Route path=":pageId" element={<Main/>}/>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}
