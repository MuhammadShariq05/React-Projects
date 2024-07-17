import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
       <div className="background" style={{backgroundColor: color}}>
          <div className='holder'>
            <button className="red" onClick={()=> setColor("red")}>Red</button>
            <button className="yellow" onClick={()=> setColor("yellow")}>Yellow</button>
            <button className="black" onClick={()=> setColor("black")}>Black</button>
            <button className="purple" onClick={()=> setColor("purple")}>Purple</button>
            <button className="green" onClick={()=> setColor("green")}>Green</button>
            <button className="blue" onClick={()=> setColor("blue")}>Blue</button>
            <button className="white" onClick={()=> setColor("white")}>Default</button>
          </div>
       </div>
    </>
  )
}


export default App
