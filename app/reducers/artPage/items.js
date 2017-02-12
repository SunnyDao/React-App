import * as ActionTypes from '../../actions/artPage';

const initialState = [];


export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ART_UPDATA_ITEMS:
            return action.items
        default:
            return state;
    }
}
