import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="new-todo-form">
        <label htmlFor="todo-input"><h1>Todos</h1></label>
        <br />
        <input type="text" id="todo-input" placeholder='Write Todo here'/>
        <button>Add Todo</button>
      </div>
    </>
  )
}

export default App
 