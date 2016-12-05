import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className="pic"></div>
                <div className="con">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.con}</p>
                    <p><span>{this.props.date}</span></p>
                </div>
            </div>
        );
    }
}

const propTypes={
    item:PropType.object.isRequired
}

ListItem.propTypes = propTypes;

export default ListItem;