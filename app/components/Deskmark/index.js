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
        this.cancelEdit = this.cancelEdit.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deletItem = this.deletItem.bind(this);
        this.createItem= this.createItem.bind(this);
        this.selectItem= this.selectItem.bind(this);
    };
    //创建文章
    createItem(){
        this.setState({
            selectedId:null,
            editing:true
        })
    }
    //选择文章
    selectItem(id){
        if(id === this.state.selectedId){
            return;
        }
        this.setState({
            selectedId:id,
            editing:false
        })
    }

    //保存文章
    saveItem(item){
        let items=this.state.items;
        if(!item.id){
            item.id=uuid.v4();
            item.time=new Date().getTime();
            items = [...items, item];
        }else{
            items = items.map(
                exist => (
                    exist.id === item.id
                    ? {...exist,...item,}
                    : exist
                )
            );
        }
        this.setState({
            items:items,
            selectedId: item.id,
            editing: false,
        })
    };
    //关闭创建文章
    cancelEdit() {
        this.setState({ editing: false });
    }
    //修改文章
    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true,
        });
    };
    //删除文章
    deletItem(){
        console.log(1)
    }

    

    render() {
        const {items,selectedId,editing}=this.state;
        const selected = selectedId && items.find(item => item.id === selectedId);//es6语法
        const containerBox = editing
        ?(
            <ItemEditor 
                item={selected}
                onSave={this.saveItem}
                onCancel={this.cancelEdit}
            />
        )
        :(
            <ItemShowLayer 
                item={selected}
                onEdit={this.editItem}
                onDelete={this.deletItem}
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
                        <List 
                            items={this.state.items}
                            onSelect={this.selectItem}
                        />
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
