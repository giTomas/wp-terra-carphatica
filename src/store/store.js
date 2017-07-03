import {  createStore, combineReducers } from 'redux';
import membersReducer from '../reducers/membersReducer';

const reducers = combineReducers({
  membersState: membersReducer,
});

const store = createStore(reducers);

export default store;
