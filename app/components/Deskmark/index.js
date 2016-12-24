import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor'
import ItemShowLayer from '../ItemShowLayer'

import './style.less';

export default class App extends React.Component {

    constructor(){
        super()
    }

    render() {
        const items= [
            {
                "id":"1",
                title:'hello',
                content:'# test markdown',
                time:'2016-12-22'
            },{
                "id":"2",
                title:'hello2',
                content:'# test markdown2',
                time:'2016-12-23'
            }
        ]
        return (
            <section className="deskmark-component">
            <nav className="navbar">
                <a className="navbar-brand" href="#">Deskmark App</a>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <CreateBar onClick={this.createItem} />
                        <List items={items}/>
                    </div>
                    <div className="col-md-9">
                        <ItemEditor item={items[0]}/>
                        <ItemShowLayer item={items[0]}/>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}
