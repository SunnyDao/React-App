import React, {Component} from 'react';
import ListItem from './item';

class List extends Component {
    function({items}){
        items = items.map(
            item=>(
                <ListItem
                    item={item}
                    key={item.id}
                />
            )
        )
    }
    render() {
        return (
            <div className="list-component">
                {items}
            </div>
        );
    }
}

export default List;