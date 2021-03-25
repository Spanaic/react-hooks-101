import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';

export type operationLogState = {
  description: string;
  operatedAt: Date;
}

export enum operationLogActionType {
  ADD_OPERATION_LOG = 'ADD_OPERATION_LOG',
  DELETE_ALL_OPERATION_LOGS = 'DELETE_ALL_OPERATION_LOGS'
}

export type operationLogAction = {
  type: operationLogActionType;
  payload: operationLogState
}

const operationLogs = (state:operationLogState[] = [], action: operationLogAction) => {
  switch(action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.payload.description,
        operatedAt: action.payload.operatedAt
      }
      // 操作ログは新しく操作したログが常に上に表示されて欲しいので, prevStateの前に挿入する。
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs;
