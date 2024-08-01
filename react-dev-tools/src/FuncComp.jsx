import { useEffect, useState } from "react";
import { DisplayString } from "./DisplayString"

export function FuncComp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Re-render")
    document.title = name
  }, [name])

  return (
    <>
      <div>
        <input
          type="text"
          placeholder={"Enter your name here..."}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h3 className="profile">
          <DisplayString name={name} age={age}/>
        </h3>
        <h2>{age}</h2>
        <button className="counter" onClick={() => setAge(currentAge => currentAge - 1)}>
          -
        </button>
        <button className="counter" onClick={() => setAge(currentAge => currentAge + 1)}>
          +
        </button>
        <br />
        <br />
      </div>
    </>
  );
}
