import { useState } from "react";

export function Counter(){
  const [count, setCount] = useState(0)

  function Increment(){
    return setCount(count + 1)
  }

  function Decrement(){
    return setCount(count - 1)
  }
  return(
    <>
      <div>
        <h1 className="count">{count}</h1>
        <button onClick={Decrement}>-</button>
        <button onClick={Increment}>+</button>
      </div>
    </>
  )
}