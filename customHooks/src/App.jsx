import { useState } from 'react'
import './App.css'

function App() {
  // custom hooks
  const [name, setName] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <>
      <body style={{
        background: isDarkMode ? "#242424" : "white",
        color: isDarkMode ? "white" : "#242424"
      }}>
        <div>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />  
          <button onClick={() => setIsDarkMode(d => !d)}>Dark Mode</button>
        </div>  
      </body>    
    </>
  )
}

export default App
