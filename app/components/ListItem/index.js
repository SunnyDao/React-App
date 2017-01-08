import React, {PropTypes} from 'react';
import marked from 'marked';
import './style.less';

const propTypes = {
    item:PropTypes.object.isRequired,
    onClick:PropTypes.func.isRequired
}

function ListItem({item,onClick}) {
    //let content = marked(item.content);
    if (item.time) {
        formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }
    return (
        <div className="listItem" onClick={onClick}>
            <div className="pic"></div>
            <div className="con">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p className="time"><span>{item.time}</span></p>
            </div>
        </div>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;