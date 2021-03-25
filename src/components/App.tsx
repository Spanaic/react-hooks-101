import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import eventsReducer, {EventState, EventAction, EventStates} from '../reducers/events'
import operationLogs, { operationLogState } from '../reducers/operationLogs';

type initialStateType = {
  events: EventState[]
  operationLogs: operationLogState[]
}

const App: React.FC = () =>  {

  const initialState: initialStateType = {
    events: [],
    // operationLogsの初期値も設定する
    operationLogs: []
  }

  // トップレベルコンポーネントでreducersの初期化をしている
  const [state, dispatch] = useReducer<React.Reducer<EventStates, EventAction>>(eventsReducer, initialState)

  return (
    // stateとdispatchをproviderのvalueに設定する
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/* <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} /> */}
        {/* useContextを使うため、propsにstateとdispatchを渡す必要がなくなる */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
