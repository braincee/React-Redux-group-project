import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import missionReducer from './missions/missions';
import thunk from 'redux-thunk';

const rootReducer = combineReducers( {
    missions: missionReducer,
});

const store = createStore( rootReducer, applyMiddleware( thunk ) );

export default store;