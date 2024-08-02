import { useState, useEffect } from "react";
import "./App.css";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]); // Initialize users as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(undefined);

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else return Promise.reject(res);
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(e);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error!</h2>; 
  }

  return (
    <>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} /> // Ensure each user has a unique key
        ))}
      </ul>
    </>
  );
}

export default App;
