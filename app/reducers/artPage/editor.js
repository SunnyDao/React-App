import * as ActionTypes from '../../actions/artPage';

const initialEditorState = {
    idSelected: null,
    isEditing: false,
}

export default function editor(state = initialEditorState, action) {
    switch (action.type) {
        case ActionTypes.ART_CREATE_ITEM:
            console.log(Object.assign({},state,{idSelected:null,isEditing:true}))
            return Object.assign({},state,{idSelected:null,isEditing:true})
        default:
            return state;
    }
}
