import React, {PropTypes} from 'react';

const propTypes = {
    item:PropTypes.object.isRequired,
    onClick:PropTypes.func.isRequired
}

function ListItem({item}) {
    return (
        <div>
            <div className="pic"></div>
            <div className="con">
                <h2>{item.title}</h2>
                <p>{item.con}</p>
                <p><span>{item.date}</span></p>
            </div>
        </div>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;