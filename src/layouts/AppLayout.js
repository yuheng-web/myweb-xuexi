import './AppLayout.scss';
import {Layout, Menu} from 'antd';
import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import CONSTANTS from "../config";

const appName = CONSTANTS.root;

const {Header, Content, Footer} = Layout;

export default function AppLayout(props) {

    let params = useParams();
    return (<div className="App">
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]} selectedKeys={[params.pageId]}>
                    <Menu.Item key="home">
                        <Link to={`${appName}`}>
                            <div className="logo"></div>
                        </Link>
                    </Menu.Item>
                    {props.menu.map(mi => (
                        <Menu.Item key={mi.key}>
                            <Link to={`${appName}/${mi.key}`}> {mi.name}</Link>
                        </Menu.Item>
                    ))}
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
