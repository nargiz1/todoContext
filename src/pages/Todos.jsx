import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../TodoContext";
import Navbar from "../components/navbar";

function Todos() {
  const { todos, completeTask } = useContext(todoContext);

  return (
    <>
      <Navbar />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <input
            style={{marginLeft: '10px'}}
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => completeTask(todo.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
