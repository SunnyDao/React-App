import React, {PropTypes} from 'react';
import marked from 'marked';
import './style.less';

const propTypes = {
    item:PropTypes.object.isRequired
}

function ListItem({item}) {
    //let content = marked(item.content);

    return (
        <div className="listItem">
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