import { FERNETS } from '../../data/fernets';
import { SELECT_FERNET } from '../actions/fernet.action';

const initialState = {
  fernets: FERNETS,
  fernet: [],
};

const fernetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FERNET:
      return {
        ...state,
        fernet: action.payload,
      };
    default:
      return state;
  }
};

export default fernetReducer;
