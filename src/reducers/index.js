import { combineReducers } from 'redux';
import usersReducer from './usersReducer'; 
import activeUserReducer from './activeUserReducer'; 

const rootReducer = combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer
});

export default rootReducer;
