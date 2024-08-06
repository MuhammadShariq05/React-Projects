import { useState } from "react";
import useToggle from "./useToggle";
import "./App.css";

function App() {
  // custom hooks
  const inpName = useInputValue("");
  const { value: isDarkMode, toggle: toggleDarkMode } = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#242424" : "white",
        color: isDarkMode ? "white" : "#242424",
        height: "100vh", // Ensure the body takes the full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
        
      }}
    >
      <div>
        {/* under the hook */}
        {/* <input type="text" value={inpName.value} onChane={inpName.OnChange()}/> */}
        <input type="text" {...inpName} />
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </div>
    </div>
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
