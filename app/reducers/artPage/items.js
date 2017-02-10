import * as ActionTypes from '../../actions/artPage';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_ENTRY_LIST:
            return action.items
        default:
            return state;
    }
}
