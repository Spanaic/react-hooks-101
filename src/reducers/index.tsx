// 自分が最初に定義した型(間違い)
// type actionType = {
//   // type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENT';
//   title: string;
//   body: Text;
// }

export type EventState = {
  id: number;
  title: string;
  body: string | number;
  // body: Text;
}
export enum ActionType {
  CREATE_EVENT = 'CREATE_EVENT',
  DELETE_EVENT = 'DELETE_EVENT',
  DELETE_ALL_EVENT = 'DELETE_ALL_EVENT',
}
export type EventAction = {
  type: ActionType;
  payload: EventState;
}


const events: React.Reducer<EventState[], EventAction> = (state: EventState[], action: EventAction) => {
  switch(action.type) {
    case ActionType.CREATE_EVENT:
      const event = { title: action.payload.title, body: action.payload.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      // 波括弧をスプレッド演算子で展開したときのスコープを考える
      return [...state, { id: id, ...event }]
    case ActionType.DELETE_EVENT:
      return state
    case ActionType.DELETE_ALL_EVENT:
      return state
    default:
      return state
  }
}

// stateは未定義の可能性があるので初期値を入力しておく
// const events = (state = [], action: actionType) => {
//   switch(action.type) {
//     case 'CREATE_EVENT':
//       const event = { title: action.title, body: action.body }
//       const length = state.length
//       const id = length === 0 ? 1 : state[length - 1].id + 1
//       // 波括弧をスプレッド演算子で展開したときのスコープを考える
//       return [...state, { id: id, ...event }]
//     case 'DELETE_EVENT':
//       return state
//     case 'DELETE_ALL_EVENT':
//       return state
//     default:
//       return state
//   }
// }

export default events
