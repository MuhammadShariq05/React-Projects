import { useState } from "react";
import "./App.css";


const INITIAL_VALUE = ["A","B","C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("")

  // Remove element from array
  function removeFirstElement() {
    setArray((currentArray) => {
      // Remove First Element
      return currentArray.slice(1);
    });
  }
  // Note :
  // adding element in index 2
  // [currentArray.slice(0, index), letter, currentArray.slice(index)] this returns array itself [1,2,3,4] want to add 3.5 in index 2 then it 
  //  will return [[1,2], 3.5, [3,4]]
  // what we want is [1,2,3.5,3,4] for that we have to use (Spread Syntax) [...currentArray.slice(0, index), letter, ...currentArray.slice
  // (index)]
  // Remove element when the conditions are matched
  function removeAllBs(letter) {
    setArray((currentArray) => {
      // Remove All B's
      return currentArray.filter((element) => element !== letter);
    });
  }
  //  Add A,B,C at the start
  function addToStart(letter){
    setArray((currentArray) =>{
      return [letter, ...currentArray]
    })
  }

  // Add A,B,C at the End
  function addToEnd(letter){
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  // Reset
  function reset(){
    setArray(INITIAL_VALUE);
  }

  // Clear
  function clear(){
    setArray([])
  }

  // Update A to H
  function updateAtoH(letter){
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if(element === "A") return "H"
        return element
      });
    })
  }

  return (
    <>
      <h1>{array.join(", ")}</h1>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <button onClick={() => removeAllBs("B")}>Remove All B's</button>
      <button onClick={() => addToStart("A")}>Add A at the start</button>
      <button onClick={() => addToStart("B")}>Add B at the start</button>
      <button onClick={() => addToStart("C")}>Add C at the start</button>
      <button onClick={() => addToEnd("A")}>Add A at the End</button>
      <button onClick={() => addToEnd("B")}>Add B at the End</button>
      <button onClick={() => addToEnd("C")}>Add C at the End</button>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => updateAtoH("A")}>Set A to H</button>
      <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
      <button onClick={() => addToStart(value)}>Add Value </button>
    </>
  );
}

export default App;
