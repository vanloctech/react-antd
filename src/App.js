// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AntHeader from './AntHeader'
import AntContent from './AntContent'
import AntFooter from './AntFooter'
import {Layout} from "antd";
import Nav from "./Nav";


function App() {
    return (
        <Layout>
            <AntHeader/>
            <AntContent/>
            <AntFooter/>
        </Layout>
    );
}

export default App;
