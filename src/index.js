import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from 'react-router';
import {BrowserRouter, Route} from "react-router-dom";
import './index.scss';
import App from './App';
import Main from './main';
import reportWebVitals from './reportWebVitals';


fetch("api/courses/all.json")
    .then(resp => resp.json())
    .then(menuList => {
        ReactDOM.render(
            // 执行两次 render 的原因 https://react.docschina.org/docs/strict-mode.html
            <React.StrictMode>
                <Main menu={menuList}/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
