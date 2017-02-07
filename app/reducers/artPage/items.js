import * as ActionTypes from '../../actions/artPage';

const initialState = {
  isFetching: false,
  data: [],
};

const { pendingOf, fulfilledOf } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case pendingOf(ActionTypes.FETCH_ENTRY_LIST):
      return {
        ...state,
        isFetching: true,
      };

    case fulfilledOf(ActionTypes.FETCH_ENTRY_LIST):
      return {
        ...state,
        isFetching: false,
        data: payload,
      };

    default:
      return state;
  }
}
