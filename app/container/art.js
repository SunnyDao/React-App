import React, {Component,PropTypes} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

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