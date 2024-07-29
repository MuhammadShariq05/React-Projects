import { useState } from 'react'
import './App.css'
import { TodoList } from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList isComplete="true">
        <div className='todoList'>
          <h1 className='title'>Title</h1>
          <p className='description'>Discription</p>
        </div>
      </TodoList>
    </>
  )
}

export default App
