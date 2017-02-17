import React,{PropTypes} from 'react';
import uuid from 'uuid';
import axios from 'axios';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor'
import ItemShowLayer from '../ItemShowLayer'

import './style.less';

const propTypes = {
    article: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default class Deskmark extends React.Component {

    constructor(props){
        super(props);
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

    componentDidMount(){
        const {article,actions}= this.props;
        actions.fetchEntryList('/mock/article/items.json')
    }

    render() {
        //const {items,selectedId,editing}=this.state;
        //const selected = selectedId && items.find(item => item.id === selectedId);//es6语法

        const {article,actions}=this.props;
        const {isEditing,idSelected} = article.editor;
        const items=article.items;
        const item = items.find(item=>item.id===idSelected);

        const containerBox = isEditing
        ?(
            <ItemEditor 
                item={idSelected}
                items={items}
                onSave={actions.artSaveItems}
                onCancel={this.cancelEdit}
            />
        )
        :(
            <ItemShowLayer 
                item={idSelected}
                onEdit={this.editItem}
                onDelete={this.deletItem}
            />
        );
        return (
            <div className="ArtComponents">
                <div className="row">
                    <div className="col-md-3">
                        <CreateBar onClick={actions.artCreateItem} />
                        <List 
                            items={items}
                            onSelect={this.selectItem}
                        />
                    </div>
                    <div className="col-md-9">
                        {containerBox}
                    </div>
                </div>
            </div>
        );
    }
}
