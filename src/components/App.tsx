import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer, {EventState, EventAction} from '../reducers/'

const App: React.FC = () =>  {
  const [state, dispatch] = useReducer<React.Reducer<EventState[], EventAction>>(reducer, [])

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
function userState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
