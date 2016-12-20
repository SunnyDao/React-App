import marked from 'marked';

const propTypes = {
    item:PropTypes.object
}

function ItemShowLayer({item}){
    if(!item || !item.id){
        return (
            <div className="item-layer-component">
                <div className="no-select">请选择左边列表里面的文章</div>
            </div>
        )
    }

    let content = marked(itme.content);

    retunr(
        <div className="item-layer-component">
            <div className="control-area">
                <button className="btn btn-edit">编辑</button>
                <button className="btn btn-delet">删除</button>
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