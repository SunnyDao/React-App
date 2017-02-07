import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import './index.less'

class Index extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <Sidebar />
                <div className="container">
                </div>
            </div>
        );
    }
}

export default Index;
