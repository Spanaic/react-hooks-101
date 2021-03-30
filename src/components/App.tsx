import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppProvider from '../contexts/AppContext'

const App: React.FC = () =>  {
  // reducerはContextに格納したので削除
  return (
    // stateとdispatchをproviderのvalueに設定する
    // <AppContext.Provider value={{ state, dispatch }}>
    // NOTE: Providerに複数のContextを持たせて切り出した
    <AppProvider>
      <div className="container-fluid">
        {/* <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} /> */}
        {/* NOTE:useContextを使うため、propsにstateとdispatchを渡す必要がなくなる */}
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppProvider>
  );
}

export default App;
