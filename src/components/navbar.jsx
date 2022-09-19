import React from "react";
import { Link } from "react-router-dom";


function navbar() {
  return (
    <nav style={{marginBottom: '20px'}}>
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/add" style={{ marginRight: "20px" }}>Add</Link>
      <Link to="/completed" style={{ marginRight: "20px" }}>Completed</Link>
    </nav>
  );
}

export default navbar;
