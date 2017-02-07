import React, { Component } from 'react';
import './style.less';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav-header">
                    <a href="" className="logo">ReactApp</a>
                </div>
                <div className="nav-body">
                    <ul>
                        <li className="active">首页</li>
                        <li>文章</li>
                        <li>图书</li>
                        <li>用户</li>
                    </ul>
                </div>
                <div className="nav-footer">
                    <div className="login">登录</div>
                </div>
            </div>
        );
    }
}

export default Header;