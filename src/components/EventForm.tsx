import React, { useState, useContext } from 'react'
import { ActionType } from '../reducers'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
  // Appコンポーネントから渡ってくるstateとdispatchを利用するためuseReducerをこのファイルでは使わない
    // オブジェクトが独立してしまうため、AppとEventFormで使うstateとdispatchを共有するためにpropsで渡ってきた値(関数)を使う
  // useReducerを使う際の定型文
  // const [state, dispatch] = useReducer<React.Reducer<EventState[], EventAction>>(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const {state, dispatch} = useContext(AppContext)

  function addEvent(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    dispatch({
      type: ActionType.CREATE_EVENT,
      payload:
        {
          id: 1,
          title: title,
          body: body,
        }
      }
    )

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: ActionType.DELETE_ALL_EVENT,
        payload: {
          id: e.target.id,
          title: e.target.title,
          body: e.target.body
        }
      })
    }
  }

  // disabledボタンを制御するための真偽値を挿入する
  const unCreatable =  title === '' || body === ''


  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title}  onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable} >イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0} >全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm;
