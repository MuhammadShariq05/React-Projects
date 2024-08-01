import { useEffect, useState } from "react";

export function NameComp(){
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [width, setWidth] = useState(window.innerWidth)

  function increament(){
    setAge(age +1)
  }
  function decreament(){
    setAge(age -1)
  }
   useEffect(() => {
    window.addEventListener("resize" , ()=>{
      setWidth(window.innerWidth)
    })
   },[])

  return(
    <>
      <input type="text" placeholder={"Enter your name here..."} value={name} onChange={(e) => {setName(e.target.value)}} />
      <h3 className="profile">My name is {name}, And I am {age} years old</h3>
      <h2>{age}</h2>
      <button className="counter" onClick={decreament}>-</button>
      <button className="counter" onClick={increament}>+</button>
      <br />
      <br />
      {width}
    </>
  )
}