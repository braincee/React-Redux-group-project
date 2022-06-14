import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
