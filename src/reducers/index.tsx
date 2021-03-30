import { combineReducers } from 'redux'
import eventsReducer from './events'
import operationLogs from './operationLogs';

const rootReducers = combineReducers({
  eventsReducer,
  operationLogs
})

export default rootReducers;