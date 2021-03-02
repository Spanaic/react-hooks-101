import React, { Fragment, useState } from 'react';
import { isReturnStatement } from 'typescript';

const App = () =>  {
  // useStateは配列を返す
    // 状態と関数が返ってくるので分割代入する
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(previousCount => previousCount * 2)
  const divide3 = () => setCount(
    previousCount => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
    }
    // previousCount => {
    //   if (previousCount % 3 === 0) {
    //     return previousCount / 3;
    //   } else {
    //     return previousCount
    //   }
    // }
  )

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3の倍数の時岳3で割る</button>
      </div>
    </>
  );
}

export default App;
