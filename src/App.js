import "./App.css";
import Index from "./Components/Index";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [userCount, setuserCount] = useState(0);

  const adduser = () => {
    setuserCount(userCount + 1);
  };
  return (
    <div>
      <Navbar userCount={userCount} />
      <button onClick={adduser}>Add User</button>
      <Index />
    </div>
  );
}

export default App;
