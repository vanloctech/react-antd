import React, { Component } from 'react';
import {Layout, Breadcrumb, Row, Col} from 'antd';

const {Content} = Layout;

class AntContent extends Component {
    render() {
        return (
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0', background: '#fff'}}>
                    <Row>
                        <Col span={18} push={6}>
                            col-18 col-push-6
                        </Col>
                        <Col span={6} pull={18}>
                            col-6 col-pull-18
                        </Col>
                    </Row>
                    <Content style={{padding: '0 24px', minHeight: 280}}>Content</Content>
                </Layout>
            </Content>
        )
    }
}

export default AntContent;