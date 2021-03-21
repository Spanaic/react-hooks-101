import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event'
import reducer, {EventState, EventAction, ActionType} from '../reducers/'

const App: React.FC = () =>  {
  // useReducerを使う際の定型文
  // const [state, dispatch] = useReducer(reducer, initialArg, init)
  const [state, dispatch] = useReducer<React.Reducer<EventState[], EventAction>>(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function addEvent(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    console.log({title, body})
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
    <div className="container-fluid">
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

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
function userState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
