import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState([
    { id: crypto.randomUUID(), Name: "Item 1" },
    { id: crypto.randomUUID(), Name: "Item 2" },
  ]);

  function addItem() {
    setItem((currentItems) => {
      return [{ id: crypto.randomUUID(), Name: "New Item" }, ...currentItems];
    });
  }

  return (
    <>
      <div>
        <h2>Items</h2>
        <button onClick={addItem}>Add Item</button>
        {/* Rendering list */}
        <pre>
          {item.map((item) => {
            return (
              <div key={item.id}>
                {item.Name}
                <input type="text" />
              </div>
            );
          })}
        </pre>
      </div>
    </>
  );
}

export default App;
