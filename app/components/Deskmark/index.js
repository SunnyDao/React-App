import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor'
import ItemShowLayer from '../ItemShowLayer'

import './style.less';

export default class App extends React.Component {

    constructor(){
        super();
        this.state={
            items:[],
            selectedId:null,
            editing:false,
        }
        this.saveItem = this.saveItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.selectItem= this.selectItem.bind(this);
        this.createItem= this.createItem.bind(this);
    };
    saveItem(item){
        let items=this.state.items;

        item.id=uuid.v4();
        item.tiem=new Date().getTime();

        items= {...items,item};

        this.setState({
            items:items
        })
    };

    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true,
        });
    };

    selectItem(id){
        if(id === this.state.selectedId){
            return;
        }
        this.setState({
            selectedId:id,
            editing:false
        })
    }

    createItem(){
        this.setState({
            selectedId:null,
            editing:true
        })
    }

    render() {
        const {items,selectedId,editing}=this.state;
        const containerBox = editing
        ?(
            <ItemEditor 
                item={selectedId}
                onSave={this.saveItem}
            />
        )
        :(
            <ItemShowLayer 
                item={selectedId}
                onEdit={this.editItem}
            />
        );
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
                        {containerBox}
                    </div>
                </div>
            </div>
            </section>
        );
    }
}
