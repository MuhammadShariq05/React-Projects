import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodos() {
    if (newTodo === "") return alert("Empty Input");
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodo, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodo("");
  }

  function toggleTodo(todoId, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === todoId) return {...todo, completed}
        else return todo
      })
    })
  }

  function deleteItem(todoId) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != todoId)
    })
  }

  return (
    <>
      <div className="new-todo-form">
        <label htmlFor="todo-input">
          <h1>Todos</h1>
        </label>
        <br />
        <input
          type="text"
          id="todo-input"
          placeholder="Write Todo here"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button onClick={addTodos}>Add Todo</button>
        <ul id="list">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="list-item">
                <label className="list-item-label">
                  <input
                    checked={todo.completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                  <span className="span-items"data-list-item-text>{todo.name}</span>
                </label>
                <button 
                onClick={() => {deleteItem(todo.id)}}
                className="delete-items"data-button-delete>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
