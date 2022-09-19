import React, { useState, useContext } from "react";
import { todoContext } from "../TodoContext";
import Navbar from "../components/navbar";

function CompletedTodos() {
  const { todos, settodos, completeTask } = useContext(todoContext);

  const deleteTasks = ()=> {
    const updatedTodo = todos.filter (x=> x.isComplete !== true)
    settodos(updatedTodo)
  }

  return (
    <>
      <Navbar />
      <h2>Todos Count: {todos.length} </h2>
      <ul>
        {todos
          .filter((x) => x.isComplete == true)
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <input
                style={{ marginLeft: "10px" }}
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => completeTask(todo.id)}
              />
            </li>
          ))}
      </ul>
      <button onClick={()=>deleteTasks()}>Delete</button>
    </>
  );
}

export default CompletedTodos;
