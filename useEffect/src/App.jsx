import { useState } from "react";
import "./App.css";
import { Child } from "./Component";
 
function App() {
  const [show, setShow] = useState(true)
  const childComponent = show ? <Child /> : null
  return (
    <>
      <div>
        <button onClick={() => setShow((currentShow) => !currentShow)}>
          Show/Hide
        </button>
        {childComponent}
      </div>
    </>
  );
}

export default App;
