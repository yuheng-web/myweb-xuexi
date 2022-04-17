import './App.scss';
import {Layout, Menu} from 'antd';
import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";

const {Header, Content, Footer} = Layout;

export default function App(props) {

    let params = useParams();
    let selectClsId = params.clsId === undefined ? 'home' : params.clsId;

    return (<div className="App">
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[`${selectClsId}`]}>
                    {
                        props.menu
                            .map(mi => (
                            <Menu.Item key={mi.key}>
                                <Link to={mi.key === 'home' ? "/" : mi.key}>{mi.name}</Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>

    </div>);

}
