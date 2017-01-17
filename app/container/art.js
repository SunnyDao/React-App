import React, {Component} from 'react';

class Art extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Art.propTypes = {
}

function mapStateToProps(state) {
  return {
    todos: state.art
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ArtActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Art)