import React, { useState, useContext } from "react";
import { todoContext } from "../TodoContext";
import uuid from "react-uuid";
import Navbar from '../components/navbar'

function AddTodo() {
  const { todos, settodos } = useContext(todoContext);

  const [todo, setTodo] = useState({
    id: 0,
    text: "",
    isComplete: false,
  });
  const addTodo = (e) => {
    e.preventDefault();
    settodos([...todos, todo]);
    setTodo({text: ''})
  };

  return (
    <>
      <Navbar/>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          value={todo.text}
          onChange={(e) => {
            setTodo({ text: e.target.value, isComplete: false, id: uuid() });
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodo;
