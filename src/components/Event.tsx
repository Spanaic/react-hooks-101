import { useContext } from 'react'

import { ActionType } from '../reducers/events'
import { EventContext, OperationLogContext } from '../contexts/AppContext'
import { OperationLogActionType } from '../reducers/operationLogs'
import { timeCurrentIso8601 } from '../utils'

// FIXME: コンポーネントの引数がanyなので修正が必要
const Event = ({event}) => {
  const { eventDispatch } = useContext(EventContext)
  const { operationLogState, operationLogDispatch } = useContext(OperationLogContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      eventDispatch(
        {
          type: ActionType.DELETE_EVENT,
          payload: {
            id: id,
            title: event.title,
            body: event.body
          }
        }
      )

      operationLogDispatch({
        type: OperationLogActionType.ADD_OPERATION_LOG,
        payload: {
          description: `イベント(id=${id})を削除しました。`,
          operatedAt: timeCurrentIso8601()
        }
      })
    }
  }
  return<tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
}

export default Event;
