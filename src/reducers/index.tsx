import { combineReducers } from 'redux'
import eventsReducer from './events'
import operationLogs from './operationLogs';

export default combineReducers({
  eventsReducer,
  operationLogs
});