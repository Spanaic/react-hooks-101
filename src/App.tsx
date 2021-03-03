import React, { useState, useEffect } from 'react';

type props = {
  name: string;
  price: number
}

const App = (props: props) =>  {
  const [state, setState] = useState(props)
  const {name, price} = state

  // useEffectは関数を受け取る
  // レンダリング後に呼ばれる
    // componentDidMountに似ている
    // 値が変わらなければ呼び出されない
    // 割と頻繁に呼び出されるということを忘れずに！
  useEffect(() => {
    console.log('This is like componentDidMount or componetDidUpdate.')
  })

  // 最初の一回だけ呼び出したい場合
    // 第二引数に空の配列を渡すだけ！
    // useEffectはコンポーネント内に幾つでも書ける
  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [])

  // 特定の状態が変更されたときに呼び出したい場合
    // 空配列内に変更をwatchする値を入れる
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])


  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
