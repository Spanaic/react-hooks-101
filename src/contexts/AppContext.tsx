import { createContext } from 'react';
import { EventState, EventAction } from '../reducers'

// context用にstateとdispatchをまとめる
  // stateの最終的な型を定義することでエラーが解決した（EventStateの配列をstateプロパティに渡すことで解決）
export type EventStateWithAction = {
  state: EventState[];
  dispatch: React.Dispatch<EventAction>;
}

// 引数を入れないとTSからエラーで怒られるので注意
  // https://qiita.com/_akira19/items/8911567227ce38a1bdf6
    // stateが配列なので型定義が難しい
const AppContext = createContext({} as EventStateWithAction)

export default AppContext;
// provider(提供者)でトップレベルからコンポーネントをラップする
  // 全てのコンポーネントにcontextを提供可能にするため
// 受け取る側はconsumerコンポーネントを使う
  // providerにラップされていればどこでも使うことが出来る
    // consumerを使うvalueの受け取り方は古い記述。今はuseContextを使う