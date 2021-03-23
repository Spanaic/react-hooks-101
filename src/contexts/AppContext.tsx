import { createContext } from 'react';

const AppContext = createContext()

export default AppContext;
// provider(提供者)でトップレベルからコンポーネントをラップする
  // 全てのコンポーネントにcontextを提供可能にするため
// 受け取る側はconsumerコンポーネントを使う
  // providerにラップされていればどこでも使うことが出来る
