import { useEffect ,useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const divRef = useRef();
  const income = 20000;
  
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10
    }, [5000])
  })

  return (
    <>
      <div ref={divRef}>{income}</div>
    </>
  )
}

export default App
