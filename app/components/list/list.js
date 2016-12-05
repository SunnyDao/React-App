import React, {Component} from 'react';
import ListItem from './item';

class List extends Component {
    
    render() {
        return (
            <div className="list-component">
                {items}
            </div>
        );
    }
}

export default List;