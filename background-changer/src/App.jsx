import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  const handleColorChange = (color) => {
    setColor(color);
  };
  return (                 
    <>
       <div className="background" style={{backgroundColor: `${color}`}}>
          <div className='holder'>
            <button className="red" onClick={() => handleColorChange("red")}>Red</button>
            <button className="yellow" onClick={() => handleColorChange("yellow")}>Yellow</button>
            <button className="black" onClick={() => handleColorChange("black")}>Black</button>
            <button className="purple" onClick={() => handleColorChange("#535bf2")}>Purple</button>
            <button className="green" onClick={() => handleColorChange("green")}>Green</button>
            <button className="blue" onClick={() => handleColorChange("blue")}>Blue</button>
            <button className="default" onClick={() => handleColorChange("white")}>Default</button>
          </div>
       </div>
    </>
  )
}


export default App
