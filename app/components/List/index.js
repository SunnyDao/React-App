import React, {PropTypes} from 'react';
import ListItem from '../ListItem';

import './style.less'

const propTypes = {
    item:PropTypes.array.isRequired,
    onClick:PropTypes.func.isRequired
}

function List({items,onSelect}){
    const itemsCom = items.map(
        (item) => (
            <ListItem
                item={item}
                key={item.id}
                onClick={()=>onSelect(item.id)}
            />
        )
    )
    return (
        <div className="list-component">
            {itemsCom}
        </div>
    )
}

List.PropTypes = propTypes;

export default List;