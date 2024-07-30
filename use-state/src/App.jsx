import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function slowSetter(){
    console.log("State Update")
    return "Muhammad"
  }
  // Passing a function instead of value
  // If u give a function to usestate it will run only once
  const [name, setName] = useState(slowSetter)
  function handleChange(){
    setName("Shariq")
  }
  return (
    <>
      <h1 onClick={handleChange}>{ name }</h1>
    </>
  )
}

export default App
