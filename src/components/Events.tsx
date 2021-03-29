import { useContext } from 'react'
import Event from './Event'
// import AppContext from '../contexts/AppContext';
import { EventContext } from '../contexts/AppContext';

const Events = () => {
  const {eventState} = useContext(EventContext)
  return(
    <>
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
          {eventState.events.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events;
