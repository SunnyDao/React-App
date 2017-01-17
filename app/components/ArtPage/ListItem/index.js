import React, {PropTypes} from 'react';
import marked from 'marked';
import './style.less';

const propTypes = {
    item:PropTypes.object.isRequired,
    onClick:PropTypes.func.isRequired
}

function ListItem({item,onClick}) {
    let formatTime = '未知时间';
    if (item.time) {
        formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }
    return (
        <div className="listItem" onClick={onClick}>
            <div className="pic"></div>
            <div className="con">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p className="time"><span>{formatTime}</span></p>
            </div>
        </div>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;