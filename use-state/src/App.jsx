import { useState } from 'react'
import './App.css'
import { Counter } from './Counter'

function App() {
  
  function slowSetter(){
    console.log("State Update")
    return "Muhammad"
  }
  // Passing a function instead of value
  // If u give a function to usestate it will run only once
  const [name, setName] = useState(slowSetter)
  const [age, setAge] = useState(21)
  function handleChange(){
    setName("Shariq")
    // In raect decleative nature, the values are not updating unless the whole reacr app is re-rendered.
    setAge(age)
    // console.log("After 1", age)

    // setAge(age + 1)
    // console.log("After 2", age)
    // When the function is depends on the previous number then use the function instead
    // setAge((currentAge) => {
    //   return currentAge + 1
    // })

  }
  return (
    <>
      <h1 onClick={handleChange}>Hi, Im { name } <br /> My Age is {age}</h1><br />
      <Counter />
    </>
  )
}

export default App
