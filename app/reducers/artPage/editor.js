import * as ActionTypes from '../../actions/artPage';

const initialState = {
    selectedId: null,
    isEditing: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ART_CREATE_ITEM:
            return Object.assign({},state,{selectedId:null,isEditing:true})
        default:
            return state;
    }
}
