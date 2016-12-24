import React, {PropTypes} from 'react';
import marked from 'marked';

const propTypes = {
    item:PropTypes.object.isRequired
}

function ListItem({item}) {
    //let content = marked(item.content);

    return (
        <div>
            <div className="pic"></div>
            <div className="con">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p><span>{item.time}</span></p>
            </div>
        </div>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;