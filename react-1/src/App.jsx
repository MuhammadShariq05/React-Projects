import { useState } from 'react'
import './App.css'
import { TodoList } from './TodoList'
import { User } from './USer'

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
      <User name="Muhammad Shariq" age="21"/>
    </>
  )
}

export default App
