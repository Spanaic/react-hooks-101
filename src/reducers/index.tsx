type actionType = {
  type: 'CREATE_EVENT' | 'DELETE_EVENT' | 'DELETE_ALL_EVENT';
  title: string;
  body: Text;
}

// stateは未定義の可能性があるので初期値を入力しておく
const events = (state = [], action: actionType) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      // 波括弧をスプレッド演算子で展開したときのスコープを考える
      return [...state, { id: id, ...event }]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENT':
      return state
    default:
      return state
  }
}

export default events