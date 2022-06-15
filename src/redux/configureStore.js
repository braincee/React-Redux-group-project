import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dragonReducer from './dragons/Dragons';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  missions: missionReducer,
  dragons: dragonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
