import './AppLayout.scss';
import {Layout, Menu} from 'antd';
import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import Singleton from "../utils/single";

let appName = Singleton.getInstance().appName

const {Header, Content, Footer} = Layout;

export default function AppLayout(props) {

    let params = useParams();
    let selectClsId = params.pageId === undefined ? 'home' : params.pageId;

    return (<div className="App">
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[`${selectClsId}`]}>
                    {
                        props.menu
                            .map(mi => (
                            <Menu.Item key={mi.key}>
                                <Link to={mi.key === 'home' ? `${appName}` : `${appName}/`+mi.key}> {mi.name}</Link>
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
