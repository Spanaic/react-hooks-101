import React from 'react'

// FIXME: コンポーネントの引数がanyなので修正が必要
const Event = ({event, dispatch}) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
    if (result) {
      dispatch(
        {
          // こちらはAppコンポーネントと違い、文字列で渡すと動作する
          type: 'DELETE_EVENT',
          // type: ActionType.DELETE_EVENT,
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
