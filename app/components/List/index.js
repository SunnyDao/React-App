import React, {PropTypes} from 'react';
import ListItem from './ListItem';

const propTypes = {
    item:PropTypes.array.isRequired
}

function List({items}){
    const itemsCom = items.map(
        (item) => (
            <ListItem
                item={item}
                key={item.id}
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