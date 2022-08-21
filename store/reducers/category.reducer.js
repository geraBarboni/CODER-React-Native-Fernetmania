import { CATEGORIES } from '../../data/categories.js';
import { URL_API } from '../../constants/DataBase';
import { SELECT_CATEGORY } from '../actions/category.action';

const initialState = {
  categories: CATEGORIES(),
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const IndexCategory = state.categories.findIndex(
        (cat) => cat.id === action.categoryID
      );
      if (IndexCategory === 2) return state;
      return { ...state, selected: state.categories[IndexCategory] };
    default:
      return state;
  }
};

export default CategoryReducer;
