import { createStore, combineReducers } from 'redux';

import CategoryReducer from './reducers/category.reducer';
import FernetReducer from './reducers/fernets.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  fernets: FernetReducer,
});

export default createStore(RootReducer);
