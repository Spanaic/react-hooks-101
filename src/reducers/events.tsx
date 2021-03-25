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
}
export type EventStates = {
  events: EventState[]
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

  // Sが戻り値として返ってくる事を期待するが、Sが戻ってこないためエラーが出た可能性あり(S = EventStates)
// const events: React.Reducer<EventState[], EventAction> = (state: EventState[], action: EventAction) => {
  // FIXME: eventsReducerの戻り値の型を正しい型に修正する
const eventsReducer: any = (state: EventStates, action: EventAction) => {
  switch(action.type) {
    case ActionType.CREATE_EVENT:
      const event = { title: action.payload.title, body: action.payload.body }
      const length = state.events.length
      const id = length === 0 ? 1 : state.events[length - 1].id + 1
      // 波括弧をスプレッド演算子で展開したときのスコープを考える
      // NOTE: 配列を返すだけじゃなく、eventsプロパティの値として配列を返すオブジェクトに書き換えが必要だった。型定義の見直しと、値が取れないエラーの場合はreducerの戻り値や、処理内容を確認する。
      return { events: [...state.events, { id: id, ...event }] }
    case ActionType.DELETE_EVENT:
      return { events: state.events.filter(event => event.id !== action.payload.id ) }
    case ActionType.DELETE_ALL_EVENT:
      return { events: [] }
      // return []
    default:
      return state.events
  }
}

export default eventsReducer;
