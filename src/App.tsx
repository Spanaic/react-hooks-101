import React, { useState } from 'react';

type props = {
  name: string;
  price: number
}

const App = (props: props) =>  {
  const [state, setState] = useState(props)
  const {name, price} = state

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
