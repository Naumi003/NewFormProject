import React from "react";

function Navbar({ userCount }) {
  return (
    <nav style={{ backgroundColor: "#282c34", padding: "1em", color: "white" }}>
      <h1>My App</h1>
      <div>User Count: {userCount}</div>
    </nav>
  );
}

export default Navbar;
