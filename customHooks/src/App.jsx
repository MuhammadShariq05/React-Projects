import { useState } from "react";
import { useToggle } from "./useToggle";
import "./App.css";


function App() {
  // custom hooks
  const inpName = useInputValue("");
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useToggle(false);

  return (
    <>
      <body
        style={{
          background: isDarkMode ? "#242424" : "white",
          color: isDarkMode ? "white" : "#242424",
        }}
>
        <div>
          <input type="text" {...inpName} />
          <button onClick={() => setIsDarkMode((d) => !d)}>Dark Mode</button>
        </div>
      </body>
    </>
  );
}

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

export default App;
