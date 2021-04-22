import React, {Component} from 'react';
import {Layout} from 'antd';
import Nav from './Nav';

const {Header} = Layout;

class AntHeader extends Component {
    render() {
        return (
            <Header className="header">
                <Nav/>
            </Header>
        )
    }
}

export default AntHeader;