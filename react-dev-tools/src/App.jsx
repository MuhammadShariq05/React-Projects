import { useState } from 'react'
import { FuncComp } from './FuncComp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FuncComp />
    </>
  )
}

export default App
