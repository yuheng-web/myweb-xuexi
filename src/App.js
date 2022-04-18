import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Main from "./pages/Main";


export default function App(props) {

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
            <Route path="/" element={<AppLayout menu={menuList}/>}>
                <Route index element={<Home/>}/>
                <Route path=":pageId" element={<Main/>}>
                    {/*<Route index element={null}/>*/}
                </Route>
            </Route>
        </Routes>
    );
}
