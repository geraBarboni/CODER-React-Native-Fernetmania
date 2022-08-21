import { CATEGORIES } from '../actions/categories.action';

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  console.log(state, 'soy el state');
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
