import React, {PropTypes} from 'react';
import marked from 'marked';
import './style.less'

const propTypes = {
    item:PropTypes.object,
    onEdit:PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired
}

function ItemShowLayer({item,onEdit,onDelete}){
    if(!item || !item.id){
        return (
            <div className="item-layer-component">
                <div className="no-select">请选择左边列表里面的文章</div>
            </div>
        )
    }

    let content = marked(item.content);

    return(
        <div className="item-layer-component">
            <div className="control-area">
                <button className="btn btn-edit" onClick={()=>onEdit(item.id)}>编辑</button>
                <button className="btn btn-delet" onClick={()=>onDelete(item.id)}>删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-test">
                <div dangerouslySetInnerHTML={{__html:content}}></div>
            </div>
        </div>
    )
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;