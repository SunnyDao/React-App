import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from '../../actions/artPage';
import ArtComponent from '../../components/ArtPage/Deskmark';

const mapStateToProps = (state) => {
    return {
        article: state.article
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(actionCreator, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtComponent)
