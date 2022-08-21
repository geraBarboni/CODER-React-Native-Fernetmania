import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import categoriesReducer from './reducers/category.reducer';
import FernetReducer from './reducers/fernets.reducer';

const RootReducer = combineReducers({
  categories: categoriesReducer,
  fernets: FernetReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
