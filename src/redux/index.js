import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash.throttle'
import members from './reducers/membersReducer';
import member from './reducers/memberReducer';
import article from './reducers/articleReducer';
import posts from './reducers/blogPostsReducer';
import { loadState, saveState } from './localeStorage/';

// app doesn't need to know exact config
const configureStore = () => {

  const persistedState = loadState();

  const rootReducer = combineReducers({
    members,
    member,
    article,
    posts
  });

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk),
  );

  // store.subscribe(throttle(() => {
  //   saveState(store.getState());
  // }), 1000);

 return store;
};

export default configureStore;
