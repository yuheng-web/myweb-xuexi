import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Welcome from "./pages/welcome";
import Courses from "./components/courses";
import MainPage from "./pages/mainPage";


export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App menu={this.props.menu}/>}>
                        <Route index element={<Welcome/>}/>
                        <Route path=":clsId" element={<MainPage clsId={`clsId`}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
