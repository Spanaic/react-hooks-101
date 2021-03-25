import { useContext } from 'react'

// import { DELETE_EVENT } from '../actions'
import { ActionType } from '../reducers/events'
import AppContext from '../contexts/AppContext'

// FIXME: コンポーネントの引数がanyなので修正が必要
const Event = ({event}) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      dispatch(
        {
          type: ActionType.DELETE_EVENT,
          payload: {
            id: id,
            title: event.title,
            body: event.body
          }
        }
      )
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
