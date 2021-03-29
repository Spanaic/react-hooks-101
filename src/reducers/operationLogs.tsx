import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';

export type OperationLogState = {
  description: string;
  operatedAt: string;
}

export enum OperationLogActionType {
  ADD_OPERATION_LOG = 'ADD_OPERATION_LOG',
  DELETE_ALL_OPERATION_LOGS = 'DELETE_ALL_OPERATION_LOGS'
}

export type OperationLogAction = {
  type: OperationLogActionType;
  payload: OperationLogState
}

export type OperationLogStates = {
  operationLogs: OperationLogState[]
}

const operationLogs: any = (state:OperationLogStates, action: OperationLogAction) => {
  switch(action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.payload.description,
        operatedAt: action.payload.operatedAt
      }
      // 操作ログは新しく操作したログが常に上に表示されて欲しいので, prevStateの前に挿入する。
      return { operationLogs: [operationLog, ...state.operationLogs] }
    case DELETE_ALL_OPERATION_LOGS:
      return { operationLogs: [] }
    default:
      return state.operationLogs
  }
}

export default operationLogs;
