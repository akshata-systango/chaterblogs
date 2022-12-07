import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    reducers,
  });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

export default store;