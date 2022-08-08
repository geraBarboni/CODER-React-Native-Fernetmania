import { FERNETS } from '../../data/fernets';
import { FILTERED_FERNET, SELECT_FERNET } from '../actions/fernet.action';

const initialState = {
  fernets: FERNETS,
  filteredFernet: [],
  selected: null,
};

const FernetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FERNET:
      return {
        ...state,
        selected: state.fernets.find((fernet) => fernet.id === action.fernetID),
      };

    case FILTERED_FERNET:
      return {
        ...state,
        filteredFernet: state.fernets.filter(
          (fernet) => fernet.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default FernetReducer;
