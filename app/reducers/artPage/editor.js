import * as ActionTypes from '../../actions/artPage';

const initialEditorState = {
    idSelected: null,
    isEditing: false,
}

export default function editor(state = initialEditorState, action) {
    switch (action.type) {
        case ActionTypes.ART_CREATE_ITEM:
            return Object.assign({},state,{idSelected:null,isEditing:true})
        case ActionTypes.ART_SAVE_ITEM:
            return Object.assign({},state,{idSelected:action.id,isEditing:false})
        default:
            return state;
    }
}
