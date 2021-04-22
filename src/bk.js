import React from 'react';
// import {  Layout, Menu, Breadcrumb  } from "antd";

// const { Header, Content, Footer } = Layout;
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function handleClick(e) {
    console.log('click', e);
}

const Nav = () => (
    <Layout>
        <Header className="header">
            {/*<div className="logo" />*/}
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Introduce</Menu.Item>
                <SubMenu title='Product'>
                    <SubMenu title='Product 1'>
                        {/*<Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">*/}
                        <Menu.Item key="3.1.1">Sub product 1</Menu.Item>
                        <Menu.Item key="3.1.2">Sub product 2</Menu.Item>
                        <Menu.Item key="3.1.3">Sub product 3</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3.2">Product 2</Menu.Item>
                    <Menu.Item key="3.3">Product 3</Menu.Item>
                </SubMenu>
                <SubMenu title='Price'>
                    <SubMenu title='Price 1'>
                        {/*<Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">*/}
                        <Menu.Item key="4.1.1">Sub price 1</Menu.Item>
                        <Menu.Item key="4.1.2">Sub price 2</Menu.Item>
                        <Menu.Item key="4.1.3">Sub price 3</Menu.Item>
                    </SubMenu>
                    <SubMenu title='Price 2'>
                        <SubMenu key="sub1" title="Price 2.1">
                            <Menu.Item key="4.2.1.1">Price 2.1.1</Menu.Item>
                            <Menu.Item key="4.2.1.2">Price 2.1.2</Menu.Item>
                            <Menu.Item key="4.2.1.3">Price 2.1.3</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4.2.1">Price 2.2</Menu.Item>
                        <Menu.Item key="3.2.3">Price 2.3</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4.3">Price 3</Menu.Item>
                </SubMenu>
                <Menu.Item key="4">News</Menu.Item>
                <SubMenu title='hihi'>
                    <SubMenu title='haha'>
                        {/*<Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">*/}
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Iteom 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item mode="vertical" key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    {/*</Menu>*/}
                    {/*<Menu*/}
                    {/*    mode="inline"*/}
                    {/*    // mode="inline"*/}
                    {/*    defaultSelectedKeys={['1']}*/}
                    {/*    defaultOpenKeys={['sub1']}*/}
                    {/*    style={{ height: '100%' }}*/}
                    {/*>*/}
                    {/*    <SubMenu key="sub4-1" icon={<UserOutlined />} title="subnav 1">*/}
                    {/*        <Menu.Item key="sub4-1-1">option1</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-2">option2</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-3">option3</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-4">option4</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*    <SubMenu key="sub4-2" icon={<LaptopOutlined />} title="subnav 2">*/}
                    {/*        <Menu.Item key="sub4-1-5">option5</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-6">option6</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-7">option7</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-8">option8</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*    <SubMenu key="sub4-3" icon={<NotificationOutlined />} title="subnav 3">*/}
                    {/*        <Menu.Item key="sub4-1-9">option9</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-10">option10</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-11">option11</Menu.Item>*/}
                    {/*        <Menu.Item key="sub4-1-12">option12</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*</Menu>*/}
                </SubMenu>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background" style={{ padding: '24px 0', background: '#fff' }}>
                <Row>
                    <Col span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);

export default Nav;