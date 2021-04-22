import React from 'react';
import {Menu} from 'antd';

const {SubMenu} = Menu;

function handleClick(e) {
    console.log('click', e);
}

const Nav = () => (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Introduce</Menu.Item>
        <SubMenu title='Product'>
            <SubMenu title='Product 1'>
                <Menu.Item key="3.1.1">Sub product 1</Menu.Item>
                <Menu.Item key="3.1.2">Sub product 2</Menu.Item>
                <Menu.Item key="3.1.3">Sub product 3</Menu.Item>
            </SubMenu>
            <Menu.Item key="3.2">Product 2</Menu.Item>
            <Menu.Item key="3.3">Product 3</Menu.Item>
        </SubMenu>
        <SubMenu title='Price'>
            <SubMenu title='Price 1'>
                <Menu.Item key="4.1.1">Price 1.1</Menu.Item>
                <Menu.Item key="4.1.2">Price 1.2</Menu.Item>
                <Menu.Item key="4.1.3">Price 1.3</Menu.Item>
            </SubMenu>
            <SubMenu key='4.2' title='Price 2'>
                <SubMenu key="4.2.1" title="Price 2.1">
                    <Menu.Item key="4.2.1.1">Price 2.1.1</Menu.Item>
                    <Menu.Item key="4.2.1.2">Price 2.1.2</Menu.Item>
                    <Menu.Item key="4.2.1.3">Price 2.1.3</Menu.Item>
                </SubMenu>
                <Menu.Item key="4.2.1">Price 2.2</Menu.Item>
                <Menu.Item key="4.2.3">Price 2.3</Menu.Item>
            </SubMenu>
            <Menu.Item key="4.3">Price 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="5">News</Menu.Item>
        <SubMenu title='Document'>
            <SubMenu title='Document 1'>
                <Menu.Item key="6.1.1">Document 1.1</Menu.Item>
                <Menu.Item key="6.1.2">Document 2</Menu.Item>
                <Menu.Item key="6.1.3">Document 3</Menu.Item>
            </SubMenu>
            <SubMenu title='Document 2'>
                <SubMenu title="Document 2.1">
                    <Menu.Item key="6.2.1.1">Document 2.1.1</Menu.Item>
                    <Menu.Item key="6.2.1.2">Document 2.1.2</Menu.Item>
                    <Menu.Item key="6.2.1.3">Document 2.1.3</Menu.Item>
                </SubMenu>
                <Menu.Item key="6.2.1">Document 2.2</Menu.Item>
                <Menu.Item key="6.2.3">Document 2.3</Menu.Item>
            </SubMenu>
            <Menu.Item key="6.3">Document 3</Menu.Item>
        </SubMenu>
        <Menu.Item key="7">Contact</Menu.Item>
    </Menu>

);

export default Nav;