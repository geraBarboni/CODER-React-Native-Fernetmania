import { FERNETS } from '../actions/fernets.actions';

const initialState = {
  fernets: [],
};

const fernetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FERNETS:
      return {
        ...state,
        fernets: action.payload,
      };
    default:
      return state;
  }
};

export default fernetsReducer;
