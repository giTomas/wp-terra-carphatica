import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import members from '../reducers/membersReducer';
import member from '../reducers/memberReducer';
import categories from '../reducers/categoriesReducer';
import {priroda, kultura, historia, ochrana } from '../reducers/categoryReducer';
import article from '../reducers/articleReducer';
import { loadState, saveState } from '../localStorage';

// app doesn't need to know exact config
const configureStore = () => {
  const persistedState = loadState();
  const sekcie = combineReducers({
    priroda,
    kultura,
    historia,
    ochrana,
  })

  const rootReducer = combineReducers({
    members,
    member,
    categories,
    article,
    sekcie,
  });

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

return store;
};

export default store;
