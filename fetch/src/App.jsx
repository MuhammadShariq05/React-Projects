import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <>
      <div>
        <h1>User</h1>
      </div>
    </>
  );
}

export default App;
