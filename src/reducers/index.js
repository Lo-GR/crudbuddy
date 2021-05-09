import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import crudReducer from './crud-list-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  crudReducer: crudReducer
});

export default rootReducer;