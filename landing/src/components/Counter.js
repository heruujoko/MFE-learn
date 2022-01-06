// @flow
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
    <span>{count}</span><br />
    <button onClick={() => {setCount(count + 1)}}>count!</button>
    </>
  )
}

export default Counter;