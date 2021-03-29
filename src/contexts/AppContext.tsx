import React, { createContext, useReducer } from 'react';
import eventsReducer, { EventAction, EventStates } from '../reducers/events'
import operationLogsReducer, { OperationLogAction, OperationLogStates } from '../reducers/operationLogs';

// context用にstateとdispatchをまとめる
  // stateの最終的な型を定義することでエラーが解決した（EventStateの配列をstateプロパティに渡すことで解決）
export type EventStateWithAction = {
  eventState: EventStates;
  eventDispatch: React.Dispatch<EventAction>;
}
export type OperationLogStateWithAction = {
  operationLogState: OperationLogStates;
  operationLogDispatch: React.Dispatch<OperationLogAction>
}

// NOTE: contextを分割して、一つのprovideにまとめる方法を取る
  // 無理にcombineReducerでreducerをまとめようとしない
    // https://qiita.com/jonakp/items/58c9c383473d02479ea7
    // https://qiita.com/jonakp/items/58c9c383473d02479ea7
export const EventContext = createContext({} as EventStateWithAction)

export const OperationLogContext = createContext({} as OperationLogStateWithAction)

const EventProvider = (props: { children: React.ReactNode }) => {
  const initialEventState = {
    events: []
  }

  const [eventState, eventDispatch] = useReducer<React.Reducer<EventStates, EventAction>>(eventsReducer, initialEventState)

  return (
    <EventContext.Provider value={{ eventState, eventDispatch }}>
      {props.children}
    </EventContext.Provider>
  )
}

const OperationLogProvider = (props: { children: React.ReactNode }) => {
  const initialOperationLogState = {
    operationLogs: []
  }

  const [operationLogState, operationLogDispatch] = useReducer<React.Reducer<OperationLogStates, OperationLogAction>>(operationLogsReducer, initialOperationLogState)

  return (
    <OperationLogContext.Provider value={{ operationLogState, operationLogDispatch }}>
      {props.children}
    </OperationLogContext.Provider>
  )
}

const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <EventProvider>
      <OperationLogProvider>
        {props.children}
      </OperationLogProvider>
    </EventProvider>
  )
}

export default AppProvider;
