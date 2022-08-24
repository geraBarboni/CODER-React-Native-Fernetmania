import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import fernetsReducer from './reducers/fernets.reducer';
import fernetReducer from './reducers/fernet.reducer';
import publicationsReducer from './reducers/publication.reducer';

const RootReducer = combineReducers({
  fernets: fernetsReducer,
  fernet: fernetReducer,
  publications: publicationsReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
