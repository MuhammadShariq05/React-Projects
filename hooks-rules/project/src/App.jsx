import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <StateObject />
      <StateFromFn />
      <Count />
    </>
  )
}

const StateObject = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 })
  const handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })
  const { age, siblingsNum } = state

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  )
}

const StateFromFn = () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || crypto.randomUUID()
  })
  return <div>Token is {token}</div>
}

const Count = () =>{
  const [count, setCount] = useState(0);
  return(
    <>
      <h3>count {count} </h3>
      <button className='reset' onClick={() => {setCount(0)}}>reset</button>
      <button className='reset' onClick={() => {setCount(count + 1)}}>+</button>
      <button className='reset' onClick={() => {setCount(count - 1)}}>-</button>
    </>
  ) 
}

export default App
