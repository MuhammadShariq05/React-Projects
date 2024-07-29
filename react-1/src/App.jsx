import { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { User } from './USer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoList isComplete="true">
        <h3>Title</h3>
      </TodoList>
      <User name="Muhammad Shariq" age="21" />
    </>
  );
}

export default App;
