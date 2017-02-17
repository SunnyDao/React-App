import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import './style.less';

function Main(props) {
    return (
        <div>
            <div className="header">
                <div className="nav-header">
                    <a href="" className="logo">ReactApp</a>
                </div>
                <div className="nav-body">
                    <nav>
                        <IndexLink to="/" activeClassName="active">首页</IndexLink>
                        <Link to="/article" activeClassName="active">文章</Link>
                        <Link to="/counter" activeClassName="active">图书</Link>
                        <Link to="/about" activeClassName="active">关于我</Link>
                    </nav>
                </div>
                <div className="nav-footer">
                    <div className="login">登录</div>
                </div>
            </div>
            <div className="containers">
                {/* this will render the child routes */}
                {React.cloneElement(props.children, props)}
            </div>
        </div>
    )
}
Main.propTypes = {
    children: PropTypes.any.isRequired
};

export default Main;
