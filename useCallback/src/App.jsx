import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // secallback- is like a usememo but for function
  const printName = useCallback(() => {
    console.log(`Name: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log("In effect");
    printName();
  }, [printName]);
  return (
    <>
      <h2>Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <h2>Age:</h2>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </>
  );
}

export default App;
