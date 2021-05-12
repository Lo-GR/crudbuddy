import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
// import crudListReducer from './crud-list-reducer';
// import newToggleRecuder from "./new-visible-reducer";

const rootReducer = combineReducers({
  firestore: firestoreReducer
  // crudList: crudListReducer,
  // toggleNew: newToggleRecuder 
});

export default rootReducer;