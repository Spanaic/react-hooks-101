import React, { useState } from 'react';

type props = {
  name: string;
  price: number
}

const App = (props: props) =>  {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
