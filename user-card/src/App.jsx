import { useState } from "react";
import "./App.css";
import user from "./user.json";
import { UserCard } from "./UserCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />

      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </>
  );
}

export default App;
