import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
// import AppContext from '../contexts/AppContext'
import AppProvider from '../contexts/AppContext'
import eventsReducer, {EventState, EventAction, EventStates} from '../reducers/events'
import operationLogsReducer, { OperationLogState, OperationLogAction, OperationLogStates } from '../reducers/operationLogs';
import rootReducers from '../reducers/operationLogs'

// type initialStateType = {
//   events: EventState[]
//   operationLogs: OperationLogState[]
// }

const App: React.FC = () =>  {

  // const initialState: initialStateType = {
  //   events: [],
  //   // operationLogsの初期値も設定する
  //   operationLogs: []
  // }

  // トップレベルコンポーネントでreducersの初期化をしている
  // const [state, dispatch]: [any, React.DispatchWithoutAction] = useReducer(rootReducers, initialState)
  // const [state, dispatch] = useReducer<React.Reducer<EventStates | OperationLogStates, EventAction | OperationLogAction>>(rootReducers, initialState)
  // const [state, dispatch] = useReducer<React.Reducer<EventStates, EventAction | OperationLogAction>>(eventsReducer, initialState)

  return (
    // stateとdispatchをproviderのvalueに設定する
    // <AppContext.Provider value={{ state, dispatch }}>
    <AppProvider>
      <div className="container-fluid">
        {/* <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} /> */}
        {/* useContextを使うため、propsにstateとdispatchを渡す必要がなくなる */}
        <EventForm />
        <Events />
      </div>
    </AppProvider>
  );
}

export default App;
