// Controlled Input and Uncontrolled Input

import { useState } from "react";

export function StateInput(){
  const [name, setName] = useState("Muhammad")

  return(
    <>
      <div>
        {/* React Controlled Input (Uncontrolled Input) */}
        <input type="text" value={name} />
        {/* Browser Controlled Input  (Uncontrolled Input) */}
        <input type="text" defaultValue={name} />
        {/* Controlled Input */}
        <input type="text" Value={name} onChange={(e) => {setName(e.target.value)}}/>
      </div>
    </>
  )
}